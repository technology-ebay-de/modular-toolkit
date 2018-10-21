const colors = [['#002b36', '#073642'], ['#78b9e6', '#268bd2']];

let colorIndex = 0;

export default () => {
    const nextColors = colors[colorIndex++];
    if (colorIndex === colors.length) {
        colorIndex = 0;
    }
    return nextColors;
};
