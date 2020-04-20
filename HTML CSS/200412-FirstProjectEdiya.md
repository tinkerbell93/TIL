# FirstProjectEdiya

HTML5, CSS3와 간단 JS를 사용한 이디야 프로젝트



## skils

### HTML5

- `header` `main` `section` `footer` 사용



### CSS3

- Class 네이밍: BEM 
- 미디어쿼리: 560px기준



### Vanila js / Jquery

- tab key 제어 
- class명 추가, 삭제



### Cross Browsing

- IE: 10
- Chrome, Firefox, Safari, Edge : modern browser 
- ```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  ```
  호환성 관련 `meta`태그로서 IE유저가 edge가 있을 경우 최신브라우저인 edge로 호환되게 연결해주는 태그



### Web Accessibility

- Screen Reader

  ChromeVox, Voice Over, MVDA 테스트

- Skip Navigation

- image 대체 텍스트

- 키보드 제어



### SEO

- ```html
  <meta name="description" content="이디야의 다양한 정보와 유용한 콘텐츠를 만나보세요.">
  ```

  웹페이지 내의 상세정보를 설명하는 `meta`태그로서 구글봇에 검색되기 용이하다.



## learned

aria-haspopup 

aria-pressed

meta property - open graph

cross browsing safari error

role=“dialog”



## feedback

1. [readme.md](http://readme.md/) 파일을 정리한 것이 인상적임 그러나 조금 더 보완했으면 좋겠음
   이왕이면 이미지도 readme.md에 제공하고 전체적인 제작 플로우를 보여주면 더 베스트일 듯(확인)
2. ~~로고의 대체텍스트가 이디야 홈페이지 입니다.는 적적하지 않은 대체텍스트로 보임
   좀 더 부연설명이 필요했다면 title이나 aria-label로도 충분 함~~
3. ~~메뉴 텍스트에 사이 띄우기가 있었더라면 ~ (스크린리더 등도 고려해 본다면 사이띄우기가 중요해요)~~
4. ~~tabindex 속성을 사용하여 강제로 포커스를 받게 하기 보다
   포커서블 요소를 사용하여 마크업 하는 방법을 권하고 싶음.~~
   ~~tabindex="0"을 제공한 음료 이미지 뒤에 <button> 요소를 사용하여 상세정보를 볼 수 있도록
   한내하고 있는 부분은 좋은 접근임
   버튼을 클릭할 때 음료 이미지 위에 modal로 창이 겹쳐서 제공된다는 것을 알 수 있도록
   role="dialog"를 제공하는 방법으로 수정해보고 관련 레퍼런스를 읽어보았으면 좋겠음.~~
5. 키보드 접근이나 제어 부분을 잘 처리했음. 추후 javascript를 배운 후 해당 코드를 좀 더 나은 방향으로 수정해 보기를 권장 함.(확인)
6. ~~1배율 이미지의 경우 srcset 속성에 넣기보다 src 속성에 default로 제공하는 것이 코드가 더 간결해 짐~~
7. html 요소와 role 속성을 함께 제공하는 방식은 스펙에서는 권장하지 않는 방식임.그러나 발표내용 대로 스크린리더 중 footer를 인식하지 못하거나 contentinfo를 인식하지 못하는
   경우를 대비해서 둘다 제공하기도 함.(확인)
8. 웹접근성 체크리스트나 seo 고려사항 정리가 좀 더 간결한 형태로 제공되었더라면 더 좋았을 것 같음.(확인)



## members

박민지 : [qkralswl307@gmail.com](mailto:qkralswl307@gmail.com)

김가현 : [hhjj105@gmail.com](hhjj105@gmail.com)

유지용 : [jxr208@gmail.com](mailto:jxr208@gmail.com)



## project development period

200406 ~ 200410

