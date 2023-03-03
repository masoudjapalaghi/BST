export function DeleteDuplicateInArray(array = []) {
  let uniqueChars = [...new Set(array)];

  return uniqueChars;
}

export function FilterOnLyNumberInArray(array = []) {
  let OnlyNumber = array.filter(Number);

  return OnlyNumber;
}
