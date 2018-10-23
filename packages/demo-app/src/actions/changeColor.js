export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = (background, header) => ({
    type: CHANGE_COLOR,
    background,
    header
});
