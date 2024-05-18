const data = [
 {  id: 1 ,
    title: "Alekhine Defense",
    description: 
        "Alekhine's Defense responses to 1.e4 with Nf6.",
    category: "King's Pawn",
    cover: "Alekhine Defense.jpg",
    rating: {
        rate: 2.0,
    },
 },
 {  id: 2 ,
    title: "Bishop's Opening",
    description: 
        "The Bishop's Opening starts with 1.e4 e5 2.Bc4.",
    category: "King's Pawn",
    cover: "Bishop's Opening.jpg",
    rating: {
        rate: 4.5,
    },
 },
 {  id: 3 ,
    title: "Caro-Kann",
    description: 
        "Caro-Kann responses to 1.e4 with c6.",
    category: "King's Pawn",
    cover: "Caro-Kann.jpg",
    rating: {
        rate: 4.9,
    },
 },
]

const getMainlines = () => {
    return data;
}

export {getMainlines}