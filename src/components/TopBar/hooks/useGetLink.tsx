import React from 'react'
import { useLocation } from 'react-router-dom'
import { favoritesPath } from '../constants/routePath';
import { FavoriteNavigationButton } from '../ui/FavoriteNavigationLink';
import { MainNavigationLink } from '../ui/MainNavigationLink';

const useGetLink = () => {
  const { pathname } = useLocation()

  if (favoritesPath.includes(pathname)) {
   return MainNavigationLink
  }

  return FavoriteNavigationButton
}

export { useGetLink }