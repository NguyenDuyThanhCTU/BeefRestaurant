const Button = ({ text, style, handleClick }) => {
  return (
    <button
      className={`${style} rounded-[10px] font-montserrat font-medium `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
