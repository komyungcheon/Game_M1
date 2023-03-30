let basket = new Basket(350, 500, 110, 110);
basket.draw();
let multiBeer = [];

setTimeout(() => {
    let themeMusic = new Audio('Audio/123.mp3');
    themeMusic.play();
}, 5000)
function creatBeer() {

    for (let i = 0; i < 3; i++) {
        let x = Math.random() * basket.canvas.width - 50;
        let y = Math.random() * -500;
        let size = Math.random() * 10 + 40;
        let speed = 2;
        let beer = new Beer(x, y, size, speed);
        multiBeer.push(beer);
    }
}

setInterval(creatBeer, 2500)



function init() {

    basket.ctx.clearRect(0, 0, basket.canvas.width, basket.canvas.height);
    basket.draw();
    for (let i = 0; i < multiBeer.length; i++) {
        let beer = multiBeer[i];
        beer.fall();
        beer.draw();
        basket.draw();
    }
    requestAnimationFrame(init);
}

init();

function checkImpact() {
    for (let i = 0; i < multiBeer.length; i++) {
        let beer = multiBeer[i];
        if (beer.y + beer.size >= basket.y && beer.y <= basket.y + basket.height &&
            beer.x + beer.size >= basket.x && beer.x <= basket.x + basket.width) {
            beer.clearBeer();
            multiBeer.splice(i, 1);
            i--;
            basket.score += 100;
        }  else {
            if (beer.y + beer.size >= basket.canvas.height) {
                multiBeer.splice(i, 1);
                i--;
                basket.count -= 1;
            }
        }
        if (basket.count === 0) {
            basket.score = 0;
            basket.count = 3;
            alert('Game Over');
        }
    }

}

setInterval(checkImpact, 100)
window.addEventListener("mousemove", function (e) {
        let xMouse = e.clientX;
        basket.move(xMouse);
    }
)




