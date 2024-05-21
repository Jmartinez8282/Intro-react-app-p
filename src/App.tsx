import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/LIstGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import './App.css'
import { BsCalendarDateFill } from "react-icons/bs";
import Counter from "./components/Counter/Counter";
import { useState } from "react";
import Message from "./Message";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";



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

  const handleAnotherClick = () => {
    setIsVisible(true);
    console.log(isVisible,'from our handleAnotherClick function')
   
  }

  const [alertViible, setAlertViible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let count = 0;

  const handleClickAgain = () => {
    count++;
    console.log(count)
  }

  // const [firstName, setFirstName] = useState("Jose");
  // const [lastName, setLastName] = useState("Martinez");

  // const fullName = firstName +" "+ lastName;

const [person, setPerson] = useState({
  firstName: "Jose",
  lastName: "Martinez"
});

  const [drink, setDrink] = useState({
    title:"Americano",
    price: 8,
  });

  const handledrink = () => {
    // drink.price = 10
    // console.log(drink.price)
    const newDrink = {
      title: drink.title,
      price: 10
    }
    setDrink(newDrink);
  }
  
  //upate a nested object
  const [customer, setCustomer] = useState({
    name: 'Jose',
    address:{
      city:"Stockton",
      zipCode: 94402
    }
  });

  //create a hanlde click function to help us update this nested object
  const handleCustomer = () => {
    setCustomer({...customer,address:{...customer.address,zipCode:95212}})
  }

  //How to update an Array///
  //create a useState to hold two strings in an Array
  const [tags, setTags] = useState(['happy ','cheerful ']);


  //create a helper function to add to our array with javascript
  // tags.push('excite');
const handleArray = () => {

  setTags([...tags,"exciting "]);
  console.log(tags);
}

const handleRemoveArray = () => {
  setTags(tags.filter(tag => tag !== 'happy '));
}

const handleUpdate = () => {
  setTags(tags.map(tag => tag == 'happy ' ? 'happiness ' : tag));
}

//Updating an Array of objects

const [bugs, setBugs] = useState([
  {id: 1, title: 'Bug 1', fixed: false},
  {id: 2, title: 'Bug 2', fixed: false},
  {id: 3, title: 'Bug 3', fixed: false},
]);

const handleBug = () => {
  setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
  console.log(bugs);
}

const handleClear = () => {
  setCartItem([]);
}


//use state that is going to be shared with our nav component and our cart component
const [cartItem, setCartItem] = useState(['Product 1 ', 'Product 2 ']);

//How to Share state with other components______________________________________

//lets create our useState for our cartItems hard code three items in an array





  return (
    <>
      <div>

      <NavBar cartItemCount={cartItem.length}/>
      <Cart onClear={handleClear} cartItems={cartItem}/>
     {/* <Message/>
     <Message/>
     <Message/> */}
      <BsCalendarDateFill color="red" size={80} />
      {alertViible ?  <Alert onClose={() => setAlertViible(false)}>Hey I am an alert</Alert>:null}
       <Button onClickFunction={handleBug}> Bug Fix</Button>
       {bugs.map(bug => <p key={bug.id}>{bug.id} {bug.fixed ? 'fixed' : 'New'}</p>)}
       <Button onClickFunction={handleUpdate}> Clear button</Button>
       <Button onClickFunction={handleUpdate}> update Happy</Button>
       <Button onClickFunction={handleUpdate}> update Happy</Button>
       <Button onClickFunction={handleRemoveArray}> Remove Happy</Button>
       <Button onClickFunction={handleArray}> tag Array Update Button</Button><span>{tags}</span>
       <Button onClickFunction={handleCustomer}> Customer Update Button</Button><span>{customer.address.zipCode}</span>
       <Button onClickFunction={handledrink}> Drink Update Button</Button><span>{drink.price}</span>
       <Button onClickFunction={() => setAlertViible(!alertViible)}> Alert Button</Button>
       <Button color="primary" onClickFunction={handleClickAgain}>count Example</Button><span>{count}</span>
       <Button color="warning" onClickFunction={() =>  console.log(isVisible,"from our three button")}> Three Button</Button>
       <Button color="info" onClickFunction={handleAnotherClick}>Visible</Button>
       <Counter/>
       {/* {fullName} */}
       {person.firstName} {person.lastName}
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
