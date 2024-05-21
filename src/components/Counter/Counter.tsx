import { useState } from "react"
import styles from './Counter.module.css'

//This is our Counter component with a return  and and export default 
const Counter = () => {

    //Inside our Counter Component we have a count use state
    const [count, setCount] = useState(0)

//handle increase function that handles our increase logic
    const handleIncrease = () => {
        //inside our handleincrease function we are using the setCount to increase our count by 1 each time by using a callback function prevCount => preCount + 1
        setCount(prevCount => prevCount + 1);
     
        
    }


    //This is our halde decrease function that first checks if count is greater than 0 then degrease by 1 otherwise do nothing
    const handleDecrease = () => {
        if(count > 0)
            {

                setCount(prevCount => prevCount - 1);
                console.log(count)
            }
    }


//here we return our jsx we have two buttons with onClicks that are passing in our functions handeIncrease and handleDecrease  each with text of + and - also a span that is rendering count
  return (
    <>
        <button className={styles['btnPrimary']} onClick={handleIncrease}>+</button>
        <span>{count}</span>
        <button className={styles['btnSecondary']} onClick={handleDecrease}>-</button>

    </>
  )
}
//this is exporting our Counter app so we can use it outside this component, In this case we need to render it in our App.tsx
export default Counter