// Prompt to take the Froyo order.
const orderPrompt = prompt ("Please enter your FROYO order (include comma's Please): ");
let orderList = orderPrompt.split(",");
const inputOr= {};
console.log(orderList);

    for(i = 0; i < orderList.length; i++)
    {
        const flavor = orderList[i];
        if (inputOr[flavor] === undefined)
        {
            inputOr[flavor] = 0;
        }
        inputOr[flavor]++
        console.log(inputOr)
    }

    console.table(inputOr)