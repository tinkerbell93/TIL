# JavaScript lesson TODO

TODO List 만들기

## 기능

1. input에 입력하고 엔터 누르면 리스트 목록에 출력
2. 체크버튼 누르면 해당 list에 취소선 추가
3. X버튼 누르면 해당 list 삭제

## 코드

**[ 도전 1]**

```html
<!-- 
  1. Input에 글을 입력하고 엔터를 누르면 = 키보드 이벤트 : keydown
  2. li 요소에 textContent로 추가하는데 DOM에 ul.list가 있는지 확인
  2-1. 없다면 ul.list요소를 DOM에 추가
  2-2. 있다면 ul.list 자식인 li요소를 DOM에 추가
  3. placeholder ????
-->
<!DOCTYPE html>
<html>
<head>
  <style>
    .comleted{
      text-decoration: line-through;
    }
  </style>
</head>
<body>
  <input class="todoInput" type="text" placeholder="enter todo!">
  <ul id="todoList"></ul>

  <script>
    const $todoInput = document.querySelector('.todoInput');

    // 체크박스 요소
    const checkBox = '<input type="checkbox">';
    const $checkBox = document.querySelector('input[type=checkbox]');
    // 버튼 요소
    const removeBtn = '<button>X</button>';

    // keydown은 왜????
    $todoInput.onkeyup = function (e) {
      // 엔터키가 눌렸는지 아닌지 확인한다.
      if (e.keyCode !== 13) return;
      console.log('enter');
      // console.log(e);
      const addTodo = $todoInput.value;
      console.log(addTodo);

      document.getElementById('todoList').innerHTML += `<li>${checkBox} ${addTodo} ${removeBtn}</li>`;

      // input 어트리뷰트 리셋
      $todoInput.value = '';

    };

    $checkBox.onchange = function (e) {
      // if ($checkBox.value === 'checked') 
      $checkBox.className = e.target.checked ? '.comleted' : '';
    }; // => 체크박스가 생성되기 전에 이벤트 핸들러가 있기때문에 null이 나온다.
    
  </script>
</body>
</html>
```

**[ 도전 2 ]**

```html
<!DOCTYPE html>
<html leng="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TODO 예제</title>
  <style>
    .completed{
        text-decoration: line-through;    
    }
      
  </style>
</head>
<body>
  <input class="inputTodo" type="text" placeholder="enter todo!">
  <ul class="todos"></ul>

  <script>
    // 1. input에 택스트 입력 후 엔터누르면 todos에 추가
    const $input = document.querySelector('.inputTodo');
    $input.onkeyup = e => {
      if (e.keyCode !== 13 || $input.value.trim() === '') return;
      document.querySelector('.todos').innerHTML += `<li><input type="checkbox"> <span>${$input.value}</span> <button class="delete">X</button></li>`;
      $input.value = '';
    };

    // 2. X버튼 누르면 해당 li 삭제
    const $todos = document.querySelector('.todos');
    $todos.onclick = ({ target, value }) => {
      // 이벤트객체의 이벤트 타겟 : e.target
      // { target }
      // const { target } = 이벤트객체 ;
      // 디스트럭처 할당
      // 이벤트 객체의 target, value를 사용하겠다.
      if (!target.matches('.delete')) return;
      // todo의 button이 클릭되었는지 확인
      // 이벤트 타깃의 부모 지움
      $todos.removeChild(target.parentNode);
    };

    // 3. check버튼 누르면 span에 completed class 추가
    $todos.onchange = ({ target }) => {
      target.nextElementSibling.classList.toggle('completed');
      // classList
      // className
    };
  </script>
</body>
</html>

```



**[ 정답 ]**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input[type="checkbox"]:checked + span{
      text-decoration: line-through;
    } */
    .completed {
      text-decoration: line-through;
    }
  </style>
</head>
<body>
  <input class="input-todo" type="text" placeholder="enter todo!">
  <ul class="todos"></ul>

  <script>
   const $inputTodo = document.querySelector('.input-todo');
   const $todos = document.querySelector('.todos');
   
   $inputTodo.onkeyup = e => {
     // 엔터키가 눌렸는지 확인
     // 엔터가 눌렸는지의 정보는 이벤트 객체가 알고있다.
     if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;

     $todos.innerHTML += `<li>
        <input type="checkbox">
        <span>${$inputTodo.value}</span>
        <button>X</button>
      </li>`;
     // innerHTML 약점 : 무조건 뒤 html에 추가
     $inputTodo.value = '';
   };

   $todos.onclick = ({ target }) => {
     // { target }
     // 이벤트 객체의 타켓만 볼 수 있다. 디스트럭처링 할당으로
   
     // 실제 이벤트를 발생시킨 요소를 가져와야함
     //  console.log(e.target);

     // 이벤트를 발생시킨 애 = 버튼을 잡아야함
     if (!target.matches('.todos > li > button')) return;
   
     // button의 할아버지(ul)
     //  console.log(e.target.parentNode.parentNode);
     target.parentNode.parentNode.removeChild(target.parentNode);
   };

   $todos.onchange = ({ target }) => {
     // li요소 안에 값이 변경시킬 요소는 check 뿐이다. 따라서 필터해줄 필요가 없다.

     // .toggle은 completed가 있으면 class 삭제, 없으면 추가
     target.nextElementSibling.classList.toggle('completed');
   };
  </script>
</body>
</html>
```

