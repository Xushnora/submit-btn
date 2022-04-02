let chooseBtns = document.querySelectorAll('.btn-choose');
let elBoxs = document.querySelectorAll('.boxs');
let elHappyBtn = document.querySelector('.happy-btn');
let elTitleBtn = document.querySelector('.title-btn');
let elDescBtn = document.querySelector('.desc-btn')
let elHappyBack = document.querySelector('.happy-btn-back');
let elDescBack = document.querySelector('.desc-btn-back');

// first btn
chooseBtns[0].addEventListener('click', ()=> {
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[1].classList.remove('active-btn');
    chooseBtns[2].classList.remove('active-btn');
    elBoxs[0].style.display = 'block';
    elBoxs[1].style.display = 'none';
    elBoxs[2].style.display = 'none';
    elBoxs[3].style.display = 'none';
})

// second btn
chooseBtns[1].addEventListener('click', ()=> {
    chooseBtns[1].classList.add('active-btn');
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[2].classList.remove('active-btn');
    elBoxs[1].style.display = 'block';
    elBoxs[0].style.display = 'none';
    elBoxs[2].style.display = 'none';
    elBoxs[3].style.display = 'none';
})

// third btn
chooseBtns[2].addEventListener('click', ()=> {
    chooseBtns[2].classList.add('active-btn');
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[1].classList.add('active-btn');
    elBoxs[2].style.display = 'block';
    elBoxs[0].style.display = 'none';
    elBoxs[1].style.display = 'none';
    elBoxs[3].style.display = 'none';
})

// yes, button finally

elHappyBtn.addEventListener('click', () => {
    elBoxs[3].style.display = 'block';
    elBoxs[0].style.display = 'none';
    elBoxs[1].style.display = 'none';
    elBoxs[2].style.display = 'none';
})

// no, btn finally

elHappyBack.addEventListener('click', () =>{
    chooseBtns[1].classList.add('active-btn');
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[2].classList.remove('active-btn');
    elBoxs[1].style.display = 'block';
    elBoxs[0].style.display = 'none';
    elBoxs[2].style.display = 'none';
    elBoxs[3].style.display = 'none';
})

// subtitle btn

elTitleBtn.addEventListener('click', () => {
    elBoxs[1].style.display = 'block';
    elBoxs[0].style.display = 'none';
    elBoxs[2].style.display = 'none';
    elBoxs[3].style.display = 'none';
    chooseBtns[1].classList.add('active-btn');
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[2].classList.remove('active-btn');
})

// description btn
elDescBtn.addEventListener('click', ()=> {
    elBoxs[2].style.display = 'block';
    elBoxs[0].style.display = 'none';
    elBoxs[1].style.display = 'none';
    elBoxs[3].style.display = 'none';
    chooseBtns[2].classList.add('active-btn');
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[1].classList.add('active-btn');
})

// back button
elDescBack.addEventListener('click', () => {
    chooseBtns[0].classList.add('active-btn');
    chooseBtns[1].classList.remove('active-btn');
    chooseBtns[2].classList.remove('active-btn');
    elBoxs[0].style.display = 'block';
    elBoxs[1].style.display = 'none';
    elBoxs[2].style.display = 'none';
    elBoxs[3].style.display = 'none';
})
