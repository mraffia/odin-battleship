const Ship = (length) => {
    let area = [];
    const getLength = () => length;

    for (let i = 0; i < length; i++) {
        area.push("o");
    }

    const hit = num => {
        area[num] = "x";
    }

    return { area, getLength, hit };
}

export { Ship };