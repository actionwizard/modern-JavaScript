function add(s) {
  a = undefined;
  sum = a;
  {
    var a = undefined;
  }
  console.log(sum, s, a);
  return s;
}

add(undefined);
