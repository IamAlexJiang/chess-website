import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js'; // Correctly importing Chess

const ChessGame = () => {
  const [chess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());

  const onDrop = ({ sourceSquare, targetSquare }) => {
    console.log('Source Square:', sourceSquare);
    console.log('Target Square:', targetSquare);

    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Always promote to a queen for simplicity
    });

    if (move === null) {
      console.log('Invalid move');
      return;
    }

    setFen(chess.fen());
  };

  return (
    <div className="chessboard-container">
      <Chessboard
        position={fen}
        onDrop={onDrop}
        width={400}
      />
    </div>
  );
};

export default ChessGame;
