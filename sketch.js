const beads = [];
let x;
let y;
let a = 0;
let capture;
let recording = false;
let gif;

function setup() {
    createCanvas(innerWidth, innerHeight);
    //capture = createCapture(VIDEO);
    // capture.size(width, height);
    //capture.hide();
    for (let i = 0; i < 20; i++) {
        beads[i] = new Bead(width / 2, height / 2, i * 4, 1 / i);
    }
}

function draw() {
    background(0);
    fill(255);
    noStroke();

    x = sin(a) * 500;
    y = (pow(cos(a), 2) * 200) - 50;
    for (const b of beads) {
        b.show();
        b.connect(mouseX, mouseY);
    }
    a += 0.055;
}