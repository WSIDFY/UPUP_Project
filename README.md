# UPUP_Project
팀 어푸어푸의 러닝메이트 학습 웹앱 만들기 프로젝트입니다.



### 프론트 파일 구성

├── app-ui/ # 프론트엔드 Next.js
│ ├── .next/ # Next.js 빌드 출력 폴더 (자동 생성)
│ ├── .vscode/ # VSCode 설정 폴더
│
│ ├── components/ # 재사용 가능한 컴포넌트 저장 폴더
│ │ ├── FileUploader.jsx # 폴더 생성 및 파일 업로드 팝업 컴포넌트
│ │ ├── Layout.jsx # 공통 레이아웃 컴포넌트
│ │ └── QuizUI.jsx # 퀴즈 렌더링 및 채점 컴포넌트
│
│ ├── pages/ # 라우팅 페이지 폴더 (Next.js 기본 구조)
│ │ ├── _app.js # 전체 페이지에 공통 적용되는 설정
│ │ ├── _document.js # HTML 문서 설정 (예: 폰트 링크)
│ │ ├── FileList.jsx # 업로드된 파일 목록 및 퀴즈 이동 버튼
│ │ ├── index.jsx # 기본 진입점 (main.jsx 불러옴)
│ │ ├── main.jsx # 파일 업로드 및 폴더 생성 메인 화면
│ │ └── quiz.jsx # 퀴즈 풀이 화면
│
│ ├── public/ # 정적 리소스 저장 폴더
│ │ └── (예: 이미지, 아이콘 등)
│
│ ├── styles/ # CSS 모듈 폴더
│ │ ├── Filelist.module.css # FileList 페이지 전용 스타일
│ │ ├── FileUploader.module.css # FileUploader 팝업 스타일
│ │ ├── globals.css # 전역 공통 스타일
│ │ ├── main.module.css # 메인 페이지 스타일
│ │ └── quiz.module.css # 퀴즈 페이지 스타일
│
│ ├── utils/ # 유틸리티 함수 폴더
│ │ └── api.js # 백엔드 API 호출 함수 (파일 업로드 등)
│
│ ├── .env.local # 환경변수 파일 (백엔드 주소 등 설정)
│ ├── .gitignore # Git에서 제외할 파일/폴더 목록
│ ├── eslint.config.mjs # ESLint 설정 파일
│ ├── get-pip.py # (불필요 시 삭제 가능, Python 패키지 관련?)
│ ├── jsconfig.json # 경로 alias 설정 파일
│ ├── next.config.mjs # Next.js 설정 파일
│ ├── package-lock.json # npm 패키지 잠금 파일
│ ├── package.json # 프로젝트 기본 설정 및 의존성 목록
│ ├── postcss.config.mjs # Tailwind/PostCSS 설정
│ └── README.md # 프로젝트 설명 문서
