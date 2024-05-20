const data = [
 {  id: 1 ,
    title: "Alekhine Defense",
    description: 
        "Alekhine's Defense responses to 1.e4 with Nf6.",
    category: "King's Pawn",
    cover: "Alekhine Defense.jpg",
    Rating:{
        Usage: 3,
        Difficulty: 9,
    },
 },
 {  id: 2 ,
    title: "Bishop's Opening",
    description: 
        "The Bishop's Opening starts with 1.e4 e5 2.Bc4.",
    category: "King's Pawn",
    cover: "Bishop's Opening.jpg",
    Rating:{
        Usage: 4,
        Difficulty: 8,
    },
 },
 {  id: 3 ,
    title: "Caro-Kann",
    description: 
        "Caro-Kann responses to 1.e4 with c6.",
    category: "King's Pawn",
    cover: "Caro-Kann.jpg",
    Rating:{
        Usage: 10,
        Difficulty: 7,
    },
 },
 {  id: 4 ,
    title: "Danish Gambit",
    description: 
        "Danish Gambit is an opening that starts with 1.e4, e5 2.d4.",
    category: "King's Pawn",
    cover: "Danish Gambit.jpg",
    Rating:{
        Usage: 6,
        Difficulty: 8,
    },
 },
 {  id: 5 ,
    title: "Four Knights Opening",
    description: 
        "Four Knights Opening start with moves 1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6.",
    category: "King's Pawn",
    cover: "Four Knights Opening.jpg",
    Rating:{
        Usage: 8,
        Difficulty: 5,
    },
 },
 {  id: 6 ,
    title: "French Defense",
    description: 
        "French Defense starts with moves 1.e4 e6",
    category: "King's Pawn",
    cover: "French Defense.jpg",
    Rating:{
        Usage: 9,
        Difficulty: 6,
    },
 },
 {  id: 7 ,
    title: "Italian Opening",
    description: 
        "Italian Opening starts with moves 1. e4 e5 2. Nf3 Nc6 3. Bc4",
    category: "King's Pawn",
    cover: "Italian Opening.jpg",
    Rating:{
        Usage: 10,
        Difficulty: 3,
    },
 },
 {  id: 8 ,
    title: "King's Gambit",
    description: 
        "King's Gambit starts with 1.e4 e5 2. f4.",
    category: "King's Pawn",
    cover: "King's Gambit.jpg",
    Rating:{
        Usage: 3,
        Difficulty: 8,
    },
 },
 {  id: 9 ,
    title: "Nimzowitch Defense",
    description: 
        "Nimzowitch Defense starts with 1. e4 Nc6.",
    category: "King's Pawn",
    cover: "Nimzowitch Defense.jpg",
    Rating:{
        Usage: 4,
        Difficulty: 6,
    },
 },
 {  id: 10 ,
    title: "Petrov",
    description: 
        "Petrov defense starts with 1. e4 e5 2. Nf3 Nf6.",
    category: "King's Pawn",
    cover: "Petrov.jpg",
    Rating:{
        Usage: 5,
        Difficulty: 6,
    },
 },
 {  id: 11 ,
    title: "Philidor",
    description: 
        "Philidor defense starts with 1. e4 e5 2. Nf3 d6.",
    category: "King's Pawn",
    cover: "Philidor Defense.jpg",
    Rating:{
        Usage: 3,
        Difficulty: 3,
    },
 },
 {  id: 12 ,
    title: "Pirc Defense",
    description: 
        "Pirc Defense starts with 1. e4 d6.",
    category: "King's Pawn",
    cover: "Pirc Defense.jpg",
    Rating:{
        Usage: 7,
        Difficulty: 5,
    },
 },
 {  id: 13 ,
    title: "Ruy-Lopez",
    description: 
        "Ruy-Lopez starts with 1. e4 e5 2. Nf3 Nc6 3. Bb4",
    category: "King's Pawn",
    cover: "Ruy-Lopez.jpg",
    Rating:{
        Usage: 8,
        Difficulty: 7,
    },
 },
 {  id: 14 ,
    title: "Scandinavian Defense",
    description: 
        "Scandinavian Defense starts with 1. e4 d5",
    category: "King's Pawn",
    cover: "Scandinavian Defense.jpg",
    Rating:{
        Usage: 8,
        Difficulty: 7,
    },
 },
 {  id: 15 ,
    title: "Scholar's Mate",
    description: 
        "Scholar's Mate is a four-move checkmate with the following move: 1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6?? 4. Qxf7#.",
    category: "King's Pawn",
    cover: "Scholar's Mate.jpg",
    Rating:{
        Usage: 7,
        Difficulty: 1,
    },
 },
 {  id: 16 ,
    title: "Scotch Opening",
    description: 
        "Scotch Opening starts with 1. e4 e5 2. Nf3 Nc6 3. d4.",
    category: "King's Pawn",
    cover: "Scotch Opening.jpg",
    Rating:{
        Usage: 7,
        Difficulty: 6,
    },
 },
 {  id: 17 ,
    title: "Sicillian Defense",
    description: 
        "Sicillian Defense starts with 1.e4 c5",
    category: "King's Pawn",
    cover: "Sicillian Defense.jpg",
    Rating:{
        Usage: 9,
        Difficulty: 8,
    },
 },
 {  id: 18 ,
    title: "Vienna Opening",
    description: 
        "Vienna Opening starts with 1. e4 e5 2. Nc3",
    category: "King's Pawn",
    cover: "Vienna Opening.jpg",
    Rating:{
        Usage: 6,
        Difficulty: 8,
    },
 },
]

const getMainlines = () => {
    return data;
}

export {getMainlines}