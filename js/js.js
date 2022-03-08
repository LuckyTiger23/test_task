let lastScroll = 0;
const defaultOffset = 600;
const buttonUp = document.querySelector('.buttonup');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => buttonUp.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > defaultOffset) {
        //scroll down
      buttonUp.classList.remove('hide');
      buttonUp.classList.add('view');
      

    }
    else if(scrollPosition() < defaultOffset){
        //scroll up
      buttonUp.classList.add('hide');
      buttonUp.classList.remove('view');
    }

    lastScroll = scrollPosition();
})