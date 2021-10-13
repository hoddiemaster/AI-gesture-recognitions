function setup(){
    canvas = createCanvas(300,300);
    canvas.position(560 ,150);

    video = createCapture(VIDEO);
    video.size(300 ,300); 

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on("pose",gotPoses);

}

function draw(){
background("#ADADAD");
}

function modelLoaded(){
    console.log("model loaded");
}
 
function gotPoses(results){
if (results.length > 0){
    console.log(results);
}

}