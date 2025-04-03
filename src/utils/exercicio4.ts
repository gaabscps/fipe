export function checkIfTheFirstLetterIsUppercase(word: string) {
  if (!word || word.length === 0) {
    return false;
  }

  const firstLetter = word[0];

  return /^[A-Z]/.test(firstLetter);
}
