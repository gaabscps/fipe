export function maskify(str: string): string {
  if (str.length <= 4) {
    return str;
  }

  const lastFour = str.slice(-4);
  const maskedPart = "#".repeat(str.length - 4);

  return maskedPart + lastFour;
}
