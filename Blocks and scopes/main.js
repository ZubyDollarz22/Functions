const city = 'New York City';

const logCitySkyline = () => {
let skyscraper = 'Empire State Building';
return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

//Global scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () =>{
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

//Block scopes
 const logVisibleLightWaves = () =>{
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  logVisibleLightWaves();
  // console.log(lightWaves);


  //Scope pollution
  //While it’s important to know what global scope is, it’s best practice to not define variables in the global scope.

  const satellites = 'The Moon';
  const galaxys = 'The Milky Way';
  let star = 'North Star';

  const callMyNightSkies = () => {
  star = 'Sirius';
  
	return 'Night Sky: ' + satellites + ', ' + star + ', ' + galaxys;
 };

 console.log(callMyNightSkies());
 console.log(star);

 //*               *                               *
 const logVisibleLightWave = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    
    console.log(lightWaves);
  };
  
  logVisibleLightWave();