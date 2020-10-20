const Tag = require('../models/Tag');

exports.getTags = async () => {
    return await Tag.find();
}

exports.insertTag = async (tagRequest) => {
    const tag = new Tag(tagRequest);
    return await tag.save();
}

