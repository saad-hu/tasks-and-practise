let userNum = prompt("Enter a number: ");
userNum = +userNum;

if(userNum === 1)
{
    console.log("1 is not a valid input.");
}

let primeNumbers = [];

outer:
for (let i = 2; i <= userNum; i++)
{   
    for (let j = 2; j < i; j++)
    {
        if (i%j == 0) continue outer;
    }
    primeNumbers.push(i);
}

let primeAre = `The prime numbers upto ${userNum} are: `

for (let i = 0; i < primeNumbers.length; i++)
{   
    if(i < primeNumbers.length - 1)
    {
        primeAre = `${primeAre}${primeNumbers[i]}, `;
    }
    else
    {
        primeAre = `${primeAre}and ${primeNumbers[i]}.`
    }
}

console.log(primeAre);