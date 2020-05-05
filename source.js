import { transitions } from './constants.js';


const states = [
    'Nitrites',
    'Nitrates',
    'Ammonium',
    'Animals',
    'BacteroidAmmonia',
    'Plants',
    'AtmosphericNitrogen',
    'BacterialProtein'
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var currentState;
var stateHistory = []

function activateState(state) {
    $('.gameState').addClass('inactive');
    $(`#${state}`).removeClass('inactive');
    console.log(state);
    currentState = state;
    stateHistory.push(state);
}

$(document).ready(function () {
    $.ajax({
        url: 'Nitrogen_Cycle_2.svg',
        success: function (data) {
            $("#svgContainer").append(data.documentElement);
            states.forEach(state => {
                $("#" + state).addClass('gameState')
            });
        }
    })
});

$("#startButton").click(function () {
    var startState = getRandomInt(0, states.length - 1)
    activateState(states[startState])

    $("#transitionButton").show()
    $("#startButton").hide()
})

$("#transitionButton").click(function () {
    var options = transitions[currentState];
    var choice = getRandomInt(1, 15);
    var currentOption;
    for (var i = 0; i < options.length; i++) {
        currentOption = options[i];
        choice -= currentOption.chance;
        if (choice <= 0) {
            break;
        }
    }

    alert(currentOption.text);

    activateState(currentOption.state);

})