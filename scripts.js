
 const daysEl=document.getElementById('days');
 const hoursEl=document.getElementById('hour');
 const minsEl=document.getElementById('min');
 const secondsEl=document.getElementById('sec');
  

 function countdown (){
      const newbirthdayDate=new Date("26 May 2022");
      const currentDate=new Date();
      const totalSeconds=(newbirthdayDate-currentDate)/
      1000;
      const days=Math.floor(totalSeconds/3600/24);
      const hours=Math.floor(totalSeconds/3600)%24;
      const mins=Math.floor(totalSeconds/60)%60;
      const seconds=Math.floor(totalSeconds)%60;
      daysEl.innerHTML=days;
      hoursEl.innerHTML=hours;
                            
      minsEl.innerHTML=mins;
      secondsEl.innerHTML=seconds;
// initial cal1
 }
  countdown ();
 setInterval(countdown, 1000);