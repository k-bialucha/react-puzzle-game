import row1col1 from "../assets/images/row-1-col-1.png";
import row1col2 from "../assets/images/row-1-col-2.png";
import row1col3 from "../assets/images/row-1-col-3.png";
import row2col1 from "../assets/images/row-2-col-1.png";
import row2col2 from "../assets/images/row-2-col-2.png";
import row2col3 from "../assets/images/row-2-col-3.png";
import row3col1 from "../assets/images/row-3-col-1.png";
import row3col2 from "../assets/images/row-3-col-2.png";
import row3col3 from "../assets/images/row-3-col-3.png";

const puzzles = [
    { id: "11", image: row1col1 },
    { id: "12", image: row1col2 },
    { id: "13", image: row1col3 },
    { id: "21", image: row2col1 },
    { id: "22", image: row2col2 },
    { id: "23", image: row2col3 },
    { id: "31", image: row3col1 },
    { id: "32", image: row3col2 },
    { id: "33", image: row3col3 }
];

const getRandomInteger = range => 
    Math.floor(Math.random()*range)
;

const TILE_SIZE = 124;
const MARGIN_SIZE = 5;
const CONTAINER_WIDTH = 360;
const CONTAINER_HEIGHT = 200;

const getRandomPosition = () => ({
    x: MARGIN_SIZE + getRandomInteger(CONTAINER_WIDTH - TILE_SIZE - MARGIN_SIZE),
    y: MARGIN_SIZE + getRandomInteger(CONTAINER_HEIGHT - TILE_SIZE - MARGIN_SIZE),
    zIndex: 10 + getRandomInteger(10)
})

const generatePuzzles = () =>
    puzzles.map( puzzle => ({
        ...puzzle,
        position: getRandomPosition()
    }))
;

export default generatePuzzles;