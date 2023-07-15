function hello1() {
  return "Hi there";
}

console.log(hello1());

hello1 = function () {
  return "hey there again";
};

console.log(hello1());
