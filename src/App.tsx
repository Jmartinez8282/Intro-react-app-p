import Alert from "./components/Alert";
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

  return (
    <>
      <div>
        <Alert>45</Alert>
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
