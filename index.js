const micheli_says = str => {
  let inputArray = str.split("");
  let bufferArray = [];
  let max = 0;
  inputArray.map((a, b) => {
    var length = () => bufferArray.length;
    if (bufferArray.includes(a)) {
      var culprit = bufferArray.indexOf(a);
      bufferArray = bufferArray.slice(culprit + 1, length());
    }
    bufferArray.push(a);
    max = length() > max ? length() : max;
  });

  return max;
};

console.log(micheli_says("mr_tudi_is_a_better_developer"));
