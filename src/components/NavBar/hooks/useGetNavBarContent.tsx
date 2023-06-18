import { PartSpeechFilter } from '@/components/PartSpeechFilter'
import { favoritesPath } from '@/components/TopBar/constants/routePath'
import { useIsFavoriteScreen } from '@/hooks/useIsFavoriteScreen'
import React from 'react'
import { useLocation } from 'react-router-dom'

const useGetNavBarContent = () => {
  const isFavoriteScreen = useIsFavoriteScreen()

  return isFavoriteScreen ? <PartSpeechFilter /> : <></>
}

export { useGetNavBarContent }