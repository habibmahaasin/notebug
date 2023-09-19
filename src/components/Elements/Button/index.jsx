const Button = (props) => {
  const { style, onClick = () => {}, type = "button" } = props;
  return (
    <button className={`${style}`} type={type} onClick={onClick}>
      Add Note
    </button>
  );
};

export default Button;
