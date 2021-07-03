const Button = ({ btnType = "primary", type, children }) => {
  const classes = `btn btn-${btnType}`;
  return (
    <button className={classes} type={type}>
      {children} 🍪
    </button>
  );
};

export default Button;
