
const multer = require("multer");
const path = require("path");

// {upload : multer(value)}
// const storage = multer.diskstorage();
// exports.upload = multer({storage});
exports.upload = multer({storage : multer.diskStorage(
    {
        destination : (req, file, cb) => {
            cb(null, "upload"); // null === 오류 이름 (없어)
        },
        filename : (req, file, cb) => {
            // 병아리.png
            // 병아리_02316516511321.png
            // path 모듈 사용해서 확장자명 확장자 이외의 이름 잘라내기
            const ext = path.extname(file.originalname);
            // ext 확장자  .png
            const baseName = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            // baseName 확잦자가 없는 파일의 이름 파일의 이름을 변경해서 사용
            // 병아리_02316516511321
            cb(null, baseName);
        }
    }), 
    // 파일의 사이즈를 얼마나 서렂할지 크기제한
    // 5MB
    limits : { fileSize : 5 * 1024 * 1024 }
})

/*
    upload : {
    storage : {diskStorage : {destination : {}, filename : f ()}},
    limit : {}
    }
*/