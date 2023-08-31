noseX=0;
noseY=0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function preload()
{}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position(900, 200);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(200, 100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
background('#969A97');
fill('#4287f5')
square(noseX,noseY,difference)
document.getElementById("width").innerHTML = "The width and height of a square is: " + difference;

}

function modelLoaded() 
{
console.log('Model is loaded');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    //nose_x
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = leftWristX - rightWristX;
}

}

