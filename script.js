const screenDisplay=document.querySelector('.screen');
const buttons=document.querySelectorAll('button');
let calculation=[];
let accumulativeCalcuation;
function calculate(button){

    const value=button.textContent;
    if(value === "CLEAR"){
        calculation=[];
        screenDisplay.textContent='.';
    }
    else if(value==="="){
        screenDisplay.textContent=eval(accumulativeCalcuation);
    }
    else{
        calculation.push(value);
        accumulativeCalcuation=calculation.join('');
        screenDisplay.textContent=accumulativeCalcuation;
    }
   
}
buttons.forEach(button => button.addEventListener('click', ()=>calculate(button)))
