import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/LIstGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import './App.css'
import { BsCalendarDateFill } from "react-icons/bs";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    console.log("I was clicked")
  }

  return (
    <>
      <div>
      <BsCalendarDateFill color="red" size={80} />
        <Alert>45</Alert>
       <Button onClickFunction={handleClick}> One Button</Button>
       <Button color="primary" onClickFunction={handleClick}> two Button</Button>
       <Button color="warning" onClickFunction={handleClick}> Three Button</Button>
       <Button color="info" onClickFunction={handleClick}> Four Button</Button>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <ListGroup
          items={students}
          heading="Students"
          onSelectItem={handleSelectItem}
        />
        <MyuseStateExample />
      </div>
    </>
  );
}

export default App;
