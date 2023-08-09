export const isHexColor = color => {
    return /^#([0-9A-F]{3}){1,2}$/i.test(color);
};
