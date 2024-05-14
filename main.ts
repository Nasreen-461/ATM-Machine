import inquirer from "inquirer";


let myBalance = 10000;   //Dollar
let mypin = 1234;

let pinAnswer= await inquirer.prompt (
[     
    {
        name: "pin",
        message: "enter your pin code",
        type: "number"
    }
 ]  
);

   if(pinAnswer.pin === mypin)
      console.log(`correct pin code!!!`);

   let operationsAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "chack balance"]
            }
        ]
    );

    console.log(operationsAns);

    if(operationsAns.operation === "withdraw"){
     let amountAns = await inquirer.prompt(
        [
            {
             name: "amount",
             message: "enter your amount",
             type: "number"
            }
        ]
     );
     
          myBalance -= amountAns.amount;
          console.log("your remaining balance is:" + myBalance);

    }

    else if(operationsAns.operation === "check myBalance"){
        console.log("your balance is:" + myBalance)
    }
        {
    console.log(`incorect pin number`);
   }