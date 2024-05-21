interface cartProps {
    cartItems: string[];
    onClear: () => void;
}

const Cart = ({cartItems,onClear}:cartProps) => {
  return (
    <>
        <p>
            Cart: 
        </p>
        <ul>
          {cartItems.map(item => <li key={item}> {item}</li>)}

        </ul>
        <button onClick={onClear}>Clea Cart Items</button>
    </>
  )
}

export default Cart