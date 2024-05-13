import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";

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
