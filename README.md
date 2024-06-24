# Youtube API를 이용한 플레이리스트 만들기 

<img width="1440" alt="image" src="https://github.com/nicejmp1/youtubeplay/assets/163364733/5a99771b-972f-44c2-bac9-a3616cc3b042">


# 프로젝트 소개
> Youtube API를 활용하여 플레이리스트 모음 사이트를 제작하였습니다.

# 사용한 기술 / 라이브러리 

- React 설치: `npx create-react-app 폴더이름` 명령어로 새로운 리액트 앱을 생성합니다. 현재 디렉토리에 설치하려면 폴더 이름 대신 `.`를 사용하세요.

- react-router-dom 설치: `npm install react-router-dom` 명령어로 SPA(Single Page Application) 내 라우팅을 관리할 수 있는 라이브러리를 설치합니다.

- Axios 설치: `npm install axios` 명령어로 비동기 통신을 위한 API 라이브러리를 설치합니다.

- React Icons 설치: `npm install react-icons` 명령어로 다양한 아이콘을 프로젝트에 추가할 수 있습니다.

- React Player 설치: `npm install react-player` 명령어로 유튜브 및 다른 비디오 스트리밍 서비스를 재생할 수 있는 컴포넌트를 설치합니다.

- Sass 설치: `npm install sass` 명령어로 CSS 전처리기를 설치합니다.

- React Helmet Async 설치**: `npm install react-helmet-async` 명령어로 SEO를 개선할 수 있는 도구를 설치합니다.

- YoutubeAPI 사용 

# 주요 기능 
- **검색 기능** : 검색기능을 이용하여 원하는 유튜브 영상을 검색해서 볼 수 있게 구현하였습니다.
- **비디오 재생** : 검색된 비디오를 재생 시키기 위해 구현 하였습니다.
- **채널소개** : 유튜브 api를 이용하여 해당 유튜브의 채널을 소개하는것을 구현하였습니다.
- **유튜브자세한정보** : 해당 유튜브의 정보, 댓글등을 보고 싶어 구현하게 되었습니다.

# 메인 페이지 디자인
![image](https://github.com/nicejmp1/youtubeplay/assets/163364733/71c22a4a-ec1a-43fd-80c5-978c193b8b40)
> 메인 페이지에서는 사용자에게 추천되는 영상과 함께, 관리자가 선택한 키워드에 따른 영상도 표시됩니다.

# 검색 기능 
![image](https://github.com/nicejmp1/youtubeplay/assets/163364733/6689a3b2-a748-485a-915b-e030952ed49d)
> 사용자는 검색 기능을 통해 원하는 유튜브 영상을 쉽게 찾아 시청할 수 있습니다

# 비디오 재생
![image](https://github.com/nicejmp1/youtubeplay/assets/163364733/bddd5f51-f001-444e-a227-64215171488f)
> 비디오를 재생하면 댓글과 함께 유튜브 상세 페이지에 대한 정보를 확인할 수 있습니다.

# 채널 소개
![image](https://github.com/nicejmp1/youtubeplay/assets/163364733/76d905f8-cfc3-4006-9aaf-eafda17f1708)
> 비디오 채널을 클릭 시 구독자 수, 채널 조회 수, 그리고 추천 영상까지 한눈에 확인할 수 있습니다.

# 유튜브 상세페이지
![image](https://github.com/nicejmp1/youtubeplay/assets/163364733/b825c273-7bc1-4619-a664-a37c95b3657a)
> 유튜브 상세페이지를 api로 불러와 유튜브 처럼 구현 하였습니다.
