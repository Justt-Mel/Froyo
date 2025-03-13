// Prompt to take the Froyo order.
const orderPrompt = prompt ("Please enter your FROYO order (include comma's Please): ");
let orderList = orderPrompt.split(",");
// Created object in order to take the input values of the prompt
const inputOr= {};
//printed out array to show that input was stored
console.log(orderList);
// For loop to copy array to the object defined above
    for(i = 0; i < orderList.length; i++)
    {
        // New varible created to hold the value of the flavors ordered 
        const flavor = orderList[i];
        //if statement created so that if a flavor has yet to be defined it can create an object for it
        if (inputOr[flavor] === undefined)
        {
            inputOr[flavor] = 0;
        }
        inputOr[flavor]++
    }
    //printed out objext to show data was properly stored
    console.log(inputOr)
// prints out the table for for the inputOr Objects
    console.table(inputOr)