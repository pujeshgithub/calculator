function addValue(value){
    let v = document.getElementById("screen");
    v.value = v.value + value; 
}

function calculate() {
    let v = document.getElementById("screen").value;
    let result = eval(v);
    document.getElementById("screen").value = result;
   
}



function clearAll() {

    //window.location.reload();

    document.getElementById("screen").value = " ";
}  



function clearSingleNum(value){
    let v = document.getElementById("screen").value;
    let newVal = v.substring(0 , v.length - 1);
    document.getElementById("screen").value = newVal
    
}




function twoZeros() {
    let v = document.getElementById("screen");
    v.value = v.value + '00'
    
 
}