import { useState } from "react";

// import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  //counter
  const [counter, setCounter] = useState(1);

  //name
  const [name, setName] = useState("Jose");

  // const arr = useState(0);
  // console.log(arr)

  //arr[0] variable  (selectedIndex) current state
  //arr[1] updater function

  return (
    //JSX we must have one parent element example div fragment or empty Fragment <></>
    <>
      <h1>List</h1>
      {items.length == 0 && <p>NO item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={()=>{
              setSelectedIndex(index)
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
