import { illWind } from "./redirect.js";
import { renderPopups } from "./popups.js";
import { randomNumber, fetchAlbum } from "./picker.js";
import { options } from "./lists.js";

let count=0;
document.querySelector('.js-ill-wind').addEventListener('click',
  ()=>{
    count = illWind(count);
  }
);

renderPopups();


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-album-options').forEach((button)=>{
    button.addEventListener('click',async ()=>{
      const optionId = button.dataset.optionId;
      let matchingOption;
      options.forEach((option)=>{
        if (optionId === option.id){
          matchingOption = option;
          localStorage.setItem('option',JSON.stringify(matchingOption));    
        }
      });
      const album_type = matchingOption.type;
      let v = randomNumber(matchingOption.min,matchingOption.max);
      const data = await fetchAlbum(v,album_type);
      const details = {
        album_name:data.album_name,
        artist:data.artist,
        year:data.year,
        tracks:data.albumData.total_tracks,
        length:data.length,
        link:data.albumData.external_urls.spotify,
        img:data.albumData.images[0]?.url || data.albumData.images[1]?.url,
        no:data.id
    }
    localStorage.setItem('details', JSON.stringify(details));
    window.location.href = "randomalbum.html";
    });
  });
});
