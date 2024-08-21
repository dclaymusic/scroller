function Note(tile, x, y, n)
{
    this.height = y;
    this.distance = x;
    this.tile = tile;
    // this.radius = randomInt(30)+30;
    if(n == 15)
    {
        this.isLast = true;
    }
    else { this.isLast = false; }
	this.pos = [
        viewport.screen[0] + this.distance,
        (viewport.screen[1]*(tile/3))
    ];
    this.speed = currentSpeed;

    
}

Note.prototype.move = function()
{
    this.pos[0] -= this.speed;
};

function initTimer()
{ 
    if(isScrolling)
    {
        writeNewPhrases();
        timer = setInterval(metronome, tempo);
    }
    else
    {
        clearInterval(timer);
    }
}

function metronome()
{
    let barW = viewport.screen[0]*0.2;
    let bumperW = viewport.screen[0]*0.05;

    for(let n = 0; n < currentNotes.length; n++)
    {
        let radius = currentNotes[n].radius;

        if(currentNotes[n].pos[0] <= barW + bumperW && currentNotes[n].pos[0] >= barW + (bumperW/2) )
        {
            alpha[currentNotes[n].tile] = 0.9;
            currentNotes[n].move();
        }
        else if(currentNotes[n].isLast == true && currentNotes[n].pos[0] <= viewport.screen[0]-(offset*8))
        {
            writeNewPhrases(currentNotes[n].tile);
        }
        else
        {
            currentNotes[n].move();
        }
    }
}



function writeNewPhrases(tile)
{
    //first time
    if(firstPlay)
    {
        var sizes = [1,30,160]
        //create a phrase
        let heights = [
            
            [sizes[randomInt(sizes.length-1)],sizes[randomInt(sizes.length-1)],sizes[randomInt(sizes.length-1)]],
            [sizes[randomInt(sizes.length-1)],sizes[randomInt(sizes.length-1)],sizes[randomInt(sizes.length-1)]],
            [sizes[randomInt(sizes.length-1)],sizes[randomInt(sizes.length-1)],sizes[randomInt(sizes.length-1)]]

        ];
        let distance = [
            [randomInt(3), randomInt(3), randomInt(3), randomInt(3)],
            [randomInt(3), randomInt(3), randomInt(3), randomInt(3)],
            [randomInt(3), randomInt(3), randomInt(3), randomInt(3)]
        ];

        firstPlay = false;

        let totalOffset = [0,0,0]

        for(let x = 0; x < 16; x++)
        {

            for(let t = 0; t < 3; t++)
            {

                //create notes
                let note = new Note(
                    t,
                    (distance[t][x%4]*offset) + totalOffset[t],
                    heights[t][x%4] + 1,
                    x
                    );
                currentNotes.push(note);
                totalOffset[t] = totalOffset[t] + (distance[t][x%4]*offset) + offset;
            }
        }
    }
    else
    {
        let totalOffset = 0;
        let tally = 0;
        let heights = [randomInt(5),randomInt(5),randomInt(5),randomInt(5)]
        let distance = [randomInt(4),randomInt(4),randomInt(4),randomInt(4)];
        for(let n = 0; n < currentNotes.length; n++)
        {
            if(currentNotes[n].tile == tile)
            {
                currentNotes[n].distance = (distance[tally%4]*offset) + totalOffset,
                currentNotes[n].height = heights[tally%4];
                currentNotes[n].pos = [
                    viewport.screen[0] + currentNotes[n].distance,
                    (viewport.screen[1]*(tile/2)) //+ (currentNotes[n].height * 50)
                ];
                totalOffset = totalOffset + (distance[tally%4]*offset) + offset;
                tally++;
            }
        }
    }


}

function randomInt(max)
{
	rand_val = Math.floor(Math.random() * Math.floor(max + 1))
	return rand_val;
}


function initClock()
{
    timer = Date.now();
}

function updateClock()
{
    document.getElementById('time').innerHTML = toHMS((Date.now()-timer)/1000);
}

function toHMS(time)
{
	var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}