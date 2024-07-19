export const addSpace = (str) => {
    return str.replace(/(\d)([a-zA-Z])/g, "$1 $2");
};

export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const firstLetter = (str) => {
    return str[0];
};
