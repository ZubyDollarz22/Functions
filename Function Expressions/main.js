//Function expressions

const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true;
    }else {
      return false;
    }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

//Arrow function
const plantNeedWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

  //Concise Body Arrow Functions
const plantsNeedWater = day => day === 'Wednesday' ? true : false;