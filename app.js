

document.getElementById('per-player-btn').addEventListener('click', function () {
    const perPlayerCost = getValueFromInputField('per-player-input-field')

    ExpencesCost = perPlayerCost * 5;
    if (isNaN(ExpencesCost)) {
        alert('Insert Number Please !!')
        return
    }
    else {
        setValueToTextField('player-expences', ExpencesCost)
    }
    return ExpencesCost
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerCost = getValueFromInputField('manager-field');
    const coachCost = getValueFromInputField('coach-field')
    const totalCost = managerCost + coachCost + ExpencesCost;

    if (isNaN(totalCost)) {
        alert('Insert Number Please !!')
        return
    }
    else {
        setValueToTextField('display-total', totalCost)
    }

})

const players = document.querySelectorAll('.player');


for (let player of players) {

    const playerButton = player.childNodes[7];
    const unorderedList = document.getElementById('unordered-list');

    const li = document.createElement('li')

    playerButton.addEventListener('click', function () {
        const playerName = player.childNodes[3].innerText;
        li.innerText = playerName
        const playerNumber = unorderedList.childNodes.length
        if (playerNumber > 5) {
            alert('Sorry !! You have selected enough Players')
            return
        }

        unorderedList.appendChild(li)

    })
}
