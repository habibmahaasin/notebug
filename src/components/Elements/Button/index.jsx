const Button = (props) => {
  const { style, onClick = () => {}, type = "button", children } = props;
  return (
    <button className={`${style}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
