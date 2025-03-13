


const multer = require('multer');
const path = require('path');

exports.upload = multer({
    storage : multer.diskStorage({
        destination : (req, res, cb) => {
            cb(null, 'public/images/')
        },
        filename : (req, file, cb) => {
            // image.png
            const ext = path.extname(file.originalname);
            // .png
            let filename = Buffer.from(path.basename(file.originalname, ext), 'latin1').toString('utf8');
            filename = filename + '_' + Date.now() + ext;
            // image_1234718924.png
            cb(null, filename)
        }
    }),
    limit : {filesize : 5 * 1024 * 1024}  // 5mb
})