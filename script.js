const menuBarEl=document.querySelector('.fa-bars');
const closeEl=document.querySelector('.fa-xmark');

const navbar = document.querySelector('#navbar');
const aboutEl = document.querySelector('#about');
const menuContainerEl=document.querySelector('#menuContainer');

menuBarEl.addEventListener("click",()=>{
    menuContainerEl.style.display='block';
    menuContainerEl.style.right='0';
})
closeEl.addEventListener('click',()=>{
    menuContainerEl.style.right='-100%'
})


window.addEventListener("scroll",()=>{
    if(window.scrollY>aboutEl.offsetTop-navbar.offsetHeight)
    {
        navbar.classList.add('active')
        menuBarEl.style.color='white';
    }
    else
    {
        navbar.classList.remove('active')
        menuBarEl.style.color='black';
    }
})

