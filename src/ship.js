const Ship = (length) => {
    let area = [];
    const getLength = () => length;

    for (let i = 0; i < length; i++) {
        area.push("o");
    }

    const hit = num => {
        area[num] = "x";
    }

    const isSunk = () => {
        return !area.includes("o");
    }

    return { area, getLength, hit, isSunk };
}

export { Ship };