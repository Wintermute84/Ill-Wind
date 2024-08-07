function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}





function albumPicker(){

  let v = randomNumber(0,10);
  const album = [{no:120,artist:'Weyes Blood',album_name:'Titanic Rising',year:2019,genre:'Chamber Pop',length:'42 mins',tracks:10},
    {no:420,artist:'Joy Division',album_name:'Unknown Pleasures',year:1979,genre:'Post Punk',length:'40 mins',tracks:10},
    {no:10,artist:'Radiohead',album_name:'Kid A',year:2000,genre:'Art Rock',length:'47 mins',tracks:10},
    {no:984,artist:'Sonic Youth',album_name:'Goo',year:1990,genre:'Noise Rock',length:'49 mins',tracks:11},
    {no:564,artist:'Slowdive',album_name:'Souvlaki',year:1993,genre:'Shoegaze',length:'40 mins',tracks:10},
    {no:890,artist:'Black Country, New Road',album_name:'Ants from Up There',year:2022,genre:'Chamber Pop',length:'58 mins',tracks:10},
    {no:154,artist:'MF Doom',album_name:'Mm..Food',year:2004,genre:'Hip Hop',length:'48 mins',tracks:15},
    {no:752,artist:'Beach House',album_name:'7',year:2018,genre:'Dream Pop',length:'47 mins',tracks:11},
    {no:120,artist:'Deafheaven',album_name:'Sunbather',year:2013,genre:'Blackgaze',length:'59 mins',tracks:7},
    {no:120,artist:'Aphex Twin',album_name:'Druqs',year:2001,genre:'IDM',length:'1hr 40 mins',tracks:30}
  ]
  const album_img = document.getElementById("artwork");
  const album_nme = document.getElementById("title");
  const album_artist = document.getElementById("#artist");
  const album_infoss = document.getElementById("oinfo");
  const album_nos = document.getElementById("no");
  const ttip = document.getElementById("ttip");

  album_img.src = `thumbnails/albums/${album[v].album_name}.jpg`;
  album_nme.innerText = album[v].album_name;
  album_artist.innerText = album[v].artist;
  album_infoss.innerHTML = `${album[v].year} ‧ ${album[v].genre} ‧ ${album[v].tracks} +songs ‧ ${album[v].length}`;
  album_nos.innerText = album[v].no;
  ttip.innerText = album[v].album_name;

}