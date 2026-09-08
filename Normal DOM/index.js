// console.log("Hello Welcome FSD");

// const sum=function (a,b)
// {
//     a=Math.sqrt(a);
//     b=Math.sqrt(b);
//     return a+b;
// }

// console.log(sum(9,9));

// const sum=(a,b)=>{return a+b}
// console.log(sum(2,4));

//IIFE function
//Imediate invoke function as an expression= without calling the function

// (
//     ()=>
//     {
//         console.log("Hey... using iife");
//     }
// )();

// var a='hello';
// console.log(typeof(a));

// let a=20;
// if(a<40)
// {
//   let a=43;
//   console.log("Value inside block "+a)
// }
// console.log("Value of a outside block "+a)

//Callback
/*function sum(a,b)
{
    return a+b;
}

function msgwithSum(clbk, msg)
{
    const result= clbk(40,50);
    console.log("Hiii, "+msg+"and your result is="+result)
}

msgwithSum(sum,"Rahul");*/

function login(error, msg)
{
    if(error)
    {
        console.log("Error is: "+error)
    }
    else
    {
        console.log(msg)
    }
}

function Handler(username,password,clbk)
{
    if (username=="rohan" && password=="12345")
    {
        clbk(null, "Login Success")
    }
    else
    {
        clbk("Username or password is incorrect", null)
    }
}

Handler("rohan", 12345, login)