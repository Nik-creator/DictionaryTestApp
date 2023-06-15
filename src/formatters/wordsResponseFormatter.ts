import type { Word, WordsActionResponse } from '@/store/words/types'

const wordsResponseFormatter = (response: Word[], favoritesIds: String[]): WordsActionResponse => {
  const entityGroup: WordsActionResponse['group'] = response.map(({ id, meanings, text }) => ({
    id,
    entity: {
      meaningsIds: meanings.map(({ id }) => id),
      text
    }
  }))

  const meaningsDict: WordsActionResponse['meaningsDict'] = response.reduce((acc, { meanings }) => {
    const innerDict = meanings.reduce((prev, { id, ...props }) => {
      const isFavorite = favoritesIds.some((favorites) => Number(id) === Number(favorites));

      return {
        ...prev,
        [id]: { ...props, isFavorite }
      }
    }, {})
    return {
      ...acc,
      ...innerDict
    }
  }, {})

  return {
    group: entityGroup,
    meaningsDict
  }
}

export { wordsResponseFormatter }
