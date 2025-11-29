export const formatRoute = (routeTitle: string) => {
  return routeTitle
    .replace(/[^a-zA-Z\s]/g, "")
    .toLowerCase()
    .split(" ")
    .join("-");
};
