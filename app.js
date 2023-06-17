const lists =document.querySelector('.lists');
const logos =document.querySelector('.logos');
const sideMenu =document.querySelector('.sideMenu');
const sideList =document.querySelector('.sideList');
const sideListDisplay =document.querySelector('.sideListDisplay');

const bars =document.querySelector('.fa-bars');
const cross =document.querySelector('.fa-close');


bars.addEventListener('click',()=>{

   
    sideList.classList.toggle('sideListDisplay');

    bars.style.color ='red';
})

cross.addEventListener('click',()=>{
    sideList.classList.toggle('sideListDisplay');
    bars.style.color ='black';
})


   