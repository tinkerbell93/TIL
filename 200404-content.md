# CSS content 속성
나는 `content`속성을 주로 가상요소 선택자인  `::after`, `::before`에 문자열 또는 빈 값으로  넣어 스타일링을 했다.  하지만 `content`에 들어가는 값들은 문자열 이외에도 많다.

## content 속성 값 리스트
* **string**
대체 텍스트를 넣을 수 있는 값으로 모든 문자와 숫자가 가능하며 `“”` 안에 값을 넣어주면 된다.
```css 
::before{
	content: “텍스트”;
}
```

* **image**
이미지를 넣을 수 있는 값으로 `url("이미지경로")`로 값을 넣으며, 이미지의 설명을 `/`로 구분하여 대체 텍스트를 넣을 수 있다. 
```css
::before{
	content: url(“이미지경로”);
	content: url(“이미지경로”)/"대체 텍스트”;
	content: linear-gradient(#aaa, #ddd);
}
```

* **counter**
자동으로 번호를 매길 수 있는 변수로 CSS규칙에 따라 값이 증가 또는 감소한다.
```css
ol{
	/* conuter의 이름을 ‘함수명’으로 지정한다. */
	counter-reset: 함수명;
}
li::before{
	/* 카운터 값을 표시한다. */
	content: counter(함수명);
	/* 카운터 값을 1씩 증가시킨다. */
	counter-increment: 함수명;
}
```

* **attr()**
요소의 속성을 문자열로 변환하여 브라우저에 보여 준다. 
```html
<p title=“가사” data-text="마르고 닳도록”>
	동해물과 백두산이
</p>
```

```css
p::before{
	/* attr의 값과 문자열 “ - ” 도출 */
	content: attr(title) " - ";
}
p::after{
	/* attr의 값 도출 */
	content: attr(data-text);
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="KKpjyNz" src="https://codepen.io/Ellen27/embed/preview/KKpjyNz?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Ellen27/pen/KKpjyNz'>KKpjyNz</a> by 김가현
  (<a href='https://codepen.io/Ellen27'>@Ellen27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


> &zwj;♀️  
> counter, attr() 값을 불러오는 것이 매우 흥미로웠다.   
> 매일 문자열만 사용했던 나는 신세계 체험..  

#CSS/content#