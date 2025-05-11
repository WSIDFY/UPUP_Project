# UPUP_Project
팀 어푸어푸의 러닝메이트 학습 웹앱 만들기 프로젝트입니다.



### 프론트 파일 구성
# 📁 프로젝트 폴더 구조: app-ui

- app-ui/                      # 프론트엔드 Next.js
  - .next/                     # Next.js 빌드 출력 폴더 (자동 생성)
  - .vscode/                   # VSCode 에디터 설정
  - components/                # 재사용 가능한 컴포넌트 폴더
    - FileUploader.jsx         # 폴더 생성 및 파일 업로드 컴포넌트
    - Layout.jsx               # 전체 페이지 공통 레이아웃
    - QuizUI.jsx               # 퀴즈 풀이 UI 컴포넌트
  - pages/                     # Next.js 라우팅 페이지
    - _app.js                  # 공통 레이아웃 설정
    - _document.js             # HTML 구조 및 폰트 설정
    - FileList.jsx             # 업로드 파일 목록 및 퀴즈 이동
    - index.jsx                # 루트 진입점, main.jsx 불러오기
    - main.jsx                 # 메인 화면 (폴더 업로드 등)
    - quiz.jsx                 # 퀴즈 화면 진입점
  - public/                    # 정적 파일 (예: 이미지, 아이콘 등)
  - styles/                    # 스타일 (CSS 모듈)
    - Filelist.module.css
    - FileUploader.module.css
    - globals.css
    - main.module.css
    - quiz.module.css
  - utils/                     # API/유틸 함수 폴더
    - api.js                   # 파일 업로드 등 API 함수 정의
  - .env.local                 # 환경변수 (.env)
  - .gitignore                 # Git 제외 설정
  - eslint.config.mjs          # ESLint 설정
  - get-pip.py                 # Python 관련 설치 스크립트 (불필요시 제거 가능)
  - jsconfig.json              # 경로 별칭 설정
  - next.config.mjs            # Next.js 설정
  - package-lock.json          # 의존성 잠금
  - package.json               # 프로젝트 설정 및 스크립트 정의
  - postcss.config.mjs         # PostCSS (Tailwind 포함) 설정
  - README.md                  # 프로젝트 소개 문서

