class Basket {
    constructor(x,y,width,height) {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.score = 0;
        this.count = 3;
        this.width = width;
        this.height = height;
    }
    draw() {
        let img = document.getElementById('basket');
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        this.drawScore();
    }
    move(x){
        this.ctx.clearRect(this.x,this.y,this.width,this.height);
        if (x <= 0) {
            this.x = 0;
        }
        if (x > 0 && x < this.canvas.width - this.width) {
            this.x = x;
        } else if (x >= this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }
        this.draw();
    }
    drawScore() {
        this.ctx.font ='28px Arial';
        this.ctx.fillStyle = 'yellow';
       this.ctx.fillText(`Score: ${this.score}`, 5, 25);
    }
}
