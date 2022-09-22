const GameBoard = () => {
    let board = {};

    const generateBoard = () => {
        let hor = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

        board = {};
        let coor = "";
        
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j < 11; j++) {
                coor = hor[i] + (j);
                board[coor] = "o";
            }
        }
    }


}