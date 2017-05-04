"use strict";

var tally = 0;

var children = prompt ( 'do i have children? y/yes or n/no' );
if (children.toLowerCase() === 'yes' || children.toLowerCase() === 'y' ) {
    alert ( 'correct!' );
    tally ++;
    console.log (tally);
} else {
    alert( 'oops - i have three kids' );
}

var pets = prompt ( 'do i have pets? y/yes or n/no' );
if (pets.toLowerCase() === 'yes' || pets.toLowerCase() === 'y' ) {
    alert ( 'correct!' );
    tally ++;
    console.log (tally);
} else {
    alert( 'oops! - i have a ferret' );
}

var city = prompt ( 'do i live in portland? y/yes or n/no' );
if (city.toLowerCase() === 'yes' || city.toLowerCase() === 'y' ) {
    alert ( 'correct!' );
    tally ++;
    console.log (tally);
} else {
    alert( 'oops! - i DO live in portland' );
}

var likeBroc = prompt ( 'do i like brocoli? y/yes or n/no' );
if (likeBroc.toLowerCase() === 'no' || likeBroc.toLowerCase() === 'n' ) {
    alert ( 'correct!' );
    tally ++;
    console.log (tally);
} else {
    alert( 'nope! i sort of hate it' );
}

var spellBroc = prompt ( 'can i spell brocoli? y/yes or n/no' );
if (spellBroc.toLowerCase() === 'no' || spellBroc.toLowerCase() === 'n' ) {
    alert ( 'correct!' );
    tally ++;
    console.log (tally);
} else {
    alert( 'nope! i spelled it incorrectly' );
}


var num = parseInt( prompt ( 'guess my favorite number (hint: a number between 1 and 40)' ));

for ( var i = 3; i > 0; i-- ) {

    if ( num === 21) {

        alert ( 'correct! 21 is my favorite number' );
        tally ++;
        console.log (tally);
        console.log ( 'done!' );
        break;

    } else if ( num < 21 ) {
        var num = prompt ( 'too low, guess again (' + i + ' guesses left)' );
        if (i === 0) {
            alert ( 'out of guesses!' );
        }

    } else if ( num > 21 ) {
        var num = prompt ( 'too high, guess again (' + i + ' guesses left)' );
        if ( i === 0 ) {
            alert ( 'out of guesses!' );
        }
    }
}


var states = ['ny', 'ca', 'va'];
for ( var i = 1; i < 4; i++ ) {
    var guess = prompt ( 'guess a state I have lived in besides Oregon? two letter code' );
    console.log ( i );

    for (var j = 0; j < states.length; j ++) {

        if ( guess === states[j]) {

            alert ( 'correct!' );
            tally ++;
            console.log (tally);
            break;
        }

        if ( j === states.length - 1 ) {
       
            alert ( 'nope!' );
        }
    }
}

alert ( 'you got ' + tally + ' answers right!');
