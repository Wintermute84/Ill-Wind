import { illWind } from "./redirect.js";
import { renderPopups } from "./popups.js";
import { randomNumber, fetchAlbum } from "./picker.js";
import { options } from "./lists.js";

let count=0;    //function for the ill-wind redirect
document.querySelector('.js-ill-wind').addEventListener('click', ()=>{
    count = illWind(count);
  }
);

renderPopups();

let currentInterval, id, matchingOption=null
let flag = true

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.js-album-options').forEach((button)=>{
    button.addEventListener('click',async ()=>{
      const optionId = button.dataset.optionId;
      
      if (currentInterval) {
        clearInterval(currentInterval);
        const previousOption = document.getElementById(id);
        previousOption.textContent = matchingOption.name;
      }

      options.forEach((option)=>{   //set option id and add loading message
        if (optionId === option.id){
          
          id = button.getAttribute('id')
          const name = option.name;
          
          currentInterval = setInterval(()=>{  
            if(flag){
              document.getElementById(id).innerText = 'Loading...';
              document.getElementById(id).classList.remove("not-loading")
              document.getElementById(id).classList.add("loading")
            }

            else{
              document.getElementById(id).innerText = name;
              document.getElementById(id).classList.remove("loading")
              document.getElementById(id).classList.add("not-loading")

            }
            flag = !flag
          },1000)
          matchingOption = option;
          localStorage.setItem('option',JSON.stringify(matchingOption));    
        }
      });

      const album_type = matchingOption.type;
      let v = randomNumber(matchingOption.min,matchingOption.max);
      const data = await fetchAlbum(v,album_type);
      const details = {     //create object for the album details
        album_name:data.album_name,
        artist:data.artist,
        year:data.year,
        tracks:data.albumData.total_tracks,
        length:data.length,
        link:data.albumData.external_urls.spotify,
        img:data.albumData.images[0]?.url || data.albumData.images[1]?.url,
        no:data.id,
        list:matchingOption.name
    }

    clearInterval(currentInterval);
    if(!flag){
      document.getElementById(id).innerText = matchingOption.name;
      document.getElementById(id).classList.remove("loading")
    }

    let history = JSON.parse(localStorage.getItem('history')) || [] //history array in locstorage to keep track of recent picks
    history.push(details)
    if (history.length > 10) {  //lenght of array limited to 10
      history.shift(); //delete oldest pick
    }
    localStorage.setItem('history',JSON.stringify(history))
    
    localStorage.setItem('details', JSON.stringify(details));     //store the object in local storage
    window.location.href = "randomalbum.html";
    });

  });
});
