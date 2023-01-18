# NX

- Nx는 최고 수준의 단일 리포지토리 지원 및 강력한 통합 기능을 갖춘 스마트하고 빠르며 확장 가능한 빌드 시스템입니다.

## package-based repo

### build

```
npx nx build <project-name>
```

- project-name: packages 디렉토리에에 존재하는 project 이름

## 패키지 분리

- packages 디렉토리에 존재하면 npm i 실행 시 node_modules에 설치됨
- 패키지의 진입점은 package.json의 main 속성에 명시된 파일

## 이슈

### husky

```
code 126
npm ERR! path /Users/gotaehwan/projects/react-monorepo/packages/react-playground
npm ERR! command failed
npm ERR! command sh -c -- husky install
npm ERR! sh: /Users/gotaehwan/projects/react-monorepo/node_modules/.bin/husky: Permission denied
```

- package.json에서 prepare 부분 삭제
