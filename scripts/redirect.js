let count = 0;
function opens(word){
  if(word==='home'){
    window.open("http://127.0.0.1:5500/intro-to-html/albumscentered.html", "_self");
  }
  else{
    window.open("http://127.0.0.1:5500/intro-to-html/randomalbum.html", "_self");
  }
}

function illWind(){
  count++;
  if(count===10){
    window.open("https://open.spotify.com/album/6JE7Xs3YJNAHCggVHZNRjR?si=OVvHqhMNS8CfaD1GxFgtfA");
    console.log('illwind');
    count=0;
  }
}



