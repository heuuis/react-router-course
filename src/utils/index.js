export const slugify = (name) => {
  return name.toLowerCase().split(" ").join("-");
};
