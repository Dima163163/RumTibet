export const initAnimation = () => {
  const animItemsLeft = document.querySelectorAll('.anim-show-left');
  const animItemsRight = document.querySelectorAll('.anim-show-right');
  const animItems = [...animItemsLeft, ...animItemsRight]


  const offset = (el) => {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    }
  }

  const animationOnScroll = () => {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;

      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active')
      } else {
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active')
        }
      }
    }
  }

  if (animItems.length > 0) {
    window.addEventListener('scroll', animationOnScroll)
  }
  setTimeout(() => {
    animationOnScroll()
  }, 300)
}