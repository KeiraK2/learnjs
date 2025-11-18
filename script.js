function hello() {
    console.log("Hello, world!")
}

hello();
hello();
hello();

function helloName(name) {
    console.log(`Hello ${name}!`);
}

helloName('Keira');
helloName('Laura');
helloName('Mia');
helloName();

function sum(a, b) {
    return a + b;
    console.log("This will never be execu"); // never runs
}

let answer = sum(4, 6);
console.log(answer);

let sum2 = function (a, b) {
    return a+b;
}
console.log(sum2(3, 5));

let sum3 = (a, b) => {
    return a + b;
}

console.log(sum3(2,3));

let sum4 = (a, b) => a + b;

console.log(sum4(6,4));

let square = a => a*a;

console.log(square(6));

let obj = {
    name: 'Keira' ,
    age: 17 ,
    sum1: function(a, b) {
        return a + b+this.age;
    },
    sum2: (a, b) => {
        return a + b+this.age; 
    },
    sum3: (a, b) => a + b+this.age,
    sum4(a, b) {
        return a + b+this.age;
    }
};

console.log(obj.sum1(1,1));
console.log(obj.sum2(1,1));
console.log(obj.sum3(1,1));
console.log(obj.sum4(1,1));

function recursive(i){
    if(i<=10){
        console.log(i);
        recursive(i+1);
    }
}

recursive(0);
