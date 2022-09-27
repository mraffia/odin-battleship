export default (length) => {
  const area = {};

  const getLength = () => length;
  const getArea = () => area;

  const hit = (coor) => {
    area[coor] = 'x';
  };

  const isSunk = () => {
    const areas = Object.entries(area);

    for (let i = 0; i < areas.length; i++) {
      if (areas[i][1] === 'o') {
        return false;
      }
    }

    return true;
  };

  const setArea = (coor) => {
    area[coor] = 'o';
  };

  return {
    area,
    getLength,
    getArea,
    hit,
    isSunk,
    setArea,
  };
};
