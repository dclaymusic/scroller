
    //TILE-BASED VERSION: divide X and Y by tileW/tileH if needed, then multiply by tileW/tileH at "draw rect" function
    //PIXEL-BASED VERSION: x and y are not divided by tileW/tileH, and "draw rect" function has no tileW/tileH multiplier
    function clickHandler(event) 
    {
        const rect = document.getElementById('game').getBoundingClientRect();
        var x = Math.floor(event.clientX - rect.left) * scale; // divide by a tileW if needed
        var y = Math.floor(event.clientY - rect.top) * scale; // divide by a tileH if needed
        if(!hasStarted)
        { 
            startGame();
            initSnd();

        }
        // else if(!allBuffersLoaded)
        // { }
        // else
        // {
        //     isScrolling = true;
        if(hasStarted)
        {
            soundOn = !soundOn;
            if(soundOn)
            {
                loadBg();
                playBg();
            }
            else
            {
                bgBuff = null;
            }
        } 
        // }
    }

    function getHoverOver(event) {
        const rect = document.getElementById('game').getBoundingClientRect();
        // var x = Math.floor(event.clientX - rect.left) * scale;
        // var y = Math.floor(event.clientY - rect.top) * scale;
        var x = Math.floor(((event.clientX - rect.left) * scale) / (tileW));
        var y = Math.floor(((event.clientY - rect.top) * scale) / (tileH));
        if(x < 0) { x = 0; }
        if(x > (width / tileW) - 1) { x = (width / tileW) - 1; }
        if(y < 0) { y = 0; }
        if(y > (height / tileH) - 1) { y = (height / tileH) - 1; }
        return([x,y]);
    }