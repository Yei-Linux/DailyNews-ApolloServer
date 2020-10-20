const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const questionTagService = require("../services/questionTagService");

exports.insertComment = async commentRequest => {
  const comment = new Comment(commentRequest);
  return await comment.save();
};

exports.getQuestions = async questionRequest => {
  let questionAggregate = Comment.aggregate([
    {
      $match: { parent: undefined }
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    }
  ]);
  let response = await Comment.aggregatePaginate(questionAggregate, {
    page: questionRequest.page,
    limit: questionRequest.limit
  });

  return await this.addingTotalCommentsEachQuestion(response["docs"]);
};

exports.addingTotalCommentsEachQuestion = async questions => {
  for (let question of questions) {
    let numberComments = await this.getNumberTotalCommentByParentId(
      question._id
    );
    let tagsOfQuestion = await questionTagService.getTagsByQuestionId(
      question._id
    );

    question["numberComments"] = numberComments;
    question["tags"] = tagsOfQuestion;
  }
  return questions;
};

exports.getTreeCommentsByQuestionId = async (questionRequest,isMainParent) => {
  let childrenCommentArray = [];
  let optionConditional = this.getOptionsPaginationByChildren(isMainParent,questionRequest.skip,questionRequest.limit);

  let commentElementById = await Comment.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(questionRequest.questionId) }
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    }
  ]);

  let treeParentCommentsResponse = await Comment.populate(commentElementById,{
    path: "children",
    options: optionConditional
  });
  let treeParentComments = treeParentCommentsResponse[0]; 

  if (
    treeParentComments.parent == undefined ||
    treeParentComments.parent == null
  ) {
    let numberComments = await this.getNumberTotalCommentByParentId(
      treeParentComments._id
    );
    let tags = await questionTagService.getTagsByQuestionId(
      treeParentComments._id
    );

    treeParentComments["numberComments"] = numberComments;
    treeParentComments["tags"] = tags;
  }

  childrenCommentArray = [...childrenCommentArray, ...[treeParentComments]];
  let childrenComments = treeParentComments.children;
  if (childrenComments.length > 0) {
    for (let children of childrenComments) {
      let childrenNew = await this.getTreeCommentsByQuestionId({
        questionId: children._id,skip: 0, limit: 0
      },false);
      childrenCommentArray = [...childrenCommentArray, ...childrenNew];
    }
  }
  return childrenCommentArray;
};

exports.getOptionsPaginationByChildren = (isMainParent,skip,limit) => {
  return isMainParent ? {
    sort: {},
    skip,
    limit
  } : {};
}

exports.getFirstLevelChildrenByParentId = async parentRequest => {
  let firstLevelChildren = await Comment.find({parent: parentRequest.parentId});
  return {total:firstLevelChildren.length};
}

exports.getNumberTotalCommentByParentId = async parentId => {
  let childrenCommentNumber = 0;
  let treeParentComments = await Comment.findById(parentId).populate({
    path: "children",
    options: {}
  });

  let childrenComments = treeParentComments.children;
  if (childrenComments.length > 0) {
    for (let children of childrenComments) {
      childrenCommentNumber++;
      let childrenNumber = await this.getNumberTotalCommentByParentId(
        children._id
      );
      childrenCommentNumber += childrenNumber;
    }
  }
  return childrenCommentNumber;
};
