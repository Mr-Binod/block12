


const {create, select, selectAll, Delete, Update} = require("../models/board");

const createBoard = (req) => {
    // console.log(req.body)
    // console.log(req.file)
    // res.send("종료")
    const {title, content} = req.body;
    const {filename} = req.file;
    const imgname = "http://localhost:3000/image/" + filename;
    create(title, content, imgname);
    console.log(selectAll());
}
const selectBoardAll = () => {
    return selectAll();
}

const selectBoardIndex = (index) => {
    return select(index);
}

const Delete1 = (req, res) => {
    const index = req.query.index;
    return Delete(index);
}

const updatecontent = (req, res) => {
    
    const index = req.query.index;
    console.log(index, "updatecontent")
    const {title, content} = req.body;
    const {filename} = req.file;
    const imgname = 'http://localhost:3000/image/' + filename;
    console.log(index, title, content, imgname)
    Update(index, title, content, imgname);
}

module.exports = {createBoard, selectBoardAll, selectBoardIndex, Delete1, updatecontent};