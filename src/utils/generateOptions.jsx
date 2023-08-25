export const generateOptions = (items) => {
  return items?.map((item) => ({
    children: <a href={item.image}>{item.title}</a>,
  }));
};
