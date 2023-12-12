
const numberOne = document.querySelector('#number-one');
const numberTwo = document.querySelector('#number-two');
const numberThree = document.querySelector('#number-three');
const numberFour = document.querySelector('#number-four');
const numberFive = document.querySelector('#number-five');
const numberSix = document.querySelector('#number-six');
const numberSeven = document.querySelector('#number-seven');
const numberEight = document.querySelector('#number-eight');
const numberNine = document.querySelector('#number-nine');
const numberTen = document.querySelector('#number-ten');

const btnOne = document.querySelector('#generate-one').addEventListener('click', function(){
    rand(numberOne);
});
const btnTwo = document.querySelector('#generate-two').addEventListener('click', function(){
    rand(numberTwo);
});
const btnThree = document.querySelector('#generate-three').addEventListener('click', function(){
    rand(numberThree);
});
const btnFour = document.querySelector('#generate-four').addEventListener('click', function(){
    rand(numberFour);
});
const btnFive = document.querySelector('#generate-five').addEventListener('click', function(){
    rand(numberFive);
});
const btnSix = document.querySelector('#generate-six').addEventListener('click', function(){
    rand(numberSix);
});
const btnSeven = document.querySelector('#generate-seven').addEventListener('click', function(){
    rand(numberSeven);
});
const btnEight = document.querySelector('#generate-eight').addEventListener('click', function(){
    rand(numberEight);
});
const btnNine = document.querySelector('#generate-nine').addEventListener('click', function(){
    rand(numberNine);
});
const btnTen = document.querySelector('#generate-ten').addEventListener('click', function(){
    rand(numberTen);
});



function rand(val){
    val.textContent = Math.floor(Math. random()*10);
    console.log("worked?");
}

const finalNumber = document.querySelector('#final-number');
const btnFinal = document.querySelector('#done').addEventListener('click', finished);

function finished(){
    finalNumber.textContent = "(" + numberOne.textContent + numberTwo.textContent + numberThree.textContent + ")" + numberFour.textContent + numberFive.textContent + numberSix.textContent + "-" + numberSeven.textContent + numberEight.textContent + numberNine.textContent + numberTen.textContent;
}

