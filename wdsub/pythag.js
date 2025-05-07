/**function pythag() {
  let inputOne = document.getElementById("number-1");
  let pythagOne = inputOne.value;
  let inputTwo = document.getElementById("number-2");
  let inputThree = document.getElementById("number-3");
  
}**/
function computePythag() {
 
  
  
  
  let _inputArr = document.querySelectorAll("input");
   let _a = _inputArr[0].value;
  let _b = _inputArr[1].value;
  let _c = _inputArr[2].value; 
  
  
  if (_inputArr[0].value == "" && _inputArr[1].value != "" && _inputArr[2].value != "") {//if a is blank, compute a
    _inputArr[0].value = Math.sqrt(Math.pow( _inputArr[2].value,2) - Math.pow(_inputArr[1].value,2));
    
  } else if (_inputArr[1].value == "" && _inputArr[0].value != "" && _inputArr[2].value != ""){//if b is blank, compute b
    _inputArr[1].value = Math.sqrt(Math.pow( _inputArr[2].value,2) - Math.pow( _inputArr[0].value,2));  
  } else if(_inputArr[2].value == "" && _inputArr[1].value != "" && _inputArr[0].value != "") {//if c is blank, compute c
    _inputArr[2].value = Math.sqrt(Math.pow( _inputArr[0].value,2) + Math.pow( _inputArr[1].value,2));  
    console.log("got here")
  } else{
    window.alert("Please enter 2 side lengths")
  }
  
  
  
  
  /** console.log("got here");
  let inputField = document.getElementById("inputs");
  console.log(Math.pow(inputOne.value;2))**/
}
