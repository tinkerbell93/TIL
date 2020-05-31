# JavaScript lesson Clock

시계 만들기

## 기능

1. 년, 월, 일, 요일 출력
2. 시, 분, 초 출력

## 코드

**[ 도전1 ]**

```js
(function printNow() {
  const Today = new Date();
  document.querySelector('.today').innerHTML = Today;

  const year = Today.getFullYear();
  const month = Today.getMonth();
  const date = Today.getDate();
  const day = Today.getDay();
  const days = ['일', '월', '화', '수', '목', '금', '토'];


  function changeTypeDay(daynum) {
    return days[daynum];
  }

  document.querySelector('.date').innerHTML = `${year}년 ${month}월 ${date}일 ${changeTypeDay(day)}요일`;

  const hour = Today.getHours();
  const min = Today.getMinutes();
  const sec = Today.getSeconds();

  document.querySelector('.time').innerHTML = `${hour}시 ${min}분 ${sec}초`;

  setTimeout(printNow, 1000);
}());

```

**[ 코드리뷰 ]**

- setInterval 함수 이용

- 시간 24 => 12시간으로 출력

  13, 14, 15 => 1, 2, 3

- AM, PM 출력



**[ 도전 2 ]**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clock</title>
  
</head>
<body>
  <p class="today"></p>
  <p class="date"></p>
  <p class="time"></p>

  <form method="get" action="" class="displayhours">
      
      <label for="allhours"><input type="radio" id="allhours" name="displayhours" checked>24시간 출력</label>
      
      <label for="halfhours"><input type="radio" id="halfhours" name="displayhours">12시간 출력</label>
  </form>
  <script>
    (function printNow() {
      const Today = new Date();
      document.querySelector('.today').innerHTML = Today;
      const year = Today.getFullYear();
      const month = Today.getMonth();
      const date = Today.getDate();
      const day = Today.getDay();
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      function changeTypeDay(daynum) {
        return days[daynum];
      }

      // default 날짜 출력
      document.querySelector('.date').innerHTML = `${year}년 ${month}월 ${date}일 ${changeTypeDay(day)}요일`;
      let hour = Today.getHours();
      const min = Today.getMinutes();
      const sec = Today.getSeconds();
      const ampm = hour >= 12 ? 'PM' : '';

      // default 시간 출력
      const $hour = document.querySelector('.time');

      // console.log(document.getElementById('halfhours').checked);  // true
      if (document.getElementById('allhours').checked) {
        hour = Today.getHours();
        $hour.innerHTML = `${hour}시 ${min}분 ${sec}초`;
        // printNow 함수를 끝내는 동시에 setTimeout으로 타임 딜레이(0) 없이 다시 호출
        return setTimeout(printNow, 0);
      }
    
      // 12시간 출력
      hour = hour > 12 ? hour - 12 : hour;
      $hour.innerHTML = `${ampm} ${hour}시 ${min}분 ${sec}초`;
      return setTimeout(printNow, 0);
    }());
  </script>
</body>
</html>
```

**[ 코드리뷰 ]**

- 10미만인 분과 초를 2자리로 변경 요청
- 월이 전달 월이 나옴
- 텍스트노드만 추가시 textContent이용
- 기본 디폴트 시간만 출력 (input까지 ㄴㄴ)



**[ 도전 3 ]**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clock</title>
  <link href="https://fonts.googleapis.com/css2?family=B612+Mono&family=Cutive+Mono&family=Roboto+Mono&display=swap" rel="stylesheet">
  <style>
    p {
      text-align: center;
      font-family: 'Roboto Mono', 'B612 Mono', 'Cutive Mono', monospace;
      margin: 10px;
    }
    .comment { font-size: 25px; }
    .time { font-size: 50px; }
    .today { font-size: 30px; }
  </style>
</head>
<body>
  <p class="comment"></p>
  <p class="time"></p>
  <p class="today"></p>

  <script>
    let Today = new Date();
    // 년
    const year = Today.getFullYear();
    // 월
    const month = Today.getMonth() + 1;
    // 일
    const date = Today.getDate();
    // 요일
    const daysName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = daysName[Today.getDay()];

    // 날짜 출력
    document.querySelector('.today').textContent = `${year}.${month}.${date}.${day}`;

    function printTime() {
      Today = new Date();
      // 시
      let hour = Today.getHours();
      // 10미만 2자리수 출력
      hour = hour < 10 ? ('0' + hour) : hour;
      // 분
      let min = Today.getMinutes();
      // 10미만 2자리수 출력
      min = min < 10 ? ('0' + min) : min;
      // 초
      let sec = Today.getSeconds();
      // 10미만 2자리수 출력
      sec = sec < 10 ? ('0' + sec) : sec;
      // AM, PM
      const ampm = hour >= 12 ? 'PM' : 'AM';

      // 시간별 멘트
      const $comment = document.querySelector('.comment');
      const commnets = ['Good Morning', 'Good Afternoon', 'Good Evening', 'Good night'];
      // Good Morning 6 - 11
      // Good Afternoon 12 - 17
      // Good Evening  18 - 23
      // Good Night 00 - 5
      const [morning, afternoon, evening, night] = commnets;

      // 시계 출력
      document.querySelector('.time').textContent = `${ampm} ${hour}:${min}:${sec}`;

      // 멘트 출력
      if (hour >= 6 && hour <= 11) {
        $comment.textContent = morning;
      } else if (hour >= 12 && hour <= 17) {
        $comment.textContent = afternoon;
      } else if (hour >= 18 && hour <= 23) {
        $comment.textContent = evening;
      } else {
        $comment.textContent = night;
      }
    }
    setInterval(printTime, 0);
  </script>
</body>
</html>
```

**[ 코드리뷰 ]**

- 코멘트를 시간별 기준으로 4가지 멘트로 출력한다. 하지만 am, pm일 경우?
- 웹 폰트 이용시 처음 화면이 로딩될 때 다른 폰트가 잠깐 보인다.













