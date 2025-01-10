let input = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
let space = " ";

const textTransformation = (arr, maxWidth) => {
  let lengthOfarr = 0;
  let addWords = 0;

  for (let i = 0; i < arr.length; i++) {
    lengthOfarr += arr[i].length;
    if (maxWidth > lengthOfarr)
      console.log( arr[i].concat(' y'));
    if (arr[i].length > maxWidth)
      return "length of a word in input is bigger than maxWidth";

    // for (j = i + 1; j < arr.length; j++) {
    //   if (arr[i].length < maxWidth &&  arr[i].length + arr[j].length < maxWidth )
    // }
  }
};

textTransformation(input, maxWidth);
