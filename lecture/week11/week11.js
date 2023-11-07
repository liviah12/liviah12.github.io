console.log("making sure this is linked correctly");

const x = 2;
const y = 2;

if (x==y){
    console.log("SUCCESS");
}
else{
    console.log("FAIL");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); 

document.addEventListener("DOMContentLoaded", ()=> {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function random2(number){
    return(Math.random() * number);
}

function draw(){
    //console.log("TEST");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<500; i++){
        ctx.beginPath();
        //const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        //ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
        //"rgba(255, 0, 0, 0.5)";
        let red = random(255);
        let blue = random(255);
        let green = random(255);
        let alpha = random2(1);
        let color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        console.log(color);
        ctx.fillStyle= color;
        ctx.arc (
            random(canvas.width),
            random(canvas.width),
            random(500),
            0,
            2*Math.PI,
        );
        ctx.fill();
    }
    for(let i = 0; i<150; i++){
        ctx.beginPath();
        //const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        //ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
        //"rgba(255, 0, 0, 0.5)";
        let red = random(255);
        let blue = random(255);
        let green = random(255);
        let alpha = random2(1);
        let color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        console.log(color);
        ctx.fillStyle= color;
        ctx.arc (
            random(canvas.width),
            random(canvas.width),
            random(50),
            0,
            2*Math.PI,
        );
        ctx.fill();
    }
}


btn.addEventListener("click", draw);