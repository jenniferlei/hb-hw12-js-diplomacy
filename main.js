'use strict';

document
    .querySelector('.color-changer')
    .addEventListener('click', (evt) => {
        evt.preventDefault;

        const colorChanges = document.querySelectorAll('.color-change');

        for (const colorChange of colorChanges) {
            colorChange.classList.add('red');
        }
        
    })