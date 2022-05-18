"use strict";

const inputTopLeft = document.querySelector('#input__top-left');
const inputTopRight = document.querySelector('#input__top-right');
const inputBottomLeft = document.querySelector('#input__bottom-left');
const inputBottomRight = document.querySelector('#input__bottom-right');

const resultTopLeft = document.querySelector('#result_top-left');
const resultTopRight = document.querySelector('#result_top-right');
const resultBottomLeft = document.querySelector('#result_bottom-left');
const resultBottomRight = document.querySelector('#result_bottom-right');

const inputs = document.querySelectorAll('.input');
const box = document.querySelector('#box');
const totalResult = document.querySelector('.result__total');
const btnShowResult = document.querySelector('#btn');
const btnUpdate = document.querySelector('.update');


const changeRadius = () => {
    resultTopLeft.innerHTML = inputTopLeft.value;
    resultTopRight.innerHTML = inputTopRight.value;
    resultBottomLeft.innerHTML = inputBottomLeft.value;
    resultBottomRight.innerHTML = inputBottomRight.value;

    box.style.borderRadius = inputTopLeft.value + 'px ' + inputTopRight.value + 'px ' + inputBottomRight.value + 'px ' + inputBottomLeft.value + 'px ';  
}

const clickShowResult = () => {
    totalResult.innerHTML = inputTopLeft.value + 'px  ' + inputTopRight.value + 'px   ' + inputBottomRight.value + 'px   ' + inputBottomLeft.value + 'px ';
    totalResult.classList.toggle('total__active');
}

inputs.forEach(input => {
    input.addEventListener('input', changeRadius);
})


const clickUpdatePage = () => {
    inputs.forEach(input => {
        input.value = 0;

        resultTopLeft.innerHTML = inputTopLeft.value;
        resultTopRight.innerHTML = inputTopRight.value;
        resultBottomLeft.innerHTML = inputBottomLeft.value;
        resultBottomRight.innerHTML = inputBottomRight.value;

        box.style.borderRadius = inputTopLeft.value + 'px ' + inputTopRight.value + 'px ' + inputBottomRight.value + 'px ' + inputBottomLeft.value + 'px ';
        
        totalResult.innerHTML = inputTopLeft.value + 'px ' + inputTopRight.value + 'px ' + inputBottomRight.value + 'px ' + inputBottomLeft.value + 'px ';

        totalResult.classList.remove('total__active');

    })   
}

btnShowResult.addEventListener('click', clickShowResult);
btnUpdate.addEventListener('click', clickUpdatePage);