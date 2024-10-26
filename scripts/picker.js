export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/*  let option = JSON.parse(localStorage.getItem('option'));
  console.log(option);
  let list = option.list;
  const images = []
  const option_type = option.type;
  for(let i=1;i<option.max+1;i++){
    images.push(`albums/${option_type}/${i}.webp`);
  }
  console.log(images);

const preloadedImages = [];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
  preloadedImages.push(img);
});

export function renderAlbum(){
    
    const max = option.max;
    const min = option.min;
    const v = localStorage.getItem('v');
    const overview = document.querySelector('.overview');
    const album_nme = document.getElementById("title");
    const album_artist = document.getElementById("artist");
    const album_infoss = document.getElementById("oinfo");
    album_nme.innerText = list[v].album_name;
    album_artist.innerText = list[v].artist;
    album_infoss.innerText = `${list[v].year} ‧ ${list[v].genre} ‧ ${list[v].tracks} songs ‧ ${list[v].length}`
    overview.innerHTML = list[v].review;

    document.querySelectorAll('.js-album-link').forEach(function(anchor) {
      anchor.href = list[v].link;
    });
    console.log(localStorage.getItem('v'));
      let intervalId;
      function autoPlay(){
          intervalId = setInterval(function(){
            pickAlbum(list,randomNumber(min,max));}
            ,10);
        }

      

      autoPlay();
      setTimeout(()=>{
        clearInterval(intervalId);
        pickAlbum(list,v);
      },1000);
      

   
      
      
      function pickAlbum(list,v){
      const album_img = document.getElementById("artwork");
      const album_nos = document.getElementById("no");
      album_img.src = `${preloadedImages[v].src}`;
      album_nos.innerHTML = `${list[v].no}.`;
      
      setTimeout(()=>{
        document.querySelectorAll('.album-other-infos').forEach((item)=>{
          item.classList.add('after');
        });
        document.querySelector('.links-container').classList.add('after');
      },1200);
      
      }

    }*/