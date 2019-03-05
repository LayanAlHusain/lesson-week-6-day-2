console.log("Work!!");
//Create array by var called locations, assign "Riyadh","Jeddah"
//Add at end of Array new value "Dammam"
//["Riyadh","Jeddah","Dammam"]
//Then add at first of Array new value called Abha

var locations =["Riyadh","Jeddah"];
locations.push("Dammam");
locations.unshift("Abha")
console.log(locations);

//Loops
/*
for(init;condition;increment){


}
*/
var names = ["Ali","Ahmed","Mohammed"];
//Create a loop for print each elements inside array



//Create function called "printArray"
// take one argument as one input, called arr
//

function printArray(arr){
  for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}



printArray(names);
