# 자주 사용하는 git 명령어 정리

- 변경된 파일 commit목록에 추가  
git add .

- git add 취소 * file 미입력 시 전체 add내용 취소  
git reset HEAD [file]

- git commit 취소  
git reset HEAD^

- commit message 설정  
git commit -m "change theme"

- push  
git push --set-upstream origin [BRANCH]  
git push  
    - nothing : 어느 것도 푸쉬하지 않는다
    - matching : (기본값) 로컬과 리모트의 이름이 동일한 모든 브랜치를 푸쉬한다
    - upstream : 현재의 브랜치를 업스트림 브랜치에 푸쉬한다
    - current : 현재의 브랜치를 같은 이름의 브랜치에 푸쉬한다

- git branch 생성  
git branch [branchName]

- 현재 선택된 브런치 변경  
$ git branch -m [OLD&#95;BRANCH] [NEW&#95;BRANCH]

