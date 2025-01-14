// Without Exp
function addNum(a,b){
    let result = a+b;
    console.log(result)
};
addNum(10,20)

function subNum(a,b){
    let result = a-b;
    console.log(result)
};
subNum(10,20)

//using exp
const addNum = function(a,b){
    let result = a+b;
    console.log(result);
};
addNum(10,30)

const subNum = function(a,b){
    let result = a-b;
    console.log(result);
};
subNum(10,30)

//arrow func

const addNum = (a,b)=>{
    let result = a+b;
    console.log(result);
};
addNum(10,30)

const addNum = (a,b)=>{
    let result = a+b;
    console.log(result);
};
addNum(10,30)

//arrow another way

const addNum = (a,b)=>a+b
let ans = addNum(10,20)
console.log(ans);

const subNum = (a,b)=>a-b
let ans2 = addNum(10,20)
console.log(ans2);


