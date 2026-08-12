function fibs(num) {
  console.log("This was printed recursively");

  if (num <= 0) return [];
  if (num == 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(fibs(8));

function fibsRec(num) {
  console.log("This was printed recursively");
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const sequence = fibsRec(num - 1);
  const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];

  sequence.push(nextNum);
  return sequence;
}

console.log(fibsRec(8));
