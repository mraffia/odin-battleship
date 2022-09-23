const Ship = (length) => {
    let area = {};

    const getLength = () => length;
    const getArea = () => area;

    const hit = coor => {
        area[coor] = "x";
    }

    const isSunk = () => {
        for (const coor in area) {
            if (area[coor] === "o") {
                return false;
            }
        }
        return true;
    }

    const setArea = (coor) => {
        area[coor] = "o";
    } 

    return { 
        getLength, 
        getArea, 
        hit, 
        isSunk, 
        setArea 
    };
}

export { Ship };