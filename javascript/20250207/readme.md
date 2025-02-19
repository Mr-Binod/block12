

## git branch, rebase

> git branch 브런치 가지(branch)
> 코드의 독립적인 작업의 내용을 만들때 사용한다
> 나무가지 처럼 갈라지는 작업의 내용
> 작업을 하다가 버그 이슈나 핫픽스 내용을 브런치로 관리하거나 팀원간의 족립된 코드의 내용을 브런치로 관리

## 브런치 
> 안정적인 코드를 유지하기 위해서 사용한다
> 새로운 기능 츄가에 대한 개발을 하기위해서 사용
> 버그 수정을 위해서 사용
> 브런치에서 작업한 내용을 메인 브런치에 올리기전에 팀장의 브런치에 병합을 한뒤 메인 브런치에 병합
> 버전 관리는 메인 브런치에서 하고 1ver 2 ver
> 1 팀원(soon) 2 팀원 (juu) 3 팀원 (lee) 4팀원 (kim)

> 2 팀원 (juu)+ (병합) 1 팀원(soon)
> 2 팀원 (juu)+ (병합) 3 팀원(lee)
> 2 팀원 (juu)+ (병합) 4 팀원(kim)

> 마지막으로 master 브런티에 팀장의 브런치를 merge (병합)

### git 저장소 초기화

```sh
git init  # .git 저장소 로컬 git 저장소 
초기화
echo "123" > readme.md
git add . # 모든 변경 내용 스테이징 추가
git restore filename # will reset the file
git restore --staged . or filename # 모든 스테이징 이나 파일 내용을 내린다

git commit -m "[feat] file 추가"
```
# 브런치 생성

```sh
head 는 최신 작업 위치해 있다
head 는 위치를 이동할수 있다 checkout switch 명령어로 이동
master  브런치의 위치에

# git 브런치 없느 커밋 추의 
# 이력이 있는 상태에서 
# 1 번 이력 2 번 이력 
# 2이력이 최신 내용이라서 head 가 2 번 이력 즉 master 브런치에 위치해있고
# 1 번 이력 커밋 해시로 head 를 이동시킨후 변경을 추가 하고 커밋을 하게되면
# 브런치에서 떨어진 커밋이 생성된다 커밋응ㄹ 만든 이후에 head 를 이동시키면 브런치가 없는 커밋은 사라진다.

# 브런치 생성
git branch 생성할 브런치 이름

# 브런치 목록 확인
git branch

# 로컬 저장소 브런치와 원격 저장소 브런치도 확인
git branch -a # 원격 저장소 브런치 확인

# 기본 설정 브런치는 버전관리 프로젝트의 완벽한 내용을 병합해서 관리한다.

# 브런치를 생성하면서 이동

git branch -b 생성할 브런치 이름하면 head 같이 이동합니다

git checkout 브런치 이름 
git checkout 커밋 해시 

### checkout switch  restore
checkout`(have characterstics of switch and restore)` 명령어 다른 기능들 중에 파일의 내용을 되돌린다.  다른 기능 2.23 버전전에 사용했던 명령어
switch 명령어는 단순하게 이동만 목적 2.23 ver
restore 파일의 내용을 되돌리는 목적

git switch 이동할 브런치 이름

# 브런치 삭제
# 작업이 끝나고 브런치를 제거해야한다

git branch -d 삭제할 브런치 이름 # 브런치에 병합을 한 브런치한 삭제할수 있다
git branch -D 삭제할 브런치 이름 # 브런치에 병합을 안한 상태에서 삭제 할 경우


# 브런체 병합
# 병합시킬 브런치의 위치로 head 를 이동시킨 후에 merge로 병합을 시킬 브런치의 이름을 작성해서 내용을 가져온다

# 내가 dev 브런치에 hotfix 브런치의 내용을 병합 시키겠다
git switch dev # dev 브런치로 이동 외냐? dev 브런치에 내용을 병합할거니까
git merge hotfix # head 가 있는 브런치 dev 의 브런치에 hotfix 브런치의 내용을 병합한다. 병합한 커밋 내용ㅇ르 작성

git merge 이름

### 충돌 내용 발생
## 첫번째 버턴은 현재 브런치의 내용을 유지( 즉 위의 내용)
## 두번째 버튼은 가져온 브런치의 내용을 유지 (즉 밑의 내용)
## 세변쨰 버튼은 둘다 볌합한 내용 유지

<<<<<<< HEAD
asdfkjhdfu
sdfdfd213213
=======
sdfdfdsa122222222
>>>>>>> hotfix


git merge 브런치 이름
# 브런치의 이름 수정

git branch -m 이전 브런치의 이름 새로운 브런치의 이름
git branch -m <이전 브런치 이름> <새로운 브런치 이름>

git branch -m dev dev2
```


