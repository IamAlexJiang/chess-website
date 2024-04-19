const chess_openings = ({ chess_openings }) => {
  const {id, name, email} = chess_openings;
  
  return (
    <div className='list' key={id}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default chess_openings;