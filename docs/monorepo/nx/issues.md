# 이슈

### husky

```
code 126
npm ERR! path /Users/gotaehwan/projects/react-monorepo/packages/react-playground
npm ERR! command failed
npm ERR! command sh -c -- husky install
npm ERR! sh: /Users/gotaehwan/projects/react-monorepo/node_modules/.bin/husky: Permission denied
```

- package.json에서 prepare 부분 삭제

### PostCSS

```
Error: PostCSS plugin postcss-discard-comments requires PostCSS 8.
```

- https://stackoverflow.com/questions/65879742/object-object-is-not-a-postcss-plugin-error-while-building-nrwl-library-projec
- npm install -D postcss

### dependency 확인이 안되는 문제

```
TS7016: Could not find a declaration file for module 'react-dom/client'. '/Users/gotaehwan/projects/react-monorepo/node_modules/react-dom/client.js' implicitly has an 'any' type.
         Try `npm i --save-dev @types/react-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-dom/client';`
```

- npm i --save-dev @types/react-dom
