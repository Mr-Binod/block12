

let board = []; //임시 데이터베이스

// 데이터의 조작

const create = (title, content, imgPath) => {
    board.push({title, content, imgPath});
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
    board.splice(index,  1);
    return("삭제 완료");
}

module.exports = {create, select, selectAll, Delete, Update}