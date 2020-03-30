# CSS Flex

수평, 수직정렬 레이아웃을 구성할 수 있다.
기존 사용하던 방법은 다양한 문제를 가지고 있다.

1. Inline-block : 띄어쓰기때문에 약간의 공백이 생긴다.
    ~~~html
    <div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    </div>
    ~~~
   ~~~css
   .container{
     border: 2px solid red;
   }
   .container .item{
     display: inline-block;
     width: 100px;
     height: 100px;
     border: 2px solid;
     border-radius: 10px;
   }
   ~~~

   .container에 *font-size: 0*를 추가함으로 공백을 없애고 부모요소의 영향으로 폰트사이즈가 0이 되었음으로 .item의 *font-size: 16px*을 추가하여 재 설정 해준다.

   ~~~css
   .container{
     border: 2px solid red;
     font-size: 0;
   }
   .container .item{
     display: inline-block;
     width: 100px;
     height: 100px;
     border: 2px solid;
     border-radius: 10px;
     font-size: 16px;
   }
   ~~~

2. float : 컨텐츠를 띄워 배치하는 형식지만 그로인해 자식요소들의 높이값을 인식 할 수 없다.
    ~~~html
    <div class="clearfix">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    ~~~
    수평이 될 요소에 직접 *float*를 적용하고 부모요소에 미리 설정한 .clearfix를 적용하여 부모요소가 자식요소를 감쌀 수 있도록 한다.
    ~~~css
    .box{
        float: left;
    }
    .clearfix::after{
        content: "";
        clear: both;
        display: block;
    }
    ~~~
그래서 수직 수평 정렬 레이아웃을 사용하기에 최적화 된 *flex*.
    ~~~html
    <div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    </div>
    ~~~
    ~~~css
    .container{
        display: flex;
    }
    ~~~
    



## CSS3 Flexible Box
flex는 container, items 두가지 개념으로 나뉜다. 
items을 정렬하기 위해서는 items를 감싸는 부모요소가 있어야 함으로 container가 필수이며, **container와 items에 적용하는 속성이 구분**되어 있다.
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-base.jpg)




## Flex Container 속성
### 1. display
*display* 속성으로 Flex Container로 정의한다.
~~~css
{display: flex};
~~~
| 값 | 의미 | 기본값 |
| ---- | ---- | ---- |
|flex|Block 특성의 Flex Container를 정의||
|line-flex|inline 특성의 Flex Container를 정의||

&#10071; **flex와 inline-flex의 차이**
      *flex*: container가 Block 요소와 같은 성향으로 수직으로 쌓임
      *inline-flex*: container가 inline 요소와 같은 성향으로 수평으로 쌓임

**&#128680; 주의: items에 수직과 수평 쌓임이 아닌 container에 쌓이는 것이므로 items에는 영향을 주지 않는다.**
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-display.jpg)



### 2. flex-flow

단축 속성으로 Flex Items의 주 축(main-axis)을 설정하고 Items의 여러 줄 묶음(줄 바꿈)도 설정한다.
~~~css
{flex-flow: flex-direction flex-wrap};
{flex-flow: column wrap};
~~~
|값|의미|기본값|
|---|---|---|---|
|flex-direction|Items의 주 축(main-axis)을 설정|*row*|
|flex-wrap|Items의 여러 줄 묶음(줄 바꿈) 설정|*nowrap*|



#### &#10024; flex-flow 개별속성: flex-direction

	  Items의 주 축(main-axis)을 설정한다.

~~~css
{flex-direction: row-reverse}
~~~
|값|의미|기본값|
|---|---|---|---|
|row|Items를 수평축(왼쪽에서 오른쪽으로)으로 정렬|*row*|
|row-reverse|Items를 row와 반대 축으로 정렬||
|column|Items를 수직축(위에서 아래로)으로 정렬||
|column-reverse|Items를 column와 반대 축으로 정렬||
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg)

##### &#9989; 주 축(main-axis)과 교차 축(cross-axis)
	  Items의 수평, 수직의 방향에 따라 주 측과 교차 측이 달라진다.
|값|주 축(main-axis)|교차 축(cross-axis)|
|---|---|---|
|row|수평|수직|
|column|수직|수평|
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-axis.jpg)

##### &#9989; 시작점(flex-start)과 끝점(flex-end)

주 축이나 교차 축의 시작하는 지점과 끝나는 지점을 지칭하며, 역시 방향애 따라 시작점과 끝점이 달라진다.

??????  맞는건가...

**- 주 축의 시작점과 끝점**

| 값             | 시작점(flex-start) | 끝점(flex-end) |
| -------------- | ------------------ | -------------- |
| row            | 왼쪽               | 오른쪽         |
| row-reverse    | 오른쪽             | 왼쪽           |
| column         | 위                 | 아래           |
| column-reverse | 아래               | 위             |

