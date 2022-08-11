export const validateInput = (text: string) => {
  return /^[-,.%+();:?!"'а-яА-ЯёЁәӘһҺҗҖөӨүҮңҢ0-9\s]+$/.test(text.trim());
}
