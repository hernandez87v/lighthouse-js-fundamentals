function range(start, end, step) {
  let list = [];
  if (start > end || end < start || step <= 0) {
    return list;
  } else {
    for (var i = start; i <= end; i = i + step) {
      list.push(i);
    }
  }
  return list;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
