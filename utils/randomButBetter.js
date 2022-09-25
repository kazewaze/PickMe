/*
* The PickMe! Randomizing Engine - Version 2.0.0
* Improved extensively for better randomization.
* Copyright 2022... jk ;) - Kaycee Ingram <kazewaze>
*/

export default function choose(array_) {
  let [chosenHistory, status] = [[], false];
  array_ = array_.filter(selection => selection !== "");

  do {
    chosenHistory.push(randomSelection(array_));

    if (chosenHistory.length === 7) {
      if (repeatDuplicates(chosenHistory, 7)) {
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
  return Math.floor(Math.random() * arrayLength_);
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