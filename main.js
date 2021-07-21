wrist_x = 0;
wrist_y = 0;

function preload() {
    rasengan = loadImage("https://i.postimg.cc/fLp8yx6v/shuriken.png");
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
    video.hide();
}

function draw() {
    image(video, 100, 30, 300, 300);
    image(rasengan, wrist_x, wrist_y, 150, 150);
}

function snap() {
    save("BOOT-LOOP.png")
}

function modelLoaded() {
    console.log("Model is loaded..");
}

function gotPoses(results) {
    if (results.length > 0) {

        wrist_x = results[0].pose.rightWrist.x;
        wrist_y = results[0].pose.rightWrist.y-200;
        console.log(results);

    }
}