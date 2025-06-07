export const splitByLength = (text: string, maxChars: number): string[] => {
  const result = [];
  let i = 0;

  while (i < text.length) {
    result.push(text.slice(i, i + maxChars));
    i += maxChars;
  }

  return result;
};
export const pageSplitByLine = (line: number, pageSize: number): number => {
  const page = Math.floor(line / pageSize);
  return page;
};
