export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
  let option = JSON.parse(localStorage.getItem('option'))||{};
  const images = []
  const option_type = option.type;
  for(let i=1;i<21;i++){
    images.push(`albums/${option_type}/${i}.webp`);
  }

const preloadedImages = [];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
  preloadedImages.push(img);
});

export async function renderAlbum(){
    let option = JSON.parse(localStorage.getItem('option'));
    const max = option.max;
    const min = option.min;
    const v = JSON.parse(localStorage.getItem('details'));
    const albimg = new Image();
    albimg.src = v.img;
    const album_nme = document.getElementById("title");
    const album_artist = document.getElementById("artist");
    const album_infoss = document.getElementById("oinfo");
    album_nme.innerText = v.album_name;
    album_artist.innerText = v.artist;
    album_infoss.innerText = `${v.year} ‧ ${v.tracks} tracks ‧ ${v.length}`;

    document.querySelectorAll('.js-album-link').forEach(function(anchor) {
      anchor.href = v.link;
    });
    let intervalId;
    function autoPlay(){
        intervalId = setInterval(function(){
          pickAlbum(randomNumber(0,20));}
          ,10);
      }
    autoPlay();

    setTimeout(()=>{
      clearInterval(intervalId);
      const album_img = document.getElementById("artwork");
      const album_nos = document.getElementById("no");
      album_img.src = albimg.src;
      album_nos.innerHTML = `${v.no}.`;
    },1000);
      
    function pickAlbum(v){
    const album_img = document.getElementById("artwork");
    const album_nos = document.getElementById("no");
    album_img.src = `${preloadedImages[v].src}`;
    album_nos.innerHTML = `${randomNumber(1,1000)}.`;
    
    setTimeout(()=>{
      document.querySelectorAll('.album-other-infos').forEach((item)=>{
        item.classList.add('after');
      });
      document.querySelector('.links-container').classList.add('after');
      },1200);
    }
  }

export async function fetchAlbum(album_id,album_type) {
  try {
    const albumss = await albumDetails(album_id,album_type);
    const{album_name,artist,year,spotifyid,id} = albumss.data;
    const response = await fetchAlbums(spotifyid,album_name,artist,year,id);
    const albumData = response;
    return albumData;
  } catch (error) {
      console.error('Error fetching album:', error);
  }
}
    
    
export async function albumDetails(id,option){
  try {
      const response = await fetch(`https://ill-wind-backend.onrender.com/getalbum?id=${id}&option=${option}`);
      if (!response.ok) {
          const errorText = await response.text(); // Get the raw text for debugging
          console.error('Error fetching album:', errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      const albumData = await response.json();
      return albumData;
  } catch (error) {
      console.error('Error fetching album:', error);
  };
}
    
    
     
    
    
export async function fetchAlbums(albumId,album_name,artist,year,id) {
  try {
      const response = await fetch(`https://ill-wind-backend.onrender.com/api/album?id=${albumId}`);
      const albumData = await response.json();
      const tracks = albumData.tracks.items; // Get the tracks from the album
      const totalDurationMs = tracks.reduce((total, track) => total + track.duration_ms, 0); // Sum durations
      const hours = Math.floor((totalDurationMs / 1000) / 3600);
      const minutes = Math.floor(((totalDurationMs / 1000) % 3600) / 60);
      let length = '';
      if(hours>0){
        length+=`${hours} hrs ${minutes} mins`;
      }
      else{
        length=`${minutes} mins`;
      }
      const obj={albumData:albumData,length:length,album_name:album_name,artist:artist,year:year,id:id};
      return obj;
  } catch (error) {
      console.error('Error fetching album:', error);
  }
}