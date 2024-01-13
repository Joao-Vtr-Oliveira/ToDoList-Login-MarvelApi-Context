export const marvelApiRequest = async (offset: number) => {
  const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bacb409123d9363a410cc00b0231526e&hash=10aeae3787f41c0b8295e013fa721315&limit=10&offset=${offset}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Ocorreu um erro durante a solicitação');
  }
}