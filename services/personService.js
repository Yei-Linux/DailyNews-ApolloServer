const Person = require('../models/Person');

exports.insertPerson = async (personRequest) => {
    const person = new Person(personRequest);
    return await person.save();
}