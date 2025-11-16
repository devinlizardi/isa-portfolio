export const formatRoute = (routeTitle: string) => {
  return routeTitle.toLowerCase().split(" ").join("-");
};
