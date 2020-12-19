window.addEventListener('scroll', () => {
  const target = document.querySelectorAll('.scroll');
  // const scrolled = window.pageYOffset;
  // const rate = scrolled * -2;

  // target.style.transform = `translate3d(0px, ${rate}px, 0px)`;

  let index = 0;
  const length = target.length;


  for (index; index < length; index++) {
    const pos = window.pageYOffset * target[index].dataset.rate;
    const posX = window.pageYOffset * target[index].dataset.ratex;
    const posY = window.pageYOffset * target[index].dataset.ratey;

    if (target[index].dataset.direction === 'vertical') {
      target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    } else {
      target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  }
});