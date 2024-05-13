
interface ButtonProps {
    children: string;
    onClickFunction: () => void
    color?:string
}

const Button = ({children,onClickFunction,color="primary"}:ButtonProps) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClickFunction} style={{margin:"20px"}}>{children}</button>
    </>
  );
};

export default Button;
