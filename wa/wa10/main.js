const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = "Once Upon A Time in the magical land called :insertx: it was a :inserty: day so Bob decided to go for a walk in the :insertz:. Bob stumbled across a :inserta: just lying in the street! Bob couldn't believe someone would leave something so precious in this 94 fahrenheit weather so Bob went to pick up the :inserta: but couldn't, it felt like it weighed 300 pounds! All of a sudden the :inserta: :insertb:!";
//"It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
//"Once Upon A Time in the magical land called :insertx: it was a :inserty: day so Bob decided to go for a walk in the :insertz:."
const insertX = ["Idaho", "Pluto", "Tribeca"];

const insertY = ["torrentially rainy", "godawful hot", "misty"];

const insertZ = ["river", "street", "super creepy woods"];

const insertA = ["left shoe", "used piece of gum", "participation award"];

const insertB = ["exploded into glitter", "turned into a bunny and hopped away", "opened its eyes and said hello"];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const aItem = randomValueFromArray(insertA);
    const bItem = randomValueFromArray(insertB);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":inserta:", aItem);
    newStory = newStory.replace(":inserta:", aItem);
    newStory = newStory.replace(":inserta:", aItem);
    newStory = newStory.replace(":insertb:", bItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
    newStory = newStory.replace("Bob", name);
    newStory = newStory.replace("Bob", name);
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94- 32) * 5/9)+ " centigrade";

    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
   

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}