### 코드의 병합 방법이 3 가지
- merge : 병ㅂ\합 내용을 이력에 남긴다. 브런치의 병합내용
- pull : 원격저장소의 내용을 로컬 저장소에 저장할때
- rebase : 커밋을 병합하고 하나의 커밋을 브런치의 위로 위치시킨다

# rebase 
> 좀 주의해서 사용을 하는것을 추천 
> rebase 는 브런치의 커밋 이력을 수정하거나 삭제 등의 정리를 하는 목적 기존의 커밋내용을 새로운 브런치의 위로 위치시키는 것

```sh
git rebase -i q브런치 흑은 커밋 해시
$ 인터렉티브 모드에 접근 커밋을 수정, 삭제,

git rebase 브런치 이름

# 실습 
git rebase hotfix

# 충돌 발생


vim 모드에 접속되면  명령어
pick 0dcf8f7 dev 작업 추가

이런 내용을 vim 모드에서 확인할수 있고

명령어 
1. pick  : 커밋을 그대로 유지
2. reword   : 커밋 메시지를 수정
3. edit  : 커밋의 내용을 수정
4. squash   : 이전 커밋 내용과 합치기
5. fixup   : 이전 커밋 내용ㅇ과 합치는데 메시지를 유지하지는다ㅑ
6. drop    : 삭제 하기 위해서

## git push-u origin 브런치

> -u  --set-upstream(option) 옵션은 로컬 브런치와 원격브런치를 동기화해서 이후에 git push 이랑 git push 이란 git pull은
할때 자동으로 원격 브런치를 추적한다

## 원격 저장소 모든 내용 추가 (강제로)
git push --force --all ##

## 조금 안정하게 하는법
git push --force-with-lease ## 강제로 추쉬는 맞는데 안전하게 원격저장소의 형태를 확닝하고 충돌 방지로 안전하게 업록

## 원격 저장소 내용이 충돌나서 아무리해고 복구할수가 없다 예기치 문제가 발생
## 내 로컬에 있는

git push --force

# 로컬 저장소에서는 지웠는데 원격저장소에 내용이 남아있어서 깃 그래츠 이력에 origin \저장소의 이력이 보이는것
# 원걱 저장소에 삭제 내용을 push 해줘야한다
git push --force --all

```

### git stash 
```sh
브런치의 내용을 수정하다가 hotfix 브런치를 생성하고 즉 다른 브런치를 생성하고 잠시 다른브런치로 작업해갸할 경우

브런치에서 작업하던 내용을 잠시 저장했다가 다른 브런치에서 작업이 끝나면 해당 브런치로 돌아와서 이어서 작업 진행 가능

git stash #메모리상에 작업내용 저장 index로 저장
git stash pop # 마지막 작업 내용 다시 메모리에서 가져오기
```

## pr (pull request)


>다른 저장소의 내용을 fork 를 해서 본인의 저장소로 가져온뒤 
>해당 저장소에 push를 하게 되면 full request 요청 내사 수정한 내용을 반영해달라
> fork 해온 저장소르 원본 저장소와 동시화 요청

## 실습 
 
준현 학생 팀자 작업자 추가 하고
페이지를 하나씩 맡아서 
pr 날려서  pull request 처리 페이지 완성까지
