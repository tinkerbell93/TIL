# Youtube API

- 참조

  https://developers.google.com/youtube



## 메인 동영상 리스트

### 맞춤 동영상

#### Atomic Design Pattern

<img src="/Users/kimgahyun/Library/Application Support/typora-user-images/스크린샷 2020-08-19 오전 11.49.38.png" alt="스크린샷 2020-08-19 오전 11.49.38" style="zoom:50%;" />

**[ Atoms ]**

- thumbnail img - image
- thumbnail video - video
- 나중에 볼 동영상 - button
- 목록에 추가 - button
- thumbnail time stautus - span
- channal img - image
- video title - h3 > a
- channel title - a
- view count - a
- publish time - a
- live view count - a
- streaming - a
- work menu - button
- 목록에 추가, 나중에 볼 동영상에 저장, 관심 없음, 채널 추천 안함, 신고 - button

**[ Molecules ]**

- ThumbnailArea

  thumbnail img, thumbnail video, 나중에 볼 동영상, 목록에 추가, thumbnail time status

- VideoInfo

  channel img, video title, channel title, view count + publish time| live view count + streaming

**[ Oraganisms ]**

- VideoArea

  thumbnailArea, videoInfo

**[ Templates ]**

- CustomVideo
- RecommendedFilm

<img src="/Users/kimgahyun/Desktop/YouTube.jpg" alt="YouTube" style="zoom:30%;" />



#### 요청

- HTTP 요청

  Videos: list

  ```code
  GET https://www.googleapis.com/youtube/v3/videos
  ```

- 매개변수

  [필수 매개변수]
  
  | part                 |      |      |
  | -------------------- | ---- | ---- |
  | id                   |      |      |
  | snippet              |      |      |
  | contentDetails       |      |      |
  | fileDetails          |      |      |
  | liveStreamingDetails |      |      |
  | player               |      |      |
  
  [필터]
  
  | chart       |      |      |
  | ----------- | ---- | ---- |
  | mostPopular |      |      |
  
  





