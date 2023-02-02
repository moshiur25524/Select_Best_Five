

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

const players = document.querySelectorAll('.player');

for(let player of players){

  const playerButton = player.childNodes[7];
  const unorderedList = document.getElementById('unordered-list');
  const li = document.createElement('li')

  playerButton.addEventListener('click', function(){
    const playerName = player.childNodes[3].innerText;
    li.innerText = playerName
    unorderedList.appendChild(li)
    console.log(playerName);
  })
}

// for (let btn of playerBtns) {
//     btn.addEventListener('click', function(){
//         const selectedButton = bt
//     })
// console.log(btn);
// }

// for(let player of players){
//   console.log(player.childNodes);child
// }