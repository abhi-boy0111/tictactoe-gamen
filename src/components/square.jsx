const Square = ({ value, onClick }) => {
  //console.log(children);

  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
