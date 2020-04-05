export const isValid = (value) => {
  if (value.length < 1) return false;
  if (value.length > 10) return false;
  if (!/^[a-zA-Z0-9]+$/.test(value)) return false;
  return true;
};
