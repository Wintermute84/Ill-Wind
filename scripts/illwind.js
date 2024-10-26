import { illWind } from "./redirect.js";
import { renderPopups } from "./popups.js";
import { randomNumber } from "./picker.js";
import { options } from "./lists.js";

let count=0;
document.querySelector('.js-ill-wind').addEventListener('click',
  ()=>{
    count = illWind(count);
  }
);

renderPopups();

document.querySelectorAll('.js-album-options').forEach((button)=>{
  button.addEventListener('click',()=>{
    const optionId = button.dataset.optionId;
    console.log(optionId);
    let matchingOption;
    options.forEach((option)=>{
      if (optionId === option.id){
        matchingOption = option;
        localStorage.setItem('option',JSON.stringify(matchingOption));
        localStorage.setItem('v', randomNumber(matchingOption.min,matchingOption.max));
      }
    });

  window.location.href = "randomalbum.html";

  });
});