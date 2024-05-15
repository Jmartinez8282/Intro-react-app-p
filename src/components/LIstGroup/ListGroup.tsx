import { useState } from "react";
import styles from './ListGroup.module.css'


//TypeScript feature called Interface
//using an interface we can define the shape of our object
//{items: [], heading: string}
interface ListProps {
  items: string []
  heading: string
  onSelectItem:(item:string) => void
}


const ListGroup = ({items,heading,onSelectItem}:ListProps) => {
 

  const [selectedIndex, setSelectedIndex] = useState(0);

  //counter
  // const [counter, setCounter] = useState(1);

  //name
  // const [name, setName] = useState("Jose");

  // const arr = useState(0);
  // console.log(arr)

  //arr[0] variable  (selectedIndex) current state
  //arr[1] updater function

  return (
    //JSX we must have one parent element example div fragment or empty Fragment <></>
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>NO item found</p>}
      <ul className={[styles.ListGroup,styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? styles['listGroupItem']
                : styles['listGroupItem']
            }
            onClick={()=>{
              setSelectedIndex(index)
              onSelectItem(item)
            }}
            key={index}
            
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
