/*
* The PickMe! Randomizing Engine - Version 1.0.0
* Copyright 2022... jk ;) - Kaycee Ingram <kazewaze>
*/

export default function choose(array_) {
  let counter = Array(array_.length).fill(0);

  do {
   counter[array_.indexOf(randomSelection(array_))]++;
  } while (!counter.includes(3));

  return array_[counter.indexOf(3)];
}

function randomSelection(array_) {
  return array_[randomIdx(array_.length)];
}

function randomIdx(arrayLength_) {
  return Math.floor(Math.random() * arrayLength_);
}