# NX

- Nx는 최고 수준의 단일 리포지토리 지원 및 강력한 통합 기능을 갖춘 스마트하고 빠르며 확장 가능한 빌드 시스템입니다.

## Migrating a Create-React-App project into an Nx Workspace

- 참고 : https://nx.dev/recipes/adopting-nx/migration-cra

### Automated migration

```bash
npx nx init
```

- 모노레포로 바꾸는건 아니고 기존 cra 프로젝트를 nx 프로젝트로 바꾸는 것이다

#### Please answer the following questions about the scripts found in your package.json in order to generate task runner configuration

- Which of the following scripts are cacheable? (Produce the same output given the same input, e.g. build, test and lint usually are, serve and start are not) …

  - 전부 다 체크함

- Does the "start" script create any outputs? If not, leave blank, otherwise provide a path (e.g. dist, lib, build, coverage)

  - 빈칸으로 놔두고 엔터

- Does the "build" script create any outputs? If not, leave blank, otherwise provide a path
  - build
