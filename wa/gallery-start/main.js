const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const altArray = {
    "pic1.jpg" : "eye",
    "pic2.jpg" : "blah",
    "pic3.jpg" : "x",
    "pic4.jpg" : "rawr",
    "pic5.jpg" : "ok"
};

/* Declaring the alternative text for each image file */

/* Looping through images */

for (const img of imageArray)
{
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${img}`);
newImage.setAttribute('alt', altArray[img]);
thumbBar.appendChild(newImage);
newImage.addEventListener("click", e => {
    displayedImage.src = e.target.src;
    displayedImage.alt= e.target.alt;
});
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const check = btn.getAttribute('class');
    if (check === 'dark') 
    {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else 
    {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
