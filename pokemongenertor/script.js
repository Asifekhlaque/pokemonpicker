const img_pokemon = ['img/bulbasaur.jpg','img/Charmander.webp','img/squartal.png'];
const name_pokemon = ["Bulbasaur","Charmander","Squartal"];
function btn(){
   const random = Math.floor(Math.random() * 3); //This is used to generate a random number
   document.getElementById('Pokemon').src = img_pokemon[random]; //This is used to change the image
   alert(["Congratulations"] + " You have chosen " + name_pokemon[random]); //This is used to change the name
}