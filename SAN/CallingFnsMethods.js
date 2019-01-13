function foo(){
  console.log("Hello");
  console.log(this);
}

foo();  //Method #1

var obj = {};
obj.foo1 = function (){
  console.log("Hello");
  console.log(this);
};

obj.foo1();  //Method #2

new foo2();  // Method #3

foo3.call(this) // Method #4 uses the object to be binded


