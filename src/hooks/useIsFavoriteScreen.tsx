import { favoritesPath } from '@/components/TopBar/constants/routePath'
import React from 'react'
import { useLocation } from 'react-router-dom'

/**
 * @deprecated
 * Временный костыль
 */
const useIsFavoriteScreen = () => {
  const { pathname } = useLocation()

  return favoritesPath.includes(pathname)
}

export { useIsFavoriteScreen }