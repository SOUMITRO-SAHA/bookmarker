export const slugify = (str) => {
  if (!str) {
    return "";
  }
  // Remove special characters from the start and end of the string
  str = str.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

  const s = str
    .replace(/\s+/g, "-") // Replace consecutive spaces with a single hyphen
    .replace(/[^\w\s-]/g, "") // Remove special characters except hyphens
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .replace(/-+/g, "-") // Replace consecutive hyphens with a single hyphen
    .toLowerCase(); // Convert to lowercase

  return s;
};
