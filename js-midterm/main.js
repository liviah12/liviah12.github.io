
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
}

const finalNumber = document.querySelector('#final-number');
const finalText = document.querySelector('#text');
const btnFinal = document.querySelector('#done').addEventListener('click', finished);

function finished(){
    if((numberOne.textContent != "") && (numberTwo.textContent != "") && (numberThree.textContent != "") && (numberFour.textContent != "") && (numberFive.textContent != "") && (numberSix.textContent != "") && (numberSeven.textContent != "") && (numberEight.textContent != "") && (numberNine.textContent != "") && (numberTen.textContent != ""))
    {
    finalText.textContent = "Oh no! It looks like your phone number got misinterpreted, here is the number we got. To confirm your phone number is the same as the one you entered above, please re-enter your phone number below.";
    finalNumber.textContent = "(" + numberTen.textContent + numberNine.textContent + numberEight.textContent + ")" + numberSeven.textContent + numberSix.textContent + numberFive.textContent + "-" + numberFour.textContent + numberThree.textContent + numberTwo.textContent + numberOne.textContent;
    document.getElementById("number-input").hidden = false;
    }
    else
    {
        alert("Oops! It doesn't look like you've entered a full phone number. Please fill out the rest of your number before preceding.")
    }
}



const submitButton = document.querySelector('#submit').addEventListener('click', submitProcess);

function submitProcess(){
    const initialInputNumber = numberOne.textContent + numberTwo.textContent + numberThree.textContent  + numberFour.textContent + numberFive.textContent + numberSix.textContent + numberSeven.textContent + numberEight.textContent + numberNine.textContent + numberTen.textContent;
    
    const confirmationInputNumber = document.querySelector("#name");
    const confirmationInputNumberValue = confirmationInputNumber.value; 
    if (initialInputNumber == confirmationInputNumberValue){
        alert("Your input number matched the one your originally input, your number has been submitted!")
    }
    else{
        alert("Looks like those numbers don't match, please try again")
        
    }
    empty(numberOne);
        empty(numberTwo);
        empty(numberThree);
        empty(numberFour);
        empty(numberFive);
        empty(numberSix);
        empty(numberSeven);
        empty(numberEight);
        empty(numberNine);
        empty(numberTen);
        empty(finalText);
        empty(finalNumber);
        document.getElementById("number-input").hidden = true;
    confirmationInputNumber.value = "";
    
}


function empty(val){
    val.textContent = "";
}



