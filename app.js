

document.getElementById('per-player-btn').addEventListener('click', function () {
    const perPlayerCost = getValueFromInputField('per-player-input-field')

    ExpencesCost = perPlayerCost * 5;
    setValueToTextField('player-expences', ExpencesCost)
    return ExpencesCost
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getValueFromInputField('manager-field');
    const coachCost = getValueFromInputField('coach-field')
    const totalCost = managerCost + coachCost + ExpencesCost;

    setValueToTextField('display-total', totalCost)
    console.log(totalCost);
})