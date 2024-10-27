export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
  let option = JSON.parse(localStorage.getItem('option'))||{
    id:"3",
    type:'ambient',
    min:0,
    max:10,
    list:[{no:1,artist:'Brian Eno',album_name:'Music for Airports',year:1978,genre:'Ambient',length:'1 hrs',tracks:4,link:'https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa?si=db9bc6b8b9b945b0',review:`<p><strong>Music for Airports</strong> is the first album in Brian Eno's pioneering Ambient series, released in 1978. This groundbreaking work is considered one of the first albums to define the ambient genre, focusing on creating a soothing and contemplative atmosphere rather than traditional melodies and rhythms.</p>
      <p>The album consists of four tracks, each designed to be looped and layered, creating a continuous, calming soundscape. Eno's use of minimalism, soft piano notes, and subtle synthesizer tones in pieces like "1/1" and "2/1" contributes to the serene and meditative quality of the music.</p>
      <p><em>Music for Airports</em> was conceived to transform the typically stressful airport environment into a more peaceful and introspective space. It has since become a landmark in ambient music, influencing countless artists and redefining the possibilities of sound in modern music.</p>`
  },
  
  {no:4,artist:'Biosphere',album_name:'Substrata',year:1997,genre:'Ambient',length:'1 hrs',tracks:10,link:'https://open.spotify.com/album/5QIf4hNIAksV1uMCXHVkAZ?si=1158e2a896174164',review:`<p><strong>Substrata</strong> is the third studio album by Norwegian electronic musician Biosphere (Geir Jenssen), released in 1997. The album is widely regarded as one of the finest examples of ambient music, known for its cold, atmospheric soundscapes that evoke the stark beauty of Arctic landscapes.</p>
      <p>Tracks like "Kobresia" and "Poa Alpina" blend environmental field recordings with subtle melodies and minimalist arrangements, creating a deeply immersive listening experience. The album's use of natural sounds, such as flowing water and distant echoes, enhances its organic and expansive feel.</p>
      <p><em>Substrata</em> has been praised for its emotional depth and its ability to transport listeners to serene, isolated environments. It remains a seminal work in the ambient genre, influencing a generation of artists with its masterful use of space and texture.</p>`
  },
  
  {no:8,artist:'Tim Hecker',album_name:'Harmony In Ultraviolet',year:2006,genre:'Ambient',length:'50 mins',tracks:15,link:'https://open.spotify.com/album/1U5x6wQtMJtbwM3NZRSvKT?si=a3fa34dda4d64bb5',review:`<p><strong>Harmony in Ultraviolet</strong> is the fourth studio album by Canadian electronic musician Tim Hecker, released in 2006. The album is known for its dense, layered soundscapes that blend noise, ambient, and drone music, creating a deeply textured and immersive auditory experience.</p>
      <p>Tracks like "Chimeras" and "Spring Heeled Jack Flies Tonight" showcase Hecker's ability to craft complex sonic environments, where distorted tones and shimmering harmonies coexist. The album's abstract and evolving compositions offer a meditative and sometimes unsettling journey through sound.</p>
      <p><em>Harmony in Ultraviolet</em> is often hailed as one of Hecker's most accomplished works, praised for its innovative approach to sound design and its emotional resonance. The album has solidified Hecker's reputation as a leading figure in the experimental and ambient music scenes.</p>`
  },
  
  {no:6,artist:'Steve Roach',album_name:'Structures From Silence',year:1984,genre:'Space Ambient',length:'58 mins',tracks:3,link:'https://open.spotify.com/album/46AY6JPcDEFWYF8YcYOQWh?si=zZsXwPLCRA6WZI6DpFbc2g',review:`<p><strong>Structures from Silence</strong> is the third studio album by American ambient musician Steve Roach, released in 1984. The album is considered a classic in the ambient genre, known for its serene and meditative soundscapes that have been influential in the development of ambient and new age music.</p>
      <p>The title track, "Structures from Silence," is a 30-minute piece that features slowly evolving synth textures and gentle, hypnotic melodies. The album's minimalist approach and its focus on creating a peaceful, reflective atmosphere have made it a favorite among listeners seeking relaxation and introspection.</p>
      <p><em>Structures from Silence</em> is often praised for its timeless quality and its ability to create a sense of stillness and calm. It remains one of Steve Roach's most celebrated works and a cornerstone of ambient music.</p> `
  },
  
  {no:9,artist:'Tangerine Dream',album_name:'Phaedra',year:1974,genre:'Ambient',length:'37 mins',tracks:4,link:'https://open.spotify.com/album/6wugThEUTAa6BdI2hsqm5n?si=daf20d9a55844c9f',review:`<p><strong>Phaedra</strong> is the fifth studio album by the German electronic music group Tangerine Dream, released in 1974. The album is a landmark in the development of electronic music, known for its pioneering use of synthesizers and its exploration of cosmic and otherworldly themes.</p>
      <p>Featuring the epic title track "Phaedra," the album blends sequenced synthesizer patterns, ambient textures, and experimental sound design to create a deeply atmospheric and immersive experience. The album's use of Moog synthesizers and Mellotrons was groundbreaking at the time and has influenced countless electronic musicians.</p>
      <p><em>Phaedra</em> was a commercial and critical success, establishing Tangerine Dream as a major force in the world of electronic music. It remains one of their most iconic albums and a seminal work in the space music and ambient genres.</p>`
  },
  
  {no:2,artist:'Stars of the Lid',album_name:'And Their Refinement of the Decline',year:2007,genre:'Drone',length:'2 hrs',tracks:18,link:'https://open.spotify.com/album/6cHPEbPryLpH5VX5Eb1Vvo?si=4a737b5acbb54419',review:`<p><strong>Stars of the Lid and Their Refinement of the Decline</strong> is the seventh studio album by the American ambient music duo Stars of the Lid, released in 2007. The album is a double-disc set that is considered one of the duo's most accomplished works, known for its slow, expansive compositions that blend drone, classical, and ambient elements.</p>
      <p>Tracks like "Dopamine Clouds Over Craven Cottage" and "December Hunting for Vegetarian Fuckface" feature lush orchestral arrangements, minimalistic drones, and delicate soundscapes that unfold gradually over long durations. The album's use of strings, horns, and processed sounds creates a deeply immersive and contemplative atmosphere.</p>
      <p><em>Stars of the Lid and Their Refinement of the Decline</em> is often hailed as a masterpiece of ambient music, praised for its emotional depth and its ability to evoke a sense of timelessness and tranquility. It remains a defining album in the ambient genre and a favorite among fans of deeply meditative music.</p>`
  },
  
  {no:3,artist:'Grouper',album_name:'Alien Observer',year:2011,genre:'Ambient',length:'40 mins',tracks:6,link:'https://open.spotify.com/album/4Z1BFX1oBckY8bhGEWMYmi?si=sYbHQjOoRNikJ8sfTvi4og',review:`<p><strong>Alien Observer</strong> is one of two albums released in 2011 as part of Grouper's double album project A I A. Created by musician Liz Harris, Grouper's sound on this album is characterized by ethereal, ambient compositions that evoke a sense of isolation and introspection.</p>
      <p>The album features haunting tracks like "Moon is Sharp" and "Alien Observer," which blend Harris's whispery vocals with minimalistic instrumentation and atmospheric drones. The music on <em>Alien Observer</em> is both intimate and otherworldly, creating a deeply immersive listening experience.</p>
      <p><em>Alien Observer</em> has been praised for its emotional depth and has solidified Grouper's reputation as a key figure in the ambient and experimental music scenes. The album continues to resonate with listeners who appreciate its haunting beauty and meditative qualities.</p>`
  },
  {no:5,artist:'GAS',album_name:'Pop',year:2000,genre:'Ambient',length:'1 hrs 7 mins',tracks:7,link:'https://open.spotify.com/album/32Nl49izVyngH22kD1lrkk?si=vAwKJw-cQfeZdmePxmDwGQ',review:`<p><strong>Pop</strong> is the fourth studio album by German electronic music project GAS, led by Wolfgang Voigt, released in 2000. The album is considered a masterpiece of ambient techno, known for its lush, hypnotic soundscapes that blend classical music samples with subtle, pulsating beats.</p>
      <p>Tracks like "Pop 1" and "Pop 4" feature looping orchestral fragments, layered with deep bass and soft rhythms, creating an immersive, dream-like experience. The album's seamless flow and richly textured sound evoke a sense of being enveloped in a dense forest, reflecting Voigt's connection to the natural world and his unique approach to electronic music.</p>
      <p><em>Pop</em> has been widely acclaimed for its innovative fusion of ambient and techno, and it remains one of the most influential albums in the genre. Its ability to transport listeners to a different realm through its subtle and intricate compositions has made it a timeless classic.</p>`
  },
  
  {no:7,artist:'William Basinski',album_name:'The Disintegration Loops',year:2002,genre:'Ambient',length:'5 hrs',tracks:4,link:'https://open.spotify.com/album/5fmPy3XmYD0BJKEr86a3Cu?si=11283db3042f4cfe',review:`<p><strong>The Disintegration Tapes</strong> is a notable work by American composer William Basinski, released in 2002. The album is a collection of tape loops that have decayed over time, creating a unique, poignant exploration of the themes of memory, time, and loss. It is part of Basinski's acclaimed *Disintegration Loops* series.</p>
      <p>The work is characterized by its hauntingly beautiful soundscapes, where the gradual deterioration of magnetic tape creates a mesmerizing, ambient experience. The loops, initially recorded in the 1980s, were rediscovered and played back in their disintegrated state, resulting in an ethereal and reflective sonic journey. The tracks evoke a sense of nostalgia and decay, reflecting on the transient nature of time and memory.</p>
      <p><em>The Disintegration Tapes</em> has been praised for its innovative use of tape decay and its ability to evoke deep emotional responses. It stands as a significant contribution to the ambient and experimental music genres, highlighting Basinski's ability to transform physical decay into a profound auditory experience.</p>`
  },
  
  {no:10,artist:'Fripp & Eno',album_name:'Evening Star',year:1975,genre:'Ambient',length:'45 mins',tracks:5,link:'https://open.spotify.com/album/1nVnbkq96iZzBMp57Xzx1V?si=94871fd844744269',review:`<p><strong>Evening Star</strong> is a collaborative album by guitarist Robert Fripp and ambient pioneer Brian Eno, released in 1975. This album is known for its fusion of Fripp's intricate guitar work with Eno's ambient soundscapes, creating a unique and innovative approach to ambient and experimental music.</p>
      <p>The album features a series of instrumental tracks that explore the interplay between Fripp's electric guitar and Eno's ambient textures. Tracks like "Evening Star" and "Wind on Water" showcase their use of Fripp's distinctive "Frippertronics" guitar loops combined with Eno's atmospheric effects, resulting in a mesmerizing and meditative sound.</p>
      <p><em>Evening Star</em> is praised for its pioneering approach to ambient music, combining intricate guitar work with lush, evolving soundscapes. The album stands as a significant contribution to both artists' discographies and remains a classic example of ambient and experimental music from the 1970s.</p>`
  },
  ]
  };
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

    }