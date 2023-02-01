
function getValueFromInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value)
    inputField.value = ''
    return inputValue;
}

// function getValueFromTextField(inputId){
//     const textField = document.getElementById(inputId);
//     const textValue = textField.innerText;
//     return textValue;
// }

function setValueToTextField(inputId, currentValue) {
    const textField = document.getElementById(inputId);
    textField.innerText = currentValue
}