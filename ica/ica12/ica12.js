const btn = document.querySelector("#js-new-quote").addEventListener("click", getQuote);

const btnAnswer = document.querySelector("#js-tweet").addEventListener("click", displayAnswer);
const triviaQuestion = document.querySelector("#js-quote-text");
let triviaAnswer = document.querySelector("#js-answer-text");
let answer = "";


const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
async function getQuote(){
    console.log("getQuote called successfully");

    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['question']);
        
        answer = json['answer'];
        triviaAnswer.textContent = '';
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}




function displayQuote(quote){
    //
    triviaQuestion.textContent = quote;
    
}




function displayAnswer(){
    //
    triviaAnswer.textContent = answer;

}



getQuote();