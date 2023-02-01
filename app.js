
function getValueFromInputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = ''
    return inputValue;
}

// function getValueFromTextField(inputId){
//     const textField = document.getElementById(inputId);
//     const textValue = textField.innerText;
//     return textValue;
// }

function setValueToTextField(inputId, currentValue){
    const textField = document.getElementById(inputId);
    textField.innerText = currentValue
}

document.getElementById('per-player-btn').addEventListener('click', function(){
   const perPlayerCost = getValueFromInputField('per-player-input-field')

   ExpencesCost = perPlayerCost * 5;
    setValueToTextField('player-expences', ExpencesCost)
})