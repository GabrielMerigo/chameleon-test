export const httpGet = (api) => {
  return fetch(api).then((res) => res.json());
};
