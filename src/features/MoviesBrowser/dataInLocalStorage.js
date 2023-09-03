const setLocalStorage = (data, name) =>
  localStorage.setItem(name, JSON.stringify(data));

const getDataFromLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name));

export { setLocalStorage, getDataFromLocalStorage };
