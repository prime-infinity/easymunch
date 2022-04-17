export const loadFromLocal = () => {
  try {
    const userInLocal = localStorage.getItem("emauth")
      ? JSON.parse(localStorage.getItem("emauth"))
      : null;
    return userInLocal;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export const saveToLocal = (user) => {
  try {
    const serialisedState = JSON.stringify(user);
    localStorage.setItem("emauth", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const removeFromLocal = () => {
  localStorage.removeItem("emauth");
};
