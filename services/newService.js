const New = require('../models/New');

exports.getNews = async (newPaginationRequest) => {
    let response = await New.paginate({},{page: newPaginationRequest.page, limit: newPaginationRequest.limit});
    return response['docs'];
}

exports.getNewById = async (newId) => {
    return await New.findOne({_id: newId});
}

exports.insertNew = async (newRequest) => {
    let news = new New(newRequest);
    return await news.save();
}


