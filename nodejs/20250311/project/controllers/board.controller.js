


const {createboarddata, getboarddata,  update, Deleteboard} = require('../models/board');

exports.create = async (title, content) => {
    return await createboarddata(title, content);
}

exports.getboard = async () => {
    return await getboarddata();
}

exports.updateboard = async (title, index) => {
    return await update(title, index)
}

exports.deleteboard = async (index) => {
    
    return await Deleteboard(index);
}