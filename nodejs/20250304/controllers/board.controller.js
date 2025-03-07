


const fs = require("fs");
const {create, select, selectAll, Delete, Update} = require("../models/board");

const createBoard = (req) => {
    // console.log(req.body)
    // console.log(req.file)
    // res.send("종료")
    const {title, content} = req.body;
    const {filename} = req.file;
    const imgname = "http://localhost:3000/image/" + filename;
    create(title, content, imgname, filename);
    //console.log(selectAll());
}
const selectBoardAll = () => {
    return selectAll();
}

const selectBoardIndex = (index) => {
    return select(index);
}

const Delete1 = (index)=>{
    // const Board = board[index]; //객체
    // const fileName = Board.filename;
    // console.log(filename)
    // console.log(board);
    // fs.rm('./upload', fileName)
    Delete(index);
}

const updatecontent = (req, res) => {
    
    const index = req.query.index;
    //console.log(index, "updatecontent")
    const {title, content} = req.body;
    const {filename} = req.file;
    const imgname = 'http://localhost:3000/image/' + filename;
    //console.log(index, title, content, imgname)
    Update(index, title, content, imgname,filename);
}

module.exports = {createBoard, selectBoardAll, selectBoardIndex, Delete1, updatecontent};