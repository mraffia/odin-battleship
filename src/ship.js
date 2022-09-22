const Ship = (length) => {
    let area = {};
    const getLength = () => length;

    const hit = coor => {
        area[coor] = "x";
    }

    const isSunk = () => {
        let sunk = true;
        for (const coor in area) {
            if (area[coor] === "o") {
                sunk = false;
            }
        }
        return sunk;
    }

    const setArea = (coor, axis) => {
        
    } 

    return { area, getLength, hit, isSunk };
}

export { Ship };