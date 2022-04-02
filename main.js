function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(620, 360)
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 300,300,620,360);
}