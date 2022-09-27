export const isInputValid = (text: string) => {
  return /^[-,.%+();:?!"'\sа-яА-ЯёЁәӘһҺҗҖөӨүҮңҢ0-9\s]+$/.test(text.trim());
}

export const checkStatus = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.status} : ${response.statusText}`);
  }
}
