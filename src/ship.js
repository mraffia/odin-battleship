const Ship = (length) => {
    let area = {};

    const getLength = () => length;
    const getArea = () => area;

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

    const setArea = (coor) => {
        area[coor] = "o";
    } 

    return { getLength, getArea, hit, isSunk, setArea };
}

export { Ship };