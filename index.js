setInterval(() => {
    dt= new Date();
    htime= dt.getHours();
    mtime= dt.getMinutes();
    stime= dt.getSeconds();
    hrot= 30*htime + mtime/2;
    mrot= 6*mtime;
    srot= 6*stime;

    hours.style.transform = `rotate(${hrot}deg)`;
    minutes.style.transform = `rotate(${mrot}deg)`;
    seconds.style.transform = `rotate(${srot}deg)`;
},1000);