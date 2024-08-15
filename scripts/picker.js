export const options = [{
  id:"1",
  type:'classic',
},{id:"2",
  type:'creator'
},{
  id:"3",
  type:'ambient'
}];

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



export function renderAlbum(){

    console.log(localStorage.getItem('v'));
       function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      
      let intervalId;
      function autoPlay(){
          intervalId = setInterval(function(){
            album(randomNumber(0,22));}
            ,10);
        }
      const v = localStorage.getItem('v'); 
      autoPlay();
      setTimeout(function(){
        clearInterval(intervalId);
        album(v);
      },1000);
      
      
      
      function album(v){
        const album = [{no:120,artist:'Weyes Blood',album_name:'Titanic Rising',year:2019,genre:'Chamber Pop',length:'42 mins',tracks:10,review:`<p>Titanic Rising is the fourth studio album by American singer-songwriter and musician Weyes Blood, released on April 5, 2019 by Sub Pop.</p><p>Produced by the artist along with Jonathan Rado, it is influenced by 1970s FM radio. Its lyrical themes address romantic pursuits, climate change, and references to the Titanic.</p>
          <p>The album is named after the RMS Titanic and the 1997 film based on the ship's sinking, which had a profound impact on Mering when she was younger.</p>`}
          ,
        {no:420,artist:'Joy Division',album_name:'Unknown Pleasures',year:1979,genre:'Post Punk',length:'40 mins',tracks:10,review:`<p>Unknown Pleasures is the debut studio album by the English rock band Joy Division, released on 15 June 1979, by Factory Records. The album was recorded and mixed over three successive weekends at Stockport's Strawberry Studios in April 1979, with producer Martin Hannett contributing a number of unconventional recording techniques to the group's sound.</p>
          <p>The cover artwork was designed by artist Peter Saville, using a data plot of signals from a radio pulsar. It is the only Joy Division album released during lead singer Ian Curtis's lifetime</p>
          <p>Factory Records did not release any singles from Unknown Pleasures, and the album did not chart despite the relative success of the group's follow-up single, "Transmission". It has since received sustained critical acclaim as an influential post-punk album, and has been named as one of the best albums of all time by publications such as NME, AllMusic, Select, Rolling Stone, and Spin.</p>`}
          ,
        {no:10,artist:'Radiohead',album_name:'Kid A',year:2000,genre:'Art Rock',length:'47 mins',tracks:10,review:`<p>Kid A is the fourth studio album by the English rock band Radiohead, released on 2 October 2000 by Parlophone. It was recorded with their producer, Nigel Godrich, in Paris, Copenhagen, Gloucestershire and Oxfordshire.</p>
          <p>Departing from their earlier sound, Radiohead incorporated influences from electronic music, krautrock, jazz and 20th-century classical music, with a wider range of instruments and effects. The singer, Thom Yorke, wrote impersonal and abstract lyrics, cutting up phrases and assembling them at random.</p>
          <p>In a departure from industry practice, Radiohead released no singles and conducted few interviews and photoshoots. Instead, they released short animations and became one of the first major acts to use the internet for promotion.</p>`}
          ,
        {no:984,artist:'Sonic Youth',album_name:'Goo',year:1990,genre:'Noise Rock',length:'49 mins',tracks:11,review:`<p>Goo is the sixth full-length studio album by American alternative rock band Sonic Youth, released on June 26, 1990, by DGC Records.</p>
          <p>For this album, the band sought to expand upon its trademark alternating guitar arrangements and the layered sound of their previous album Daydream Nation (1988) with songwriting that was more topical than past works, exploring themes of female empowerment and pop culture.</p>
          <p>Coming off the success of Daydream Nation, Nick Sansano returned to engineer Goo, but veteran producer Ron Saint Germain was chosen by Sonic Youth to finish mixing the album following Sansano's dismissal.</p>`}
          ,
        {no:564,artist:'Slowdive',album_name:'Souvlaki',year:1993,genre:'Shoegaze',length:'40 mins',tracks:10,review:`<p>Souvlaki is the second studio album by the English rock band Slowdive. It was recorded in 1992, and released on 1 June 1993 by Creation Records.</p>
          <p>Prior to the writing of Souvlaki, Slowdive co-vocalists and guitarists Rachel Goswell and Neil Halstead had ended their relationship and Halstead began to spend more time writing songs alone, a process that had been completed by the full band in the past</p>
          <p>On its initial release, Souvlaki peaked at number 51 on the UK Albums Chart and was greeted with tepid reviews from critics. It has since received retrospective critical acclaim and has been hailed as a classic of the shoegaze genre.</p>`}
          ,
        {no:890,artist:'Black Country, New Road',album_name:'Ants From Up There',year:2022,genre:'Chamber Pop',length:'58 mins',tracks:10,review:`<p><strong>Ants From Up There</strong> is the second studio album by the British band Black Country, New Road (BCNR), released on February 4, 2022. The album received widespread critical acclaim for its unique blend of post-rock, chamber pop, and experimental rock elements, marking a significant evolution from their debut album.</p>
          <p>The album explores themes of love, loss, and emotional turbulence, with poetic and evocative lyrics. Frontman Isaac Wood's intense and heartfelt vocals, combined with the band's intricate instrumentation, create a deeply immersive listening experience.</p>
          <p>Notably, <em>Ants From Up There</em> was the last album to feature Isaac Wood as the lead vocalist before his departure from the band. The album's success has cemented BCNR as one of the most innovative and exciting bands in the contemporary music scene.</p>
        `}
          ,
        {no:154,artist:'MF Doom',album_name:'Mm..Food',year:2004,genre:'Hip Hop',length:'48 mins',tracks:15,review:`<p><strong>MM..FOOD</strong> is the fifth studio album by the iconic rapper MF DOOM, released on November 16, 2004. The album is a concept project centered around food-related themes, showcasing DOOM's signature wordplay, intricate rhymes, and unique sampling techniques.</p>

<p>Tracks like "Beef Rapp," "Rapp Snitch Knishes," and "Potholderz" creatively weave culinary references with sharp social commentary, making the album both humorous and thought-provoking. The production, primarily handled by DOOM himself, is filled with jazz, soul, and old-school hip-hop influences.</p>

<p>MM..FOOD is often celebrated as one of MF DOOM's best works, solidifying his reputation as one of hip-hop's most innovative and enigmatic figures. The album's quirky and offbeat style has earned it a dedicated following and a place in the pantheon of underground hip-hop classics.</p>
`}
          ,
        {no:752,artist:'Beach House',album_name:'7',year:2018,genre:'Dream Pop',length:'47 mins',tracks:11,review:`<p><strong>7</strong> is the seventh studio album by the American dream pop duo Beach House, released on May 11, 2018. The album was met with critical acclaim, praised for its lush soundscapes, rich textures, and the duo's ability to evolve their signature dreamy style while exploring new sonic territories.</p>

<p>With songs like "Dark Spring," "Dive," and "Lemon Glow," <em>7</em> showcases Beach House's exploration of darker themes and more experimental production techniques. The album was co-produced by Sonic Boom (Peter Kember), who brought a fresh perspective to their sound, blending swirling synths, reverb-heavy guitars, and ethereal vocals into a cohesive and mesmerizing experience.</p>

<p><em>7</em> is considered one of Beach House's most ambitious and mature works, solidifying their status as one of the leading acts in the dream pop genre. The album's intricate layers and emotional depth continue to captivate listeners, making it a standout release in their discography.</p>
`}
        ,
        {no:120,artist:'Deafheaven',album_name:'Sunbather',year:2013,genre:'Blackgaze',length:'59 mins',tracks:7,review:`<p><strong>Sunbather</strong> is the second studio album by American blackgaze band Deafheaven, released on June 11, 2013. The album is a groundbreaking fusion of black metal, shoegaze, and post-rock, creating an intense and emotionally charged sound that has captivated audiences across various genres.</p>

<p>Thematically, <em>Sunbather</em> explores feelings of longing, existential despair, and fleeting moments of beauty, all conveyed through George Clarke's harrowing vocals and the band's dynamic instrumentation. The album features epic tracks like "Dream House" and "Vertigo," which showcase the band's ability to blend ferocity with melody.</p>

<p>Widely regarded as a modern classic, <em>Sunbather</em> received critical acclaim for its innovative approach and has since become a seminal album in both the black metal and shoegaze genres. Its striking cover, featuring a vibrant pink gradient, has also become iconic in its own right.</p>
`},

        {no:124,artist:'Aphex Twin',album_name:'Drukqs',year:2001,genre:'IDM',length:'1hr 40 mins',tracks:30,review:`<p><strong>Drukqs</strong> is the fifth studio album by the British electronic artist Aphex Twin, released on October 22, 2001. The album is a sprawling double-disc collection that showcases Richard D. James' versatility, ranging from intricate and abrasive breakbeats to serene piano compositions.</p>

<p><em>Drukqs</em> features some of Aphex Twin's most complex and experimental work, with tracks like "Vordhosbn" and "Mt Saint Michel + Saint Michaels Mount" pushing the boundaries of IDM (Intelligent Dance Music). The album also includes more minimalist pieces like "Avril 14th," a gentle piano melody that has since gained widespread recognition.</p>

<p>Despite its initially polarizing reception, <em>Drukqs</em> has grown in stature over the years, appreciated for its depth and the way it encapsulates the diverse styles that Aphex Twin is known for. It remains a significant entry in his discography, influencing countless electronic artists who followed.</p>
`},
          
        {no:504,artist:'Massive Attack',album_name:'Mezzanine',year:1998,genre:'Trip Hop',length:'1hr 3 mins',tracks:11,review:`<p><strong>Mezzanine</strong> is the third studio album by British trip-hop group Massive Attack, released on April 20, 1998. The album marked a departure from their previous sound, incorporating darker, more experimental elements and drawing on influences from genres such as post-punk, dub, and electronica.</p>

<p>Featuring iconic tracks like "Teardrop," "Angel," and "Inertia Creeps," <em>Mezzanine</em> is known for its brooding atmosphere, dense production, and haunting vocals. The album's use of samples, layered textures, and heavy basslines created a sound that was both groundbreaking and influential, setting a new standard for trip-hop and electronic music.</p>

<p><em>Mezzanine</em> is often regarded as Massive Attack's magnum opus and one of the greatest albums of the 1990s. Its innovative sound continues to resonate with listeners and has left a lasting impact on the music industry.</p>
`}
          ,
        {no:104,artist:'Drive Like Jehu',album_name:'Yank Crime',year:1994,genre:'Post Hardcore',length:'1hr 9 mins',tracks:12,review:`<p><strong>Yank Crime</strong> is the second and final studio album by American post-hardcore band Drive Like Jehu, released in 1994. The album is celebrated for its intense energy, complex guitar work, and raw, unpolished sound, which helped define the post-hardcore genre.</p>

<p><em>Yank Crime</em> features tracks like "Here Come the Rome Plows" and "Luau," which showcase the band's aggressive style and intricate musicianship. The album's use of dissonance, unconventional song structures, and dynamic shifts set it apart from other releases of the time.</p>

<p>Though initially overlooked, <em>Yank Crime</em> has since gained a cult following and is considered a seminal release in the post-hardcore genre. Its influence can be heard in the work of many bands that followed in the punk and alternative scenes.</p>
`}
          ,
        {no:114,artist:'Grouper',album_name:'Alien Observer',year:2011,genre:'Ambient',length:'40 mins',tracks:6,review:`<p><strong>Alien Observer</strong> is one of two albums released in 2011 as part of Grouper's double album project *A I A*. Created by musician Liz Harris, Grouper's sound on this album is characterized by ethereal, ambient compositions that evoke a sense of isolation and introspection.</p>

<p>The album features haunting tracks like "Moon is Sharp" and "Alien Observer," which blend Harris's whispery vocals with minimalistic instrumentation and atmospheric drones. The music on <em>Alien Observer</em> is both intimate and otherworldly, creating a deeply immersive listening experience.</p>

<p><em>Alien Observer</em> has been praised for its emotional depth and has solidified Grouper's reputation as a key figure in the ambient and experimental music scenes. The album continues to resonate with listeners who appreciate its haunting beauty and meditative qualities.</p>
`}
          ,
        {no:224,artist:'Wilco',album_name:'Yankee Hotel Foxtrot',year:2002,genre:'Contemporary Folk',length:'53 mins',tracks:11,review:`<p><strong>Yankee Hotel Foxtrot</strong> is the fourth studio album by American rock band Wilco, released on April 23, 2002. The album is known for its blend of alternative rock, experimental sounds, and Americana, creating a distinct and innovative sound that has since become iconic.</p>

<p>Featuring tracks like "I Am Trying to Break Your Heart," "Jesus, Etc.," and "Heavy Metal Drummer," <em>Yankee Hotel Foxtrot</em> explores themes of disillusionment, love, and change. The album's production, which includes elements of noise, electronic effects, and unconventional arrangements, was groundbreaking for its time.</p>

<p>Despite its challenging creation and initial label rejection, <em>Yankee Hotel Foxtrot</em> was met with critical acclaim and has since been hailed as one of the greatest albums of the 2000s. Its influence on alternative and indie music is profound, and it remains a beloved classic in Wilco's discography.</p>
`}
          ,
        {no:624,artist:'Kate Bush',album_name:'The Kick Inside',year:1978,genre:'Dream Pop',length:'43 mins',tracks:13,review:`<p><strong>The Kick Inside</strong> is the debut studio album by British singer-songwriter Kate Bush, released on February 17, 1978. The album, which was written by Bush when she was just a teenager, showcases her unique voice, poetic lyrics, and eclectic blend of rock, art pop, and folk influences.</p>

<p>The album features the iconic single "Wuthering Heights," which topped the UK charts and introduced the world to Bush's distinctive style. Other tracks like "The Man with the Child in His Eyes" and "Feel It" highlight her emotional depth and innovative songwriting.</p>

<p><em>The Kick Inside</em> was a critical and commercial success, establishing Kate Bush as one of the most original and influential artists of her time. The album's blend of mysticism, romance, and literary references set the stage for her illustrious career and has left a lasting legacy in the world of music.</p>
`}
          ,
        {no:134,artist:'King Gizzard and The Lizard Wizard',album_name:`I'm in Your Mind Fuzz`,year:2014,genre:'Psychedelic Rock',length:'42 mins',tracks:10,review:`<p><strong>I'm in Your Mind Fuzz</strong> is the fifth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard, released on October 31, 2014. The album is known for its fast-paced, mind-bending sound, featuring a continuous, flowing sequence of songs that blend elements of garage rock, psych, and krautrock.</p>

<p>The album kicks off with a four-track suite—"I'm in Your Mind," "I'm Not in Your Mind," "Cellophane," and "I'm in Your Mind Fuzz"—that seamlessly transitions between songs, creating a hypnotic, driving rhythm. The band's use of microtonal tuning, frenetic guitar riffs, and repetitive grooves makes this album a fan favorite and a key release in their expansive discography.</p>

<p><em>I'm in Your Mind Fuzz</em> is often celebrated for its high energy and relentless pace, encapsulating the band's unique approach to psychedelic rock. It has become a standout album in their catalog, beloved by fans for its immersive and electrifying experience.</p>
`}
          ,
        {no:964,artist:'Natural Snow Buildings',album_name:'Daughters of Darkness',year:2013,genre:'Dark Ambient',length:'7hr 20 mins',tracks:18,review:`<p><strong>Daughters of Darkness</strong> is a limited-edition album by the French experimental duo Natural Snow Buildings, released in 2009. The album is inspired by the 1971 horror film of the same name, and it showcases the band's signature blend of drone, folk, and ambient music, creating a haunting and immersive soundscape.</p>

<p>Featuring lengthy, atmospheric tracks like "Her Face Among the Shadows" and "The Rising Portal," <em>Daughters of Darkness</em> is characterized by its use of dense, layered textures, ethereal melodies, and a sense of cinematic storytelling. The album's minimalist approach, combined with its eerie and mystical atmosphere, makes it a unique and captivating listening experience.</p>

<p>Though released in a very limited quantity, <em>Daughters of Darkness</em> has become a sought-after release among fans of experimental and drone music. The album is often praised for its ability to evoke a sense of otherworldliness and its deep, meditative qualities, solidifying Natural Snow Buildings' reputation as one of the most intriguing acts in the underground music scene.</p>
`}
          ,
        {no:774,artist:'Sigur Ros',album_name:'Ágætis Byrjun',year:1998,genre:'Post Rock',length:'1hr 11 mins',tracks:10,review:`<p><strong>Ágætis Byrjun</strong> is the second studio album by Icelandic post-rock band Sigur Rós, released on June 12, 1999. The album marked the band's breakthrough, introducing their ethereal and expansive sound to a global audience. It's often considered one of the most influential post-rock albums of all time.</p>

<p><em>Ágætis Byrjun</em> features iconic tracks like "Svefn-g-englar" and "Starálfur," characterized by Jónsi's distinctive falsetto vocals, bowed guitar, and lush, orchestral arrangements. The album's dreamy and otherworldly atmosphere, combined with its emotional depth, has captivated listeners and critics alike.</p>

<p>The album's title translates to "A Good Beginning," and it indeed signaled the start of Sigur Rós's rise to international acclaim. <em>Ágætis Byrjun</em> has been lauded for its beauty and innovation, solidifying Sigur Rós's place as one of the most important bands in the post-rock genre.</p>
`}
          ,
        {no:714,artist:'Unwound',album_name:'The Future of What',year:1995,genre:'Post Hardcore',length:'1hr',tracks:17,review:`<p><strong>The Future of What</strong> is the third studio album by American post-hardcore band Unwound, released on April 24, 1995. The album is known for its raw energy, dissonant guitar work, and aggressive yet experimental approach to the post-hardcore genre.</p>

<p>Tracks like "New Energy" and "Demons Sing Love Songs" showcase the band's ability to blend noise, punk, and art rock influences into a cohesive and powerful sound. The album's abrasive textures and complex rhythms set it apart from other releases of the time, making it a significant work in the 90s underground music scene.</p>

<p><em>The Future of What</em> is often regarded as one of Unwound's most essential albums, capturing the band's intensity and willingness to push the boundaries of their genre. It remains a touchstone for fans of post-hardcore and experimental rock.</p>
`}
          ,
        {no:54,artist:'Duster',album_name:'Stratosphere',year:1998,genre:'Slowcore',length:'53 mins',tracks:17,review:`<p><strong>Stratosphere</strong> is the debut studio album by American slowcore band Duster, released on February 24, 1998. The album is a key release in the slowcore and space rock genres, known for its lo-fi production, melancholic atmosphere, and minimalist instrumentation.</p>

<p>Tracks like "Gold Dust" and "Echo, Bravo" feature the band's signature sound: sparse arrangements, reverb-drenched guitars, and distant vocals. The album's introspective mood and subtle dynamics have earned it a dedicated cult following over the years.</p>

<p><em>Stratosphere</em> is often praised for its emotional depth and the way it captures a sense of isolation and quiet beauty. It has become a seminal album in the slowcore genre and continues to influence artists who appreciate its understated yet powerful impact.</p>
`}
          ,
        {no:712,artist:'Destroyer',album_name:'Kaputt',year:2011,genre:'Art Pop',length:'50 mins',tracks:9,review:`<p><strong>Kaputt</strong> is the ninth studio album by Canadian indie rock band Destroyer, released on January 25, 2011. The album marked a stylistic shift for the band, embracing lush, 80s-inspired soft rock and jazz influences, with a focus on smooth production and atmospheric arrangements.</p>

<p>Tracks like "Chinatown" and "Kaputt" feature saxophones, synthesizers, and Dan Bejar's distinctively cryptic lyrics, creating a dreamy, nostalgic sound that has been widely praised. The album's polished yet melancholic tone offers a reflective look at modern life and the complexities of love and loss.</p>

<p><em>Kaputt</em> received widespread critical acclaim upon its release and is considered one of Destroyer's most accomplished works. Its unique blend of genres and thoughtful composition has made it a standout album in the indie music landscape.</p>
`}
          ,
        {no:331,artist:'Björk',album_name:'Post',year:1995,genre:'Art Pop',length:'56 mins',tracks:11,review:`<p><strong>Post</strong> is the second studio album by Icelandic artist Björk, released on June 13, 1995. The album is a diverse and adventurous mix of electronic, pop, trip-hop, and orchestral music, showcasing Björk's eclectic influences and her innovative approach to songwriting and production.</p>

<p>Featuring hits like "Army of Me," "Hyperballad," and "It's Oh So Quiet," <em>Post</em> explores themes of love, independence, and emotional resilience. The album's bold experimentation with different genres and its dynamic arrangements have made it one of Björk's most celebrated works.</p>

<p><em>Post</em> solidified Björk's reputation as a groundbreaking artist in the 90s and has been praised for its creativity, emotional depth, and fearless exploration of new sounds. It remains a defining album in her career and a landmark in contemporary music.</p>
`}

      ];
      const album_img = document.getElementById("artwork");
      const album_nme = document.getElementById("title");
      const album_artist = document.getElementById("artist");
      const album_infoss = document.getElementById("oinfo");
      const album_nos = document.getElementById("no");
      const ttip = document.getElementById("ttip");
      const overview = document.querySelector('.overview');
      album_img.src = `albums/${album[v].album_name}.jpg`;
      album_nme.innerText = album[v].album_name;
      album_artist.innerText = album[v].artist;
      album_infoss.innerText = `${album[v].year} ‧ ${album[v].genre} ‧ ${album[v].tracks} songs ‧ ${album[v].length}`
      album_nos.innerHTML = `${album[v].no}.`;
      ttip.innerText = `${album[v].album_name}`;
      overview.innerHTML = album[v].review;
      }

    }