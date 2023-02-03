lwx=0;
lwy=0;
rwx=0;
rwy=0;

function preload(){
    music1= loadSound("JMDL.mp3");
    music2= loadSound("BZ.mp3");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,ml);
    poseNet.on('pose',gr);
}

function ml(){
    console.log("Model Loaded!!");
}

function gr(results){
    if(results>0){
        lwx=results[0].pose.leftWrist.x;
         lwy=results[0].pose.leftWrist.y;
          rwx=results[0].pose.rightWrist.x;
           rwy=results[0].pose.rightWrist.y;
    }
}

function draw(){
image(video,0,0,600,500);
}
