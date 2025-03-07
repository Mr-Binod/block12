

const router = require("express").Router();
const {upload} = require("../lib/image.upload")
const {createBoard, selectBoardAll, selectBoardIndex, Delete1, updatecontent } = require("../controllers/board.controller")

router.get("/", (req, res) => {
    res.render("board")
})
router.get("/main", (req, res) => {
    const board = selectBoardAll();
    res.render("boardmain", {board})
})
router.get("/detail", (req, res) => {
    const board = selectBoardIndex(req.query.index);
    const index = req.query.index;
    //console.log(index, board, "indexb;oard")
    // req.query.index
    // 보여줄 글의 내용
    console.log(board)
    res.render("boarddetail", {board, index})
})
// 기능 로직
router.post("/delete", (req, res) => {
    const index = req.query.index;
    Delete1(index);
    res.redirect("/main");
})
router.get("/update", (req, res) => {
    const index = req.query.index;
    //console.log(index, "index")
    res.render("update", {index})
})
router.post("/update", upload.single("myimage"), (req, res) => {
    updatecontent(req, res);
    res.redirect("/main")
})

router.post("/upload", upload.single("myimage"),  (req, res) => {
// router.post("/upload",upload.single("myimage"), async (req, res) => {
    console.log(req.file);
    // console.dir(upload.single("myimage"), "upload image");
    // 데이터를 저장
    // await createBoard(req, res)
    createBoard(req)
    // res.send("업로드 완료");
    res.redirect("/main")
})

module.exports = router;
