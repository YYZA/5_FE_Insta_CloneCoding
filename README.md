# 🌠 인스타그램 클론 코딩 - Backend
인스타그램 클론 코딩 프로젝트  
<br/>
[**[Fornt-End]**](https://github.com/undriedspring/5_FE_Insta_CloneCoding) 프론트엔트 Github 페이지
<br/>
[**[Demo Video]**] 인스타그램 클론 사이트 시연 영상

<br/>

👨‍💻 프로젝트 기간 & 팀원
-------------  
- 2021년 12월 13일 ~ 2021년 12월 18일
- Front-End [이한샘](https://github.com/undriedspring), [김용성](https://github.com/YYZA)
- Back-End [김형진](https://github.com/KIMHYEONGJIN5925), [이건희](https://github.com/IsthisLee)  

<br/>

🎮 클론 인스타그램 기능  
-------------  

- 로그인 및 회원가입 기능
- 메인화면에서 다른 사람들이 올린 글 확인 가능
- 글쓰기 기능을 통해 내가 찍은 사진을 공유
- 댓글 기능을 통해 다양한 사람들과 소통
- 프로필 페이지에서 내 정보를 확인
- 좋아요 기능으로 다른 사람 글 추천

<br/>

🪄 사용한 패키지 및 CSS  
-----------------
- **express**  　　　=> 웹 프레임워크
- **mongoose**　　=> 비관계형 데이터베이스인 Mongo DB를 편리하게 다룰 수 있는 ODM
- **cors**　　=> cors 해결을 위한 응답 헤더를 쉽게 추가해주는 module
- **nodemon**　　=> 파일 수정시 자동으로 서버를 재시작
- **bcrypt**　　=> 데이터베이스에 저장할 비밀번호를 암호화
- **multer**　　=> 프론트 엔드에서 보내주는 이미지 데이터(멀티파트 형식 데이터)를 받음
- **aws-sdk**　　=> node.js에서 AWS를 사용
- **multer-s3**　　=> AWS S3에 접근하여 이미지 데이터를 업로드
- **jsonwebtoken**　　=> jwt 토큰을 이용한 로그인 기능을 구현
- **cookie-parser**　　=> cookie를 가공해주어 편리하게 cookie의 data 사용 가능
- **dotenv**　　=> 환경변수 파일을 외부에 만들고, 관리가 가능
- **mongoose-sequence**　　=> db 에 data 추가 시 자동으로 idx값 생성


<br/>

📨 폴더 구조  
-----------------  

<br/>

```bash
Insta-clone
├─ node_modules
│  
│  
├─ api   
│   ├─ middleWare
│   │    └─ authUseCookie.js
│   │    └─ multer.js
│   │ 
│   └─routes
│        └─ comments.js
│        └─ index.js
│        └─ posts.js
│        └─ users.js
│  
│
├─ config
│    └─ index.js
│
│  
├─ models
│  ├─ schema
│  └─ index.js
│  └─ posts.js
│  └─ comments.js
│  └─ users.js
│ 
│ 
├─ uploads
│ 
│  
└─ app.js
└─ package-lock.json
└─ package.json
└─ .gitignore
└─ .env
```

<br/>

💾 DB ERD
-----------------

<br/>
<br/>

<p align="center"><img src=></p>

<br/>

📱 API
-----------------

<br/>
<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/57748284/146632098-aae5ccd4-b5bd-48bd-ab4c-6d9cf674c492.png"></p>
<p align="center"><img src="https://user-images.githubusercontent.com/57748284/146632124-1acb5461-4eb7-4078-84fe-ff89c9b585c1.png"></p>
<p align="center"><img src="https://user-images.githubusercontent.com/57748284/146632121-4b0d7c8a-8c41-4f14-baba-8ff69310e227.png"></p>
<p align="center"><img src="https://user-images.githubusercontent.com/57748284/146632157-923ca9bb-90b2-44a6-a127-4ac0761cf63b.png"></p>


<br/>

🛠 Trouble Shooting
-----------------  

<br/>
<br/>

<details markdown ="1">
<summary>EC2 reboot시 mongodb connecting Error 문제</summary>
EC2의 Timezone을 KST로 변경하고 서버를 reboot했더니 mongodb와의 connect 에러가 발생하였다.<br/>
https://ssue95.tistory.com/19<br/>
위 블로그와 같은 에러를 겪어서 따라해 보았으나, vim 파일 생성에서 자꾸 막혔다.<br/>
결국, mongodb를 삭제하고, 재설치하여 해결하였다.
</details>
<details markdown ="2">
<summary>사진 파일을 S3 버킷에 저장할 것인가, EC2 서버에 저장할 것인가</summary>
  현재는 EC2 서버에 저장하고 있다. 그러나, S3(Simple Storage Service) 버킷이 이름에 걸맞게 파일 저장에 최적화가 되어있다고 한다. 또한, 용량이 무한대라서 EC2나 EBS로 구축했을 때 처럼 Auto Scaling(자동 확장 - 용량 추가)이나 Load Balancing(부하 분산 - 성능 향상)에 신경쓰지 않아도 된다.(프리티어 버전은 5GB, GET요청 2만개, PUT 2천개 제한이다.) 이러한 이유로 앞으로는 사진처럼 정적인 파일을 저장할 때는 S3에 저장하는 것이 올바른 방법으로 보인다.
</details>
<details markdown ="3">
<summary>Like DB 구성 방식의 문제점</summary>
  현재는 Comment DB에 위치한 Like 컬럼에 좋아요를 누른 user의 정보를 넣었다.
만약 좋아한 user 수가 많아지면 해당 document 내에 정보가 무수히 많이 쌓일 것이고, user별로 어떤 게시글에 좋아요를 눌렀는지 표시해줄 때, 상당히 많은 data 속에서 user를 찾아내야 하므로 비효율적이다.

이를 해결하기 위한 방법.
1. User DB에 Like 컬럼을 생성하여 해당 user가 좋아요 누른 게시글 또는 댓글만 추가한다.
2. Like DB를 새로 생성하여 user가 어느 게시물과 댓글에 좋아요를 눌렀는지에 대한 정보를 추가한다.

사실상 위의 두 가지 방법 모두 비슷한 방식이다. 다음에 좋아요 기능을 구현할 때는 이와 같은 방법으로 구현하도록 해봐야겠다.
</details>

<br/>

🎁 이번 프로젝트를 하며 새롭게 배운 것
-----------------

<br/>
<br/>
1. multer를 통해 프론트 엔드에서 이미지를 받아서 서버에 저장하기<br/>
2. bcrypt를 통해 비밀번호를 암호화하여 저장하고, 로그인시 비교하기<br/>
3. jwt 토큰을 쿠키에 담아서 처리하기<br/>


<br/>

🛠 이번 프로젝트에서 보완하거나 아쉬웠던 점 
-----------------  

<br/>
<br/>

<br/>
