"use strict";

var q1 = function () {
    var children = prompt ( 'do i have children? y/yes or n/no' );
    if (children.toLowerCase() === 'yes' || children.toLowerCase() === 'y' ) {
        alert ( 'correct!' );
    } else {
        alert( 'oops - i have three kids' );
    }
}

var pets = prompt ( 'do i have pets? y/yes or n/no' );
if (pets.toLowerCase() === 'yes' || pets.toLowerCase() === 'y' ) {
    alert ( 'correct!' );
} else {
    alert( 'oops! - i have a ferret' );
}

var city = prompt ( 'do i live in portland? y/yes or n/no' );
if (city.toLowerCase() === 'yes' || city.toLowerCase() === 'y' ) {
    alert ( 'correct!' );
} else {
    alert( 'oops! - i DO live in portland' );
}

var likeBroc = prompt ( 'do i like brocoli? y/yes or n/no' );
if (likeBroc.toLowerCase() === 'no' || likeBroc.toLowerCase() === 'n' ) {
    alert ( 'correct!' );
} else {
    alert( 'nope! i sort of hate it' );
}


var spellBroc = prompt ( 'can i spell brocoli? y/yes or n/no' );
if (spellBroc.toLowerCase() === 'no' || spellBroc.toLowerCase() === 'n' ) {
    alert ( 'correct!' );
} else {
    alert( 'nope! i spelled it incorrectly' );
}