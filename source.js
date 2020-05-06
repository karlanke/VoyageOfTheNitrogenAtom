import { transitions, nh4 } from './constants.js';


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

const stateNames = {
    'Nitrites': 'Nitrite',
    'Nitrates': 'Nitrate',
    'Ammonium': nh4,
    'Animals': 'Animal Protein',
    'BacteroidAmmonia': 'Bacteroid Ammonia',
    'Plants': 'Plant Protein',
    'AtmosphericNitrogen': 'Nitrogen Gas',
    'BacterialProtein': 'Bacterial Protein'
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var currentState;
var stateHistory = []
var name;

export function submitSpreadsheet() {
    var url = 'https://script.google.com/macros/s/AKfycbytMUeQfv8LKBDdeYsXdf4aMawaMUk0UNJoJIBKIeP0NvoqP_w6/exec';
    $("#nameField").val(name)
    for (var i = 1; i <= stateHistory.length; i++) {
        var key = stateHistory[i - 1];
        var value = stateNames[key];
        if (key == 'Ammonium') {
            value = 'NH4';
        }
        $("#googleSheetsForm").append(`<input name="${'state' + i.toString()}" value="${value}" />`)
    }

    $.ajax({ // create an AJAX call...
        data: $("#googleSheetsForm").serialize(), // get the form data
        type: 'POST', // GET or POST
        url: url, // the file to call
        success: function (response) { // on success..
            console.log(response)
        }
    }).fail(function (response) {
        console.log(response);
    })
}

function activateState(state) {
    $('.gameState').addClass('inactive');
    $(`#${state}`).removeClass('inactive');
    console.log(state);
    currentState = state;
    stateHistory.push(state);

    if (stateHistory.length == 10) {
        var message = `You have ended as ${stateNames[state]}. Thanks for playing! Your journey:<br>`
        stateHistory.forEach(function (elem) {
            message += stateNames[elem] + '<br />';
        });
        message += 'To see all the results so far, <a href="https://docs.google.com/spreadsheets/d/1-XH3qFglTEFt5ys_YN8mcJWrALtYuC9Oc-WowYegTq4/edit?usp=sharing" target=”_blank”>click here.</a>';
        $('#messageBox').html(message);

        $("#transitionButton").hide();
        $("#restartButton").show();

        submitSpreadsheet();
    } else {
        $('#messageBox').html(`You are currently ${stateNames[state]}.`);

    }

    $("#transitionButton").prop('disabled', false);
    nextState = null;
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

    name = Cookies.get('name')
    if (name == null || name == "") {
        let tempName = '';
        $.alertable.prompt("Welcome to the voyage of the nitrogen atom! Please enter your name, and click \"Start\" when you're ready to begin.", {
            cancelButton: null
        }).then(function (data) {
            return data.value
        }).then(function (value) {
            name = value
            Cookies.set('name', name)
        })
    }


});

$("#startButton").click(function () {
    var startState = getRandomInt(0, states.length - 1)
    activateState(states[startState])

    $("#transitionButton").show()
    $("#startButton").hide()
})

var nextState;

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
    $("#messageBox").html(currentOption.text)
    $('.gameState').removeClass('inactive');

    nextState = currentOption.state;

    $("#transitionButton").prop('disabled', true);
});

$("#restartButton").click(function () {
    location.reload();
});

$(document).on('click', '.gameState', function (e) {
    if (nextState != null) {
        if ($(this).attr('id') == nextState) {
            activateState(nextState);
        } else {
            $.alertable.alert("Sorry, try again!")
        }
    }

})