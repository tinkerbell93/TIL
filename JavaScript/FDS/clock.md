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

**[ 수정사항 ]**

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















