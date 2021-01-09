function _() {
    console.log("I'm an underscore function :)");
}

function $(name) {
    return `Hello ${name}`;
}

console.log(typeof _);
console.log(typeof $);

_();
let result = $("sasa");
console.log(result);