**- 교차 축의 시작점과 끝점**
|값|시작점(flex-start)|끝점(flex-end)|
|---|---|---|
|row|위|아래|
|row-reverse|아래|위|
|column|왼쪽|오른쪽|
|column-reverse|왼쪽|오른쪽|
??????

**&#128680; 주의: column-reverse가 방향이 반대여도 교차 축은 달라지지 않는다.**
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-start.jpg)

#### &#10024; flex-flow 개별속성: flex-wrap
Items의 여러 줄 묶음(줄 바꿈)을 설정한다.
기본적으로 지정된 크기를 무시하고 줄 바꿈 되지 않은 한 줄에서만 가변한다. 그러므로 Items를 줄 바꿈 하려면 값을 wrap 또는 wrap-reverse를 사용한다.

~~~css
{flex-wrap: wrap};
~~~
|값|의미|기본값|
|---|---|---|---|
|nowrap|모든 Items를 여러 줄로 묶지 않고 한 줄에 표시|*nowrap*|
|wrap|Items를 여러 줄로 묶음||
|wrap-reverse|Items를 warp의 역 방향으로 여러 줄로 묶음||
wrap-reverse는 *flex-direction: row*(default)일 경우오른쪽에서 왼쪽으로 쌓이며, 아래에서 위쪽 방향으로 쌓인다.
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-wrap.jpg)



### 3. justify-content

주 축(main-axis)의 정렬 방법을 설정한다.
~~~css
{justify-content: center}
~~~
|값|의미|기본값|
|---|---|---|---|
|flex-start|Items를 시작점(flex-start)으로 정렬|*flex-start*|
|flex-end|Items를 끝점(flex-end)으로 정렬||
|center|Items를 가운데 정렬||
|space-between|시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬됨||
|space-around|Items를 균등한 여백을 포함하여 정렬||
|space-evenly|시작 Item의 시작점 사이와 마지막 Item의 끝점 사이를 포함하여 모두 같은 값의 여백으로 정렬||
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-justify-content.jpg)



### 4. align-content

교차 축(cross-axis)의 정렬 방법을 설정한다.
**&#128680; 주의: Items가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있다. 한 줄일 경우 *align-items*속성을 이용! **

~~~css
{align-content: flex-start}
~~~
|값|의미|기본값|
|---|---|---|
|stretch|Container의 교차 축을 채우기 위해 Items를 늘림|*stretch*|
|flex-start|Items를 시작점(flex-start)으로 정렬||
|flex-end|Items를 끝점(flex-end)으로 정렬||
|center|Items를 가운데 정렬||
|space-between|시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 <br />나머지 Items는 사이에 고르게 정렬됨||
|Space-around|Items를 균등한 여백을 포함하여 정렬||
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-content.jpg)

### 5. align-items
*align-content*와 같은 방식이지만 **한 줄일 경우** 사용한다.
*align-content*의 *space-between, space-around, space-evenly* 값이 포함되어 있지 않고 *baseline*이라는 값이 존재한다.

|값|의미|기본값|
|---|---|---|
|stretch|Container의 교차 축을 채우기 위해 Items를 늘림|stretch|
|flex-start|Items를 각 줄의 시작점(flex-start)으로 정렬||
|flex-end|Items를 각 줄의 끝점(flex-end)으로 정렬||
|center|Items를 가운데 정렬||
|Baseline|Items를 문자 기준선에 정렬||

![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-items.jpg)




## Flex Items 속성
### 1. order
Item의 순서를 설정한다. 
Item에 숫자를 지정하고 숫자가 클수록 순서가 밀리고 음수가 허용된다.
*z-index*와 같은 원리
~~~css
{order: 순서}
~~~
|값|의미|기본값|
|---|---|---|---|
|숫자|Item의 순서를 설정|0|
![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-order.jpg)



### 2. flex

Item의 너비(증가, 감소, 기본)를 설정하는 단축 속성이다.
~~~css
{flex: flex-grow flex-shrink flex-basis}
{flex: 1 1 0}
~~~

| 값          | 의미                                 | 기본값 |
| ----------- | ------------------------------------ | ------ |
| flex-grow   | Item의 증가 너비 비율을 설정         | 0      |
| flex-shrink | Item의 감소 너비 비율을 설정         | 1      |
| Flex-basis  | Item의 (공간 배분 전) 기본 너비 설정 | *auto* |

**&#128680; 주의: *flex-grow*를 제외한 개별 속성은 생략할 수 있다. **
**&#128680; 주의: *flex: 1*일 경우 *flex-grow: 1; flex-shrink: 1; flex-basis: 0;*과 같다.  *flex-basis*의 기본값은 auto이나 단축 속성인 *flex*에서 생략할 경우 0이 적용된다.**



