# 저장소 복사하기

## 참고

- https://www.whatwant.com/entry/bare-%EC%99%80-mirror%EC%9D%98-%EC%B0%A8%EC%9D%B4
- https://crystal-k.tistory.com/103

## 목적

- 기존 단일 프로젝트를 모노레포 프로젝트로 변경하는 작업은 레포를 새로 만드는 것이 좋을 것 같다고 생각해서 복사하기로 함

## 명령어

```bash
# git clone {원본 레포} {복사할 위치}
git clone https://github.com/TaehwanGo/react-playground.git ./react-monorepo

# git remote set-url --push origin <새로 옮길 저장소>
git remote set-url --push origin https://github.com/TaehwanGo/react-monorepo.git

# push
git push --mirror
```
