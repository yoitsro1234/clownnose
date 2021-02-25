nosex = 0;
nosey = 0;

function preload(){
    loadImage = loadImage("https://i.postimg.cc/VNBKK5M6/clown-no-Se.jpg");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("POSENET INITIALISED SIRE, NO NEED FOR PLAN B");
    //sounds like a star wars reference but it isnt, i made that up.
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x =" + nosex);
        console.log("nose y =" + nosey);
    }
}


function draw(){
    image(video, 0, 0, 300, 300);
    image(loadImage, nosex, nosey, 30, 30);
}

function take_snapshot(){
    save('myFilterImage');
}

//hi, you have reached the end of the code. congratulations!
