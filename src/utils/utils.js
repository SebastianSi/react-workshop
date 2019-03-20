export const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;
export const randomInt = (limit = 500) => Math.floor(Math.random() * limit);
