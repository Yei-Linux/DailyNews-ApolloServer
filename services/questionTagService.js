const QuestionTags = require("../models/QuestionTags");
const mongoose = require("mongoose");

exports.getQuestionTags = async () => {
  return await QuestionTags.find();
};

exports.insertQuestionTag = async questionTagRequest => {
  for(let tag of questionTagRequest['tags']){
    const questionTag = new QuestionTags({comment : mongoose.Types.ObjectId(questionTagRequest['comment']),tag:mongoose.Types.ObjectId(tag['_id']) });  
    await questionTag.save();
  } 
  return {msg: "Inserted Correctly"} 
};

exports.getTagsByQuestionId = async questionId => {
  let tagByQuestionIdAggregate = await QuestionTags.aggregate([
    {
      $match: { comment: questionId }
    },
    {
      $lookup: {
        from: "tags",
        localField: "tag",
        foreignField: "_id",
        as: "tag"
      }
    },
    {
      $unwind: "$tag"
    }
  ]);
  return tagByQuestionIdAggregate.map( questionTagItem =>{return questionTagItem.tag} );
}; 
