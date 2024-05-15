import styles from './Button.module.css';

interface ButtonProps {
    children: string;
    onClickFunction: () => void
    color?:string
}

const Button = ({children,onClickFunction,color="primary"}:ButtonProps) => {
  return (
    <>
      <button className={[styles.btn,styles['btn-' + color]].join(" ")} onClick={onClickFunction} style={{margin:"20px"}}>{children}</button>
    </>
  );
};

export default Button;
