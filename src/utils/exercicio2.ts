/* eslint-disable @typescript-eslint/no-explicit-any */
export function updateData(
  currentObject: Record<string, any>,
  newDataObject: Record<string, any>
): Record<string, any> {
  const result = { ...currentObject };

  for (const key in newDataObject) {
    if (key in currentObject) {
      result[key] = newDataObject[key];
    }
  }

  return result;
}
