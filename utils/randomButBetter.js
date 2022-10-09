/*
* The PickMe! Randomizing Engine - Version 2.0.0
* Improved extensively for better randomization.
* Copyright 2022... jk ;) - Kaycee Ingram <kazewaze>
*/

const MersenneTwister = require('./mersenne_twister');
const mtAlgo = new MersenneTwister();

export default function choose(array_) {
  let [chosenHistory, status, numberOfDuplicates] = [[], false, 7];
  array_ = array_.filter(selection => selection !== "");

  do {
    chosenHistory = chosenHistory.length >= 2 && !allEqual(chosenHistory) ? [] : chosenHistory;

    chosenHistory.push(randomSelection(array_));

    if (chosenHistory.length === numberOfDuplicates) {
      if (repeatDuplicates(chosenHistory, numberOfDuplicates)) {
        status = true;
      } else {
        chosenHistory = [];
      }
    }
  } while (!status);

  return chosenHistory[0];
}

function randomSelection(array_) {
  return array_[randomIdx(array_.length)];
}

function randomIdx(arrayLength_) {
  return Math.floor(mtAlgo.random() * arrayLength_);
}

function allEqual(array_) {
  return array_.every(idx => idx === array_[0] ? true : false);
}

function repeatDuplicates(arr, amount=3) {
  let [count, last] = [0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== last) {
      last = arr[i];
      count = 0;
    }

    count += 1;

    if (amount <= count) {
      return true;
    }
  }
}

// function evenOrOdd(num) {
//   return num % 2 === 0;
// }

// console.log(Math.floor(mtAlgo.random() * 5));

// console.log(choose['k', 'w', 'i']);