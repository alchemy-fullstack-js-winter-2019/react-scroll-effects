export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(res => ({
      totalPages: res.info.pages,
      characters: res.results
    }));
}
