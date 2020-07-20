# JSX

JSX는 React를 위해 태어난 새로운 자바스크립트 문법



## JSX 규칙

1. 태그는 꼭 닫아야 한다.

   ```react
   <div></div>
   ```

   태그와 태그 사이에 별도의 내용이 없다면 셀프클로징을 사용한다.

   ```react
   <Hello/>
   ```

   

2. 두개 이상의 태그는 무언가로 감싸져 있어야 한다.

   ```react
   <>
    	<div></div>
   	<p></p>
   </>
   ```

   `<div>...</div>`로 감싸도 되나 굳이 감쌀 필요가 없다면 `<>...</>`(프레그먼트)로 감싸면 된다.

   

3. 자바스크립트 값을 JSX에 보여져야할땐 중괄호에 감싸서 보여준다.

   ```react
   const name = '이렇게';
   return <div>JavaScript 값 보여줄 땐, {name}</div>
   ```

   

4. JSX에서 스타일 나타낼땐 문자열이 아닌 객체형태로 보여준다.

   ```react
   const style = {
     background: 'gray'
   }
   return (
   	<div style={style}></div>
   )
   ```

   

5. JSX에서 `class`를 추가할땐 `className`을 사용한다.

   ```react
   const style = {
     background: 'gray'
   }
   return (
   	<div style={style}>
       <div className="my-style">
         style과 className
       </div>
     </div>
   )
   ```

   

6. 주석을 사용할때는 `{/**/}`를 이용하거나 `//`를 이용한다.

   ```react
   return (
   	<div>
       {/*주석은 이렇게*/}
       <input 
         	// 또는 이렇게
         />
     </div>
   )
   ```

   

