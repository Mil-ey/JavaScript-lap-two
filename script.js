let number = 17
if (number > 0)
{
    console.log("Positive");
}
else if (number < 0)
{
    console.log("Negative");
}
else
{
    console.log("Zero");
}
let day = 3
switch (day) 
{
    case 1: 1
        console.log("Monday");
        break;
    case 2: 2
        console.log("Tuesday");
        break;
    case 3: 3
        console.log("Wednesday");
        break;
    case 4: 4
        console.log("Thursday");
        break;
    case 5: 5
        console.log("Friday");
        break;
    case 6: 6
        console.log("Saturday");
        break;
    case 7: 7
        console.log("Sunday");
        break;
    default: 
        console.log("Not a valid day");
        break;
}


for (let i = 0; i <=5; i++)
{
    if (i === 3)
    {
        continue;
    }
    console.log(i);
}
let i = 1;
while (i <= 5)
{
    console.log(i);
    i++;
    if (i === 3)
    {
        continue;
    }
}

let j = 1;
do
{
    console.log(j);
    j++;
    if (j === 3)
      
      { continue;
}
}
while (j <= 5);

let globalVar = "I am a global";
function testScope()
{
    let localVar = "I am a local";
    console.log(globalVar);
    console.log(localVar);
}
testScope();
console.log(globalVar);
console.log(localVar);
 
