class Bead {
    constructor(x, y, r, smoothnes) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = smoothnes;
    }

    show() {
        push();
        translate(width / 2, height / 2);
        fill(this.x + 50, this.s + 50, this.y + 50);
        stroke(this.x + 50, this.s + 50, this.y + 50);
        strokeWeight(4);
        this.x = lerp(this.x, x, this.s);
        this.y = lerp(this.y, y, this.s);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        pop();
    }

    connect(x_, y_) {
        push();
        translate(width / 2, height / 2);
        line(this.x, this.y, x_, y_);
        pop();
    }
}