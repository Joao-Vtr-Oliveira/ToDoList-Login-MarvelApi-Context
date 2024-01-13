export const marvelApiRequest = async (offset: number) => {
  const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=63e19051bb0728221eb6e37c1dfc829a&hash=b7fe6a2a4d975bc2012cbb1f9b5f7a32&limit=10&offset=${offset}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Ocorreu um erro durante a solicitação');
  }
}
  