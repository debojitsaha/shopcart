export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const CapitalizeEachWord = (str: string) => {
  return str
    .split(" ")
    .map((word) => Capitalize(word))
    .join(" ");
};

export const separateWords = (input: string) => {
  const words = decodeURIComponent(input).split("%20");
  return words.length === 1 ? words[0] : words.join(" ");
};
