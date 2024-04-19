const ChessOpening = ({ chess_openings }) => (
  <div className='Openings'>
    {chess_openings.map((chess_openings) => {
      return <ChessOpening chess_openings ={chess_openings}/>;
    })}
  </div>
);

export default ChessOpening;