#### &#10024; flex 개별속성: flex-grow

Item의 증가 너비 비율을 설정하며 숫자가 크면 더 많은 너비를 갖는다.
Item이 가변 너비가 아니거나, 값이 *0*일 경우 효과가 없다.

~~~css
{flex-grow:1}
~~~

| 값   | 의미                         | 기본값 |
| ---- | ---------------------------- | ------ |
| 숫자 | Item의 증가 너비 비율을 설정 | *0*    |

![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-grow.jpg)



#### &#10024; flex 개별속성: flex-shrink

Item이 감소하는 너비의 비율로 설정하며 숫자가 크면 더 많은 너비가 감소한다.
Item이 가변 너비가 아니거나, 값이 *0*일 경우 효과가 없다.

~~~css
{flex-shrink: 1}
~~~

| 값   | 의미                         | 기본값 |
| ---- | ---------------------------- | ------ |
| 숫자 | Item의 증가 너비 비율을 설정 | *1*    |

![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-shrink.jpg)



#### &#10024; flex 개별속성: flex-basis

Item의 기본 너비를 설정한다.
값이 *auto*일 경우 *width, height* 등의 속성으로 item의 너비를 설정할 수 있으나 단위 값이 주어질 경우 설정할 수 없다.

~~~css
{flex-basis: auto}
~~~

> flex: 1일 때, flex-basis는 0.. 그렇다면 무조건 너비를 설정해줘야 하는가....

![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-basis.jpg)



### 3. align-self

교차 축(cross-axis)에서 개별 Item의 정렬 방법을 설정합니다.
align-items의 값과 동일하며 필요에 의해 일부 Item만 정렬 방법을 변경 할 경우 *align-self*를 사용 할 수 있습니다. *align-items* 속성보다 우선합니다.

~~~css
{align-self: stretch}
~~~

![HEROPY Tech](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-self.jpg)



###### 🙄 궁금사항

---

**Q.** <!doctype>에서 align-item: center가 적용되었던 것이 <!doctype html>이 적용되지 않는다?

~~~html
<!doctype>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            display: flex;
            align-items: center;
        }
        .container{
            display: flex;
            flex-direction: column;
        }
        header{
            border-bottom:1px solid gray;
            padding-left:20px;
        }
        footer{
            border-top:1px solid gray;
            padding:20px;
            text-align: center;
        }
        .content{
            display:flex;
        }
        .content nav{
            border-right:1px solid gray;
        }
        .content aside{
            border-left:1px solid gray;    
        }
        nav, aside{
            flex-basis: 150px;
            flex-shrink: 0;
        }
        main{
            padding:10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>생활코딩</h1>
        </header>
        <section class="content">
            <nav>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                </ul>
            </nav>
            <main>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veniam totam labore ipsum, nesciunt temporibus repudiandae facilis earum, sunt autem illum quam dolore, 
            </main>
            <aside>
                AD
            </aside>
        </section>
        <footer>
            <a href="https://opentutorials.org/course/1">홈페이지</a>
        </footer>
    </div>
</body>
</html>
~~~

**A.** HTML5 표준코드에서는 *body* 태그의 *heigh*t가 화면전체를 차지하는 것이 아닌 자신이 감싸고 있는 컨텐츠 내용만을 차지하고 있다. 그래서 뷰포트단위를 100vh로 *height*를 화면 전체를 차지하게 만든다.

**Q.** 그렇다면 *body*에 *aling-items: center*를 사용하기 위해 html5 표준을 사용할때마다 *body*태그에 *height: 100vh*을 넣어야 하는가? 

**A.** 필요에 의하면 넣자.

**Q.** 유지보수 할 때, 세로중앙정렬을 위해서 flex를 사용한다고 하면, *body*태그의 *heigth: 100vh*넣는게 무리가 없을까? 또는 문제가 될만한게 있을까?

**A.** *flex*를 *body*에 사용하면서 *align-items: center*를 사용하는 예제를 찾아보자.. 혹은 나중에 TEST해보자!! _200313

---

**Q.** flexible box는 IE9 버전 이하는 작동하지 않는다. 그럼 크로스브라우징은 어떻게 해야할까?

**A.** -moz- / -ms- / -webkit- / -o- 등을 이용한다.
	자세한 내용 참고 : https://webclub.tistory.com/604

---

![flex_img_01](/Users/kimgahyun/Desktop/html_class/img/flex_img_01.jpeg)





> 요소, 속성, 엘리먼트 - 용어정리.. 
> -> 속성(Attributes): 태그(요소)의 기능을 확장하기 위해 속성을 사용, 값(Value)

~~~html
    <div 속성="값"></div>
~~~



---

200310

발쵀: [https://heropy.blog/2018/11/24/css-flexible-box/](https://heropy.blog/2018/11/24/css-flexible-box/)