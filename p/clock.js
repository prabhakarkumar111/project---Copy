setInterval(()=>{
    d = new Date();
    htTime = d.getHours()
    mTime = d.getMinutes()
    sTime = d.getSeconds()
    hRotation = 30*htTime + mTime/2
    mRotation = 6*mTime
    SRotation = 6*sTime

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${SRotation}deg)`
},1000)