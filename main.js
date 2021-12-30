'use strict';

// document
//     .querySelector('.color-changer')
//     .addEventListener('click', (evt) => {
//         evt.preventDefault();

//         const colorChanges = document.querySelectorAll('.color-change');

//         for (const colorChange of colorChanges) {
//             colorChange.classList.add('red');
//         }
        
//     });


// document
//     .querySelector('.number-form')
//     .addEventListener('submit', (evt) => {
//         evt.preventDefault();

//         const num = Number(document.querySelector('#number-input').value);
//         const formFeedback = document.querySelector('#formFeedback');
        
//         if (!num || num >= 10) {
//             formFeedback.innerText = 'Please enter a smaller number';
//         } else if (num < 10 || num === 0) {
//             formFeedback.innerText = 'You are good to go!';
//         }
//     });


    function changeColor() {
        const colorChangeEls = document.querySelectorAll('.color-change');
      
        for (const el of colorChangeEls) {
          el.classList.add('red');
        }
      }
      
      function validateNumber(evt) {
        evt.preventDefault();
      
        const numberInput = document.querySelector('input[name="number"]');
        const userNum = Number(numberInput.value); // typecast to num
      
        const formFeedback = document.querySelector('#formFeedback');
        if (!userNum || userNum >= 10) {
          formFeedback.innerText = 'Please enter a smaller number';
        } else {
          formFeedback.innerText = 'You are good to go!';
        }
      }
      
      /******* Attach event handlers *******/
      
      document.querySelector('.color-changer').addEventListener('click', changeColor);
      document.querySelector('.number-form').addEventListener('submit', validateNumber);