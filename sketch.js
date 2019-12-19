let beads = [];
let x;
let y;
let a = 0;
let capture;
let recording = false;
let gif;
let c;

function setup() {
    c = createCanvas(innerWidth, innerHeight);
    //capture = createCapture(VIDEO);
    // capture.size(width, height);
    //capture.hide();
    for (let i = 1; i < 20; i++) {
        beads[i] = new Bead(0, 0, i * 2, 1 / i);
    }
}

function draw() {
    background(0);
    fill(255);
    noStroke();
    translate(width / 2, height / 2);



    x = sin(a) * 500;
    y = (pow(cos(a), 2) * 200) - 50;
    scale(1.5);
    for (let i = 1; i < beads.length; i++) {
        beads[i].show();
        //beads[i].connect(mouseX - width / 2, mouseY - height / 2);
    }
    a += 0.055;

}

function mousePressed() {
    saveFrames('out', 'png', 5, 60);
}

console.log(beads);