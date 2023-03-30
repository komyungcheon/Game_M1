class Beer {
    constructor(x,y,size,speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        let img = document.getElementById("beer");
        this.ctx.drawImage(img,this.x,this.y,this.size,this.size);
    }

    fall() {
        this.y += this.speed;
    }
    clearBeer(){
        this.ctx.clearRect(this.x, this.y, this.size, this.size);
    }
}