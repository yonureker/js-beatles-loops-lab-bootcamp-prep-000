function theBeatlesPlay(musicians, instruments){
  let myArray = [];
  for (let i = 0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i])
  }
  return myArray;
}

function johnLennonFacts(array){
  var array = [];
  var i = 0;
  while (i < array.length){
    array.push(array[i] + "!!!");
    i++;
  }
  return array
}
