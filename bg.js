function drawBackground()
{
    //draw bg
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

    let barW = viewport.screen[0];
    let barH = viewport.screen[1]*(1/3);
    
    //top background
    ctx.fillStyle = 'rgba(255, 184, 69,0.2)';
    ctx.fillRect(0, 0, barW, barH);

    //middle background
    ctx.fillStyle = 'rgba(255, 115, 119, 0.2)';
    ctx.fillRect(0, barH*1, barW, barH);

    //bottom background
    ctx.fillStyle = 'rgba(115, 159, 255, 0.2)';
    ctx.fillRect(0, barH*2, barW, barH);
     
}

function drawNotes()
{
    for(let n = 0; n < currentNotes.length; n++)
    {
            //bottom background
            let centerX = currentNotes[n].pos[0];
            let centerY = currentNotes[n].pos[1];
            let radius = currentNotes[n].radius;
             
            
            //  ctx.beginPath();
            //  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
             if(currentNotes[n].tile == 0) { ctx.drawImage(pumpkin,centerX,centerY,160 + (currentNotes[n].height),160 + (currentNotes[n].height)); }
             if(currentNotes[n].tile == 1) { ctx.drawImage(cat,centerX,centerY,160 + (currentNotes[n].height),160 + (currentNotes[n].height)); }
             if(currentNotes[n].tile == 2) { ctx.drawImage(ghost,centerX,centerY,160 + (currentNotes[n].height),160 + (currentNotes[n].height)); }
            //  ctx.fill();
    }
}

function drawSidebar()
{
    let barW = viewport.screen[0]*0.2;
    let barH = viewport.screen[1]*(1/3);
    let bumperW = viewport.screen[0]*0.05;

    alphaHandler();

    //top
    ctx.fillStyle = topColor;
    ctx.fillRect(0, 0, barW, barH);

    //top "bumper"
    ctx.fillStyle = `rgba(255,255,255,${alpha[0]}`;
    ctx.fillRect(barW, 0, bumperW, barH);

    //middle
    ctx.fillStyle = middleColor;
    ctx.fillRect(0, barH*1, barW, barH);

     //middle "bumper"
     ctx.fillStyle = `rgba(255,255,255,${alpha[1]}`;
     ctx.fillRect(barW, barH*1, bumperW, barH);

    //bottom
    ctx.fillStyle = bottomColor;
    ctx.fillRect(0, barH*2, barW, barH);

    //bottom "bumper"
    ctx.fillStyle = `rgba(255,255,255,${alpha[2]}`;
    ctx.fillRect(barW, barH*2, bumperW, barH);

    // ctx.drawImage(drum, 50, 0, imageXY, imageXY);
    // ctx.drawImage(xylo, 50, viewport.screen[1]*(1/3), imageXY, imageXY);
    // ctx.drawImage(metal, 50, viewport.screen[1]*(2/3), imageXY, imageXY);

    ctx.fillStyle = 'black';
    ctx.font = "150px Andika";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
    ctx.fillText('1', 85, imageXY);

    ctx.fillStyle = 'black';
    ctx.font = "150px Andika";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
    ctx.fillText('2', 85, imageXY+viewport.screen[1]*(1/3));

    ctx.fillStyle = 'black';
    ctx.font = "150px Andika";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
    ctx.fillText('3', 85, imageXY+viewport.screen[1]*(2/3));

}


function alphaHandler()
{
    for(let i = 0; i < 3; i++)
    {
        if(alpha[i] <= 0.3)
        {
            alpha[i] = 0.3;
        }
        else { alpha[i] -= 0.01; }
    }
}

function updateSpeed(sp)
{
    if(!hasStarted) { startGame(); currentSpeed = sp; }
    for(let n = 0; n < currentNotes.length; n++)
    {
        currentNotes[n].speed = sp;
    }
}