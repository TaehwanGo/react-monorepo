# package-based repo

- https://nx.dev/getting-started/package-based-repo-tutorial
- https://www.youtube.com/watch?v=hzTMKuE3CDw

## 설치

- packages 디렉토리에 존재하면 npm i 실행 시 node_modules에 설치됨
- 패키지의 진입점은 package.json의 main 속성에 명시된 파일

```
# npx create-nx-workspace@latest {workspace-name} --preset=npm
npx create-nx-workspace@latest react-monorepo --preset=npm
```

- npm으로 기본 프로젝트가 구성되어 있기에 npm을 사용한다

## package.json

### workspaces

- 패키지들이 위치한 디렉토리를 지정
- npm i 로 설치 시 해당 디렉토리에 있는 패키지들 node_modules에 설치

### packages

- 각 모노 레포 패키지들이 위치
- 각 패키지안에 package.json이 존재하고 dependencies에는 해당 패키지를 사용하는 패키지들을 명시
  - dependencies는 해당 package.json에 명시 후 사용해도 되지만
  - root에 있는 package.json에 명시하면 해당 패키지를 사용하는 모든 패키지에서 사용 가능

### package build

```
# npx nx build {package-name}
npx nx build is-even
```

### packages dependencies

```json
{
  // ...
  "dependencies": {
    "is-even": "*"
  }
}
```

- dependencies에 버전이 "\*"로 되어 있으면 해당 패키지의 최신 버전을 사용
- vscode의 `Nx Console` 확장 프로그램을 사용하면 각 프로젝트간의 의존성을 그래프를 확인 할 수 있음
  - `PROJECTS` -> 해당 패키지 -> `Focus in Nx Graph`(과녁 모양 아이콘) 클릭

## nx.json

### targetDefaults

#### build

```json
{
  // ...
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  }
}
```

```
npx nx build is-odd
```

- is-odd 패키지를 빌드 시 is-even를 먼저 계산하고 빌드
  - `1/1 dependent project tasks succeeded [0 read from cache]`
  - 다음에 빌드 시 nx.json의 cacheableOperations에 build가 명시되어 있기에 빌드 결과를 캐시하여 빌드 시간을 줄임

#### 멀티플 task를 run하고 싶은 경우

```
# npx nx run-many --target=build --projects=is-even,is-odd
npx nx run-many --target=build
```

- 모든 프로젝트를 빌드
