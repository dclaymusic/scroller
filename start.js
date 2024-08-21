/* All functions that involve CSS and handling menu items */

function startGame() { 

    // loadsnd01();
    // playsnd01();

    // let infoimg = document.getElementById('infoimg');
    // infoimg.style.visibility = 'visible';

    let loadscreen = document.querySelector('#loadscreen');
    loadscreen.style.visibility = 'hidden';

    //masterGain.gain.linearRampToValueAtTime(-0.001, (audioCtx.currentTime)); 
    //setTimeout(() => { masterGain.gain.linearRampToValueAtTime(1, (audioCtx.currentTime) + 5.0); }, 5000);

    hasStarted = true;
    isScrolling = true;
    initTimer();
    initClock();


}


function loadbarHandler()
{

    let loadbarloading = document.getElementById('loadbarloading');
    loadbarloading.style.width = (checkBuffers()/numberOfSounds) * 200 + 'px';
    //before start
    if(checkBuffers() == numberOfSounds)
    {
        allBuffersLoaded = true;
        let loadtext = document.getElementById('loadtext');
        loadtext.innerHTML = '(click anywhere to begin.)';
        loadtext.style.left = '212px';
        let loadbarloading = document.getElementById('loadbarloading');
        loadbarloading.style.backgroundColor = 'rgba(0,255,100,1)';
        //210
    }
    else 
    { } //opening state;
}

//check buffers
function checkBuffers()
{
    let buffCount = 0;
    if( snd01buff != null) { buffCount++; }
    return buffCount;
}

function frameRate()
{
    ////////////frame rate check
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "start";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}

function toggleInfo()
{ 
    if(hasStarted)
    {
        infoWindow = !infoWindow; 

        let loadscreen = document.getElementById('loadscreen');
        if(loadscreen.style.visibility == 'visible')
        { loadscreen.style.visibility = 'hidden'; 
            document.getElementById('infotext').style.visibility = 'hidden';
        }
        else 
        { 
            document.getElementById('loadbarfull').style.visibility = 'hidden';
            document.getElementById('loadbarloading').style.visibility = 'hidden';
            document.getElementById('loadtext').style.visibility = 'hidden';
            loadscreen.style.visibility = 'visible'; 
            document.getElementById('infotext').style.visibility = 'visible';
        }
    }
}