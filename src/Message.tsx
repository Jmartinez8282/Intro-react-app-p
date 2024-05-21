//Functional component
//PascalCasing
let count = 0;
function Message()
{
    count++;
    console.log("Message called",count)
    //JSX: Javascript XML
    return <h1>Message: {count}</h1>
}
//this export will allows us to use this commponent where ever we import it
export default Message;