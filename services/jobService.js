const Job = require('../models/Job');

exports.getJobs = async (jobPaginationRequest) => {
    let response = await Job.paginate({},{page: jobPaginationRequest.page, limit: jobPaginationRequest.limit});
    return response['docs'];
}

exports.getJobById = async (jobId) => {
    return await Job.findOne({_id: jobId});
}

exports.insertJob = async (jobRequest) => {
    let jobs = new Job(jobRequest);
    return await jobs.save();
}