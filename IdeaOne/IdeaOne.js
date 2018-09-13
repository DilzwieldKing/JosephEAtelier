function setup() {
    createCanvas(720, 480);
}

function draw() {
    for(var i = 0; i < 10; i++){
        background(100, 20, 255);
        //ellipse(width/2, height/2, 10);
        ellipse(random(width), random(height), 10);
    }
}