export const validateInput = (text: string) => {
  return /^[-,.%+();:?!"'а-яА-ЯёЁәӘһҺҗҖөӨүҮңҢ0-9\s]+$/.test(text.trim());
}

export const checkStatus = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.status} : ${response.statusText}`);
  }
}
