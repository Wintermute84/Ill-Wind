export function renderPopups(){
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js-modal-links').forEach((modalLink)=>{
      modalLink.addEventListener('click',()=>{
        const modalType = modalLink.dataset.modalId;
        let modalHtml = ``;
        if(modalType === '1'){
          console.log('dwwwww');
          modalHtml+=`
          <div class="modal-inner">
            <div class="heading">Help</div>
            <div class="text">
              <p>Hey there!</p>
              <p>This is a rough guide on how to use Ill Wind. If you&#8217;re new to the 1001 Albums Challenge or if you don&#8217;t know which category of albums to choose, this guide is for you.</p>
              <p>Ill Wind is a random album generator that lets you pick a random album to listen to. You can choose albums from three categories. Here&#8217;s a breakdown on what category you should choose depending on your familiarity with these records.</p>
              <p>1.	Classic 1001 : This category contains 1001 albums as listed in the 2021 edition of Robert Dimery&#8217;s reference book &#8216;1001 Albums You Must Hear Before You Die&#8217;. This list is quite comprehensive and contains some of the most influential, acclaimed popular records ever made between the 1950s and the 2010s. So, if you&#8217;re someone who hasn&#8217;t listened to any of those albums before, this list is for you.</p>
              <p>2.	Creators 1001 : This category contains 1001 albums handpicked by myself. This list is for people who have listened to a lot of the material in the Classic 1001 and wants something else entirely. This list does not contain any of the artists or albums from the Classic 1001 lineup. This list also has a 1 album per artist rule. However, this list is not as comprehensive as the classic 1001 and will adhere to my tastes and biases.</p>
              <p>3.	Essentials : This category contains a rotating list of 30 albums based on a particular genre/list that will change every month. This month, I&#8217;ve chosen 30 essential Ambient Albums. This list is mostly beginner friendly and will contain albums that are easy and fun to get into and will hopefully introduce listeners to an entirely new genre of music. </p>
              <p>Finally, the 1001 albums challenge is a challenge where you listen to a random album every day for 1001 days. Pretty self-explanatory. </p>
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
              <p>I don&#8217;t really know what to say. I started Ill Wind somewhere around July this year. It&#8217;s taken up a lot of my time and It&#8217;s been a lot of fun. When I started doing this, I couldn&#8217;t really find any new music at all. Not that there wasn&#8217;t anything good being released at the time. In fact, it&#8217;s been a stellar year for music so far. I&#8217;ve just been so tired all the time that finding and listening to new music just becomes an afterthought most of the time. This really helped rekindle a lot of my love for music again.</p>
              <p>This project mainly uses vanilla HTML, CSS and JavaScript. If you want to learn those, there are plenty of videos online. I would highly recommend SuperSimpleDev. I think I&#8217;ve used the Lastfm API for the album info and album art.</p>
              <p>Follow me on these links :</p>
              <p><a target="_blank" href="https://open.spotify.com/user/4l4nenz1j43jftqkh87k41ljm?si=47741f2ba5b443b1">Spotify</a></p>
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
  
  






