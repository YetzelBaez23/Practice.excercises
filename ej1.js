let arr = ["This", "is", "a", "sentence."];

function printOutString(arr) {
    let sentence = "";
    for (let wordIndex = 0; wordIndex < arr.length; wordIndex++) {
        sentence += " "+ arr[wordIndex]; // sentence = sentence + " "+ arr[wordIndex];
    }
    return sentence;
  }
  console.log(printOutString(arr)); // " This is a sentence."
  console.log( arr.join(" ")  );