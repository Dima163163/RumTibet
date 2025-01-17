export const initBurger = () => {
  const burderMenu = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile_menu')
  const btnClose = document.querySelector('.close_btn');

  burderMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no_scroll');
  })

  btnClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no_scroll')
  })
};