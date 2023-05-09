const StatusMessage = ({ winner, isXNext, square }) => {
  const noMovesLeft = square.every(squareValue => squareValue !== null);
  const nextPlayr = isXNext ? 'X' : '0';

  const renderStatusMessage = () => {
    if (winner)
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );

    if (!winner && noMovesLeft)
      return (
        <>
          <span className="text-orange">0</span> and{' '}
          <span className="text-green">X</span> tie
        </>
      );

    if (!winner && !noMovesLeft)
      return (
        <>
          Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayr}
          </span>
        </>
      );

    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()} </h2>;
};

export default StatusMessage;
