const truncateRegex = /^([a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const truncate = (key) => {
  const match = key?.match(truncateRegex);
  if (!match) return key;
  return `${match[1]}…${match[2]}`;
};