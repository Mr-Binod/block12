
const fs = require("fs");
let board = []; //임시 데이터베이스

// 데이터의 조작

const create = (title, content, imgPath, filename) => {
    const index = board.length;
    board.push({index, title, content, imgPath,filename});
    return "게시글 추가 완료"
}

const Update = (index, title, content, imgPath) => {
    board[index].title = title;
    board[index].content = content;
    board[index].imgPath = imgPath;
    
    return ("수정 완료");
}

// 데이터 조회
const select = (index) => {
    console.log(board[index], "index")
    return board[index];
}

// 천체 데이터 조회
const selectAll = () => {
    return board;
}

const Delete = (index) => {
    console.log(index);
    const Board = board[index];
    const fileName = Board.filename;

    fs.rm('./upload/'+ fileName, (err)=>{
        if(err){
            console.log("error")
        }else{
            console.log("good")
        }
    })
    board.splice(index,  1);
    console.log(board)
    return(board);
}

module.exports = {create, select, selectAll, Delete, Update}