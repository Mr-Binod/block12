


// 서버에 정적 파일 폴더에 있는 모든 파일을 순화하면서 파일 검사

const fs = require("fs");
const path = require("path");

// public 루트 경로
const rootName = "public";

// __dirname : 파일이 있는 폴더까지
const rootDir = path.join(__dirname, "..", rootName)

// 경로들을 담을것
const result = {};

// 재귀 함수
const find = (currentPath = rootDir) => {
    // 결로의 파일과 디렉터리 목록을 읽기
    // 폴더 인지 확인
    // readdirSync : 파일과 디겔터리 목록을 자져올수 있다
    // 반환 타입 배역 
    const directory = fs.readdirSync(currentPath);
    // console.log(directory);
    // console.log(directory);
    // public/css
    // public/js
    // public/css/mypage
    // public/css/main
    // public/css/shop
    
    for(const index in directory) {
        const findPath = path.join(currentPath,directory[index]);
        // console.log(findPath);
        // 파일인지 폴더인지
        // statSync : 파일의 내용을 객체로 받을수 있는 메서드
        // isFile : 파일이면 true, 디렉터리 : false

        const isFile = fs.statSync(findPath).isFile();
        console.log(isFile, "isFile");

        if(!isFile) {

            // public/css
            // public/js
            // 모든 폴더나 모든 파일의 경로를 모두 호출 재귀함수를 사용해서
            find(findPath);
        }
        else {
            // 파일일 경우에는 
            // 여기에서 실행 할 코드 내용을 작성
            const key = currentPath === rootDir ? "/": currentPath.replaceAll(rootDir, "");
            // console.log(key)
            // 파일의 /로 시작하는 폴더 경로까지를 만드고
            const httpPath = path.join(key, directory[index]).replaceAll("\\", "/")
            // console.log(httpPath);
            // 모든 파일의 경로를 완성
            result[httpPath] = directory[index];
        }
    }
    return result;
}
// const log = find(rootDir);
// console.log(log);


module.exports = find(rootDir);