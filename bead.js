class Bead {
    constructor(x, y, r, smoothnes) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = smoothnes;
    }

    show() {
        fill(this.x + 50, this.s + 50, this.y + 50);
        stroke(this.x + 50, this.s + 50, this.y + 50);
        strokeWeight(4);
        this.x = lerp(this.x, x, this.s);
        this.y = lerp(this.y, y, this.s);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    connect(x_, y_) {
        line(this.x, this.y, x_, y_);
    }
}