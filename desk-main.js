img = "";
Status = "";

function preload() {
    img = loadImage('desk-img.jpg');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Object is Detecting";
}
function draw() {
    image(img, 0, 0, 400, 400);
}