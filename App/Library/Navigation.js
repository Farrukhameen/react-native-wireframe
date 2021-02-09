export const isActive = (route, path, style) => {
  if (path.includes(route.name)) {
    return style;
  }
  return {};
};

export const isClockedIn = (token, clockedIn) => token.length > 0 && clockedIn;
