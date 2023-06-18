import React, { useCallback, useMemo, useState } from 'react'
import { useFilteredPartOfSpeechCheckboxValues, usePartsSpeech } from '@/store/words/selectors'
import { PartSpeechFilterItem } from '../ui/PartSpeechFilterItem'
import { CheckBoxValues } from '../types'
import type { PartOfSpeechCode } from '@/store/words/types'

const useRenderFilterItem = () => {
  const partsSpeech = usePartsSpeech()
  const checkboxValues = useFilteredPartOfSpeechCheckboxValues()
  const hashCheckboxValues = JSON.stringify(checkboxValues)

  const renderItems = useMemo(() => {
    return partsSpeech.map((code, index) => (
      <PartSpeechFilterItem
        key={`${code}_${index}`}
        checked={checkboxValues[code]}
        speechCode={code}
      />
    ))
  }, [partsSpeech.length, hashCheckboxValues])

  return renderItems
}

export { useRenderFilterItem }