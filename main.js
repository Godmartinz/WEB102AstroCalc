

// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  let gravity=('');

planets.forEach(function(planetList){
  let chosenOpt= document.createElement('option');
  chosenOpt.value= planetList[0];
  document.getElementById('planets').appendChild(chosenOpt).textContent=planetList[0];
  
})

function calculateWeight(userWeight, planetName){
  for(let i=0;i < planets.length; i++){
    if(planetName === planets[i][0]){
      var gravity = planets[i][1];
    }
  }
  return userWeight*gravity;
    console.log("calculated" + userWeight*gravity);
}

function handleClickEvent(e){
    var userWeight= document.getElementById('user-weight').value,
        planetName= document.getElementById('planets').value,
        result = calculateWeight(userWeight, planetName);
        document.getElementById('output').innerHTML= "If you were on " + planetName +", you would weigh " + result + "lbs!";
        
}