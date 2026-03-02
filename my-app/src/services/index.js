const BASE_URL = "https://fakestoreapi.com";

export const API = async ({ endpoint }) => {
  const URL = BASE_URL + endpoint;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
