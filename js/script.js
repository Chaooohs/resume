
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#navBtn');
const navBtnImage = document.querySelector('#navBtnImage');
const lgForm = document.querySelector('#lgForm');
const body = document.querySelector('body');                

navBtn.onclick = () => {
  if (nav.classList.toggle('active')) {                 
    navBtnImage.src = './img/header/close-btn.svg';
    lgForm.classList.add('active');                    
    body.classList.add('no-scroll');                    
  } else {
    navBtnImage.src = './img/header/open-btn.svg';
    lgForm.classList.remove('active');                  
    body.classList.remove('no-scroll');                  
  }
}