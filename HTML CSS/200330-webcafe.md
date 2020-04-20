# Web Cafe 코딩





###### 🙄 궁금사항 

---

**Q.**  href / src / url

**A.** 

1. CSS: url
2. HTML
   - link: href
   - link가 아닌 소스들 (이미지, 비디오): src

---

**Q.**  Section, div 대신 사용?

**A.** 

---

**Q.** block부모안에 block 자식이 있을 경우, 안에 포함되어 보여야 하기 때문에 bg색상은 slateblue 색상만 보여야 하는것이 아닌가? 근데 왜 skyblue, slateblue 둘 다 보이는 거지?

~~~html
<div class="footer-bg">
  footer-bg
  <footer class="footer">
    footer
  </footer>        
</div>
~~~

~~~css
.footer-bg{
    background-color: skyblue;
}
.footer{
    background-color: slateblue;
}
~~~



**A.**  부모요소의 콘텐츠의 텍스트가 포함되어 있고, 높이값을 따로 주지 않았기 때문에 두 색상다 보인다.

---

**Q.** img tag VS css background-image

**A.** 

-  **img tag**
  UI img, 메인 img
- **css background-imgae**
  1. google봇이 크롤링 하거나 색인하지 않아 SEO에 좋지 않다.
  2. 보조 기술을 위해 배경 이미지에 대한 특별한 정보를 제공하지 않아 접근성에 좋지 않다.
  3. 브라우저가 CSS를 다운로드하고 파싱하기 전까지 이미지 다운로드를 시작할 수 없어 성능에 떨어진다.
  4. 단지 순수 장식 이미지를 배경으로 사용하는 경우!



**&#10071;picture tag: 접근성과 이미지 최적화, 그리고 background-img의 cover기능(object-fit=cover)을 합친 html new tag!**  

~~~html
<picture>
  <source
    srcset="
      /some/_1170x658_crop_center-center/man-with-a-dog.webp 1170w,
      /some/_970x545_crop_center-center/man-with-a-dog.webp   970w,
      /some/_750x562_crop_center-center/man-with-a-dog.webp   750w,
      /some/_320x240_crop_center-center/man-with-a-dog.webp   320w
    "
    sizes="100vw"
    type="image/webp"
  />
  <source
    srcset="
      /some/_1170x658_crop_center-center/man-with-a-dog.jpg 1170w,
      /some/_970x545_crop_center-center/man-with-a-dog.jpg   970w,
      /some/_750x562_crop_center-center/man-with-a-dog.jpg   750w,
      /some/_320x240_crop_center-center/man-with-a-dog.jpg   320w
    "
    sizes="100vw"
  />
  <img
    src="/some/man-with-a-dog-placeholder.jpg"
    alt="Man with a dog"
    style="object-fit: cover;"
    loading="lazy"
  />
</picture>
~~~



---

**Q.**  HTML Entity 코드가 CSS에서 적용되지 않는 이유?

**A.**

~~~css
a::before{
    content: "\2023";
}
~~~

유니코드를 사용한다.

 

---

**Q.** 

**A.** 

---







---

20200330