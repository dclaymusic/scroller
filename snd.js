function selectSound(x)
{
    if(x == 1) { loadsnd01(); playsnd01(); }
}

let snd01buff = null;
let snd02buff = null;

// var bg = new Audio()
// bg.src = './snd/bg.mp3';
// bg.loop = 'true';

var sounds = ['bg1','bg2']; //17
                let buffers = [];

var bgbuff = null;

const loadBg = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bg1.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bgbuff = data);
	};
	request.send();
};

const playBg = () => {
	bg.buffer = bgbuff;
	bg.loop=true;
	bg.connect(audioCtx.destination);
	bg.start(audioCtx.currentTime); // play the source immediately
};



function initSnd() 
{

}



// ///HERE'S ALL THE TRICKY SOUNDS
// const loadBg1 = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "./snd/bg1.wav");
// 	request.responseType = "arraybuffer";
// 	request.onload = function() {
// 	let undecodedAudio = request.response;
// 	audioCtx.decodeAudioData(undecodedAudio, (data) => bg1buff = data);
// 	};
// 	request.send();
// };

// const playBg1 = () => {
// 	bg1.buffer = bg1buff;
// 	bg1.loop=true;
// 	//console.log(buffer)
// 	bg1.connect(bg1gain).connect(audioCtx.destination);
// 	bg1.start(audioCtx.currentTime); // play the source immediately
// };


