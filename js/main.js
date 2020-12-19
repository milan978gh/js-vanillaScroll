window.addEventListener('scroll', (e) => {
  const target = document.querySelectorAll('.scroll');
  // const scrolled = window.pageYOffset;
  // const rate = scrolled * -2;
  let index = 0;
  const length = target.length;

  // target.style.transform = `translate3d(0px, ${rate}px, 0px)`;

  for (index; index < length; index++) {
    const pos = window.pageYOffset * target[index].dataset.rate;
    target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
  }


});