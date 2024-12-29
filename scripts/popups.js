export function renderPopups(){
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js-modal-links').forEach((modalLink)=>{
      modalLink.addEventListener('click',()=>{
        const modalType = modalLink.dataset.modalId;
        let modalHtml = ``;
        if(modalType === '1'){
          modalHtml+=`
          <div class="modal-inner">
            <div class="heading">Help</div>
            <div class="text">
              <p>Hey there!</p>
              <p>This is a rough guide on how to use Ill Wind. If you&#8217;re new to Ill Wind and don&#8217;t know which category of albums to choose, this guide is for you.</p>
              <p>Ill Wind is a random album generator that lets you pick a random album to listen to. You can choose albums from three categories. Here&#8217;s a breakdown on what category you should choose depending on your familiarity with these records.</p>
              <p>1.	Classic 1001: This category contains 1001 albums as listed in the 2021 edition of Robert Dimery&#8217;s reference book &#8216;1001 Albums You Must Hear Before You Die&#8217;. This list is quite comprehensive and contains some of the most influential, acclaimed and popular  albums ever made between the 1950s and the 2010s. So, if you&#8217;re someone who hasn&#8217;t listened to those albums before, this list is for you!</p>
              <p>2.	Creators 1001: This category contains 1001 albums handpicked by myself. This list does not contain any of the records/artists from the classic 1001 lineup. Most of the albums in this list are relatively new-ish. So if you're looking for something that's a bit more recent, this list is for you!</p>
              <p>3.	Essentials: This category contains a rotating list of 60 albums based on a particular genre/list that will hopefully change every month. This month, I&#8217;ve chosen 60 essential Ambient Albums. This list is mostly beginner friendly and will contain albums that are easy to get into and will hopefully introduce listeners to an entirely new genre of music. </p>
              <p>That&#8217;s about it really. So, pick a category and enjoy your random album of the day! Happy Listening.</p>
            </div>
            <button class="close-button js-modal-close-button" id="closeModal1">Close</button>
          </div>`
        }
        else{
          modalHtml+=`
          <div class="modal-inner">
            <div class="heading">About</div>
            <div class="text">
              <p>Ill Wind started out as a stupid idea somewhere around July of this year (2024), as a way to learn web dev and it kind of ballooned from there. I started doing this because I was suffering from listener fatigue and wanted a fun way to discover new music. It&#8217;s taken up a lot of my time and it&#8217;s been a lot of fun. </p>
              <p>This project mainly uses vanilla HTML, CSS and JavaScript. If you want to learn those, there are plenty of videos online. I would highly recommend SuperSimpleDev. I think I&#8217;ve used the Spotify API for the album info and art.</p>
              <p>You can find me here (sometimes):</p>
              <p><a target="_blank" href="https://www.last.fm/user/Baked_Potatoes">Lastfm</a></p>
              <p><a target="_blank" href="https://rateyourmusic.com/~PTA">RYM</a></p>
              <p><a target="_blank" href="https://boxd.it/7Cfdp">Letterboxd</a></p>
            </div>
            <button class="close-button js-modal-close-button" id="closeModal2">Close</button>
          </div>`
        }
      document.querySelector('.modal').innerHTML=modalHtml;
      document.querySelector('.modal').classList.add('open');
      document.querySelector('.js-modal-close-button').addEventListener('click',()=>{
        document.querySelector('.modal').classList.remove('open');
      });
      });   
    });
});}
  
  






