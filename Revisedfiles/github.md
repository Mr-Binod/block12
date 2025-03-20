```sh
cd ..
cd downloads
ctrl + ~
mkdir project
echo mytxt > mytxt.txt
vim command
q   : 화면에서 나가기
wq   : 저장후에 나가기
wq!   : 강제 저장 
git help -a
git init
git commit -m "새로 추가"
ls : 파일과 폴더 확인
ls -a : 숨긴 파일도 모두 확인
ls 경로(index.html) :


git stauts
ls ~/.gitconfig
git log
git config --global --list --show-origin
ls .git/config
cat .git/config
code .git/config
git config user.name "blockSoon";
git config user.email "12378945@gmail.com"
echo nul .gitconfig
git config --global user.name "blockSoon"
git config --global user.email "blackorion3@gmail.com"
git init 할때마다 작성할 필요가 없다 값이 없으면 글로벌에 작성된 내용을 사용
git config init.defaultBranch main
git push -u origin master

git init
git add .
git commit -m "새로 추가"

git remote add origin "주소"
git push origin master 
git reset --hard commit "a"
rm -rf A
git push -f --all

head -> master
git branch master
git checkout master
git branch -m master
git branch -d main
git config user.email "blackorion3@gmail.com"



git rebase -i 29813lsadf09234234
then drop for delete commit
:wq! for exit

git push origin master 
git branch origin -d main
git push -f origin main
git merge code_list

repository : contains project file
commit : commit is a snapshot of a project at a specific time and description with a changes made

CLI : command line interface
GUI : graphic user interface


git commit 하기 전에 만 restore 가능함

git restore --staged . or filename # 스테이징 환료 하는 명령
git restore . # 이전에 돌아갈 명령
git checkout -b 
git branch -d main

git add .; git commit -m "hotfix 첫쨰 작업"
git branch -m dev dev2 //change name of branch
git merge 
git rebase file commit ..12312312
git rebase -i foldername

1. pick  : 커밋을 그대로 유지
2. reword   : 커밋 메시지를 수정
3. edit  : 커밋의 내용을 수정
4. squash   : 이전 커밋 내용과 합치기
5. fixup   : 이전 커밋 내용ㅇ과 합치는데 메시지를 유지하지는다ㅑ
6. drop    : 삭제 하기 위해서


git stash  # 잠시 staging(editing) 하고 있을때 다른 branch 에 가서 작업해야 될때
git switch # 원하는 branch 이동
git stash pop # 메모리에 저장된 staging(edit) 하고 있는 작업 그대로 돌려준다

git merge filename
 
git rebase filename  # rebase 으로 merge 하고 hotfix 삭제할 하는 경우
git add .
git rebase --continue



```