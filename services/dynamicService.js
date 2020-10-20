exports.getTotalRows = async (dynamicRequest) => {
    const dynamicModel = require(`../models/${dynamicRequest['model']}`);
    let size = await dynamicModel.countDocuments({});
    return {size};
}