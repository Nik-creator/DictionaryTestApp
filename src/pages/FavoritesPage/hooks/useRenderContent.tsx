import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { fetchMeaningsAction } from '@/store/words/actions'
import { useMeaningsIds, useMeaningsStatus } from '@/store/words/selectors'
import { DataLoadingStates } from '@/types'
import React, { useEffect, useMemo } from 'react'

const useRenderContent = () => {
  const dispatch = useAppDispatch()

  const ids = useMeaningsIds()
  const loadingStatus = useMeaningsStatus()

  const idsLength = ids.length

  useEffect(() => {
    dispatch(fetchMeaningsAction())
  }, [])

  const renderItem = useMemo(() => {
    return idsLength
      ? ids.map((id) => (
        <div key={id}>{id}</div>
      ))
      : <div>не найдено</div>
  }, [idsLength])

  const renderContent = useMemo(() => {
    if (loadingStatus === DataLoadingStates.LOADING) {
      return <div>ЗАГРУЗКА</div>
    }
    return renderItem
  }, [idsLength, loadingStatus])

  return renderContent
}

export { useRenderContent }