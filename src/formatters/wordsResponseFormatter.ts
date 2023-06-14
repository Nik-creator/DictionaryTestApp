import type { Word, WordsActionResponse } from '@/store/words/types'

const wordsResponseFormatter = (response: Word[]): WordsActionResponse => {
  const entityGroup: WordsActionResponse['group'] = response.map(({ id, meanings, text }) => ({
    id,
    entity: {
      meaningsIds: meanings.map(({ id }) => id),
      text
    }
  }))

  const meaningsDict: WordsActionResponse['meaningsDict'] = response.reduce((acc, { meanings }) => {
    const innerDict = meanings.reduce((prev, { id, ...props }) => {
      return {
        ...prev,
        [id]: props
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
