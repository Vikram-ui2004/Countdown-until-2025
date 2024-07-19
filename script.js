const targettime=new Date('2025-01-01T00:00:00');
const count=document.querySelector(".timer");


updatecountdown=()=>{

    const currenttime=new Date;
    const  timediff=targettime-currenttime;

    const days=Math.floor(timediff/(1000*60*60*24));

    const hours=Math.floor((timediff%(1000*60*60*24))/(1000*60*60));

    const mins=Math.floor((timediff%(1000*60*60))/(1000*60));

    const sec=Math.floor((timediff%(1000*60))/(1000));
   
    count.textContent=`${days}d ${hours}h ${mins}m ${sec}s`;

    setTimeout(updatecountdown,1000);

}

updatecountdown();