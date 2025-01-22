export const initAnimation = () => {
  const animItemsLeft = document.querySelectorAll('.anim-show-left');
  const animItemsRight = document.querySelectorAll('.anim-show-right');
  const animItems = [...animItemsLeft, ...animItemsRight]


  const animationOnScroll = () => {
    for (let i = 0; i < animItems.length; i++) {
      const elemItem = animItems[i];
      const positionElemItem = elemItem.getBoundingClientRect();
      const elemItemTop = window.scrollY + positionElemItem.top;
      const elemItemBottom = elemItemTop + positionElemItem.height;
      const windowHeight = document.documentElement.clientHeight;

      if ((scrollY + windowHeight > elemItemTop) && (scrollY < elemItemBottom)) {
        elemItem.classList.add('active')
      } else {
        if (!elemItem.classList.contains('anim-no-hide')) {
          elemItem.classList.remove('active')
        }
      }
    }
  }

  if (animItems.length > 0) {
    window.addEventListener('scroll', animationOnScroll)
  }

  setTimeout(() => {
    animationOnScroll();
  }, 500)
}