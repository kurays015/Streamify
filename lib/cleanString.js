export default function cleanString(string) {
  // Regular expression to remove non-alphanumeric characters
  const regex = /[^a-zA-Z0-9\s]/g;

  // Remove non-alphanumeric characters and return the cleaned string
  return string.replace(regex, "");
}
