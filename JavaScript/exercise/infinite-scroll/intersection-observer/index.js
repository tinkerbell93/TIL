(() => {
  let ioTarget;
  const $ul = document.querySelector('ul')
  let $li = document.querySelector('li:last-child');
  let count = $ul.children.length;

  // 2. 감시 기능 선언
  const io = new IntersectionObserver((entry, observer) => {
    // 현재 보이는 target 출력
    ioTarget = entry[0].target;

    // 현재 보이는 target이 출력되면 하는 일
    if (entry[0].isIntersecting) {
      console.log('현재 보이는 타켓', ioTarget)
      // 현재 보이는 target 감시 취소해줘
      io.unobserve($li);

      // 새로운 li 추가해
      $li = $ul.appendChild(document.createElement('li'));
      $li.textContent = ++count;
      // 새로 추가된 li 감시해!
      io.observe($li);
    }
  }, {
    // 타겟이 50% 이상 보이면 해줘!
    threshold: 0.5
  });

  // 3. li감시해!
  io.observe($li);

})();