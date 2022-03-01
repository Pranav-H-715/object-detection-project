img = "";
Status = "";

function preload() {
    img = loadImage('kitchen-img.jpeg');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Object is Detecting";
}
function draw() {
    image(img, 0, 0, 600, 400);
}