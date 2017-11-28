function theBeatlesPlay(musicians, instruments){
  let myArray = [];
  for (let i = 0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i])
  }
  return myArray;
}

function johnLennonFacts(array){
  var myArray = [];
  var i = 0;
  while (i < array.length){
    myArray.push(array[i] + "!!!");
    i++;
  }
  return myArray
}
