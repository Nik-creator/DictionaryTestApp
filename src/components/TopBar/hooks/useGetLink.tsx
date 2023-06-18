import React from 'react'
import { FavoriteNavigationButton } from '../ui/FavoriteNavigationLink';
import { MainNavigationLink } from '../ui/MainNavigationLink';
import { useIsFavoriteScreen } from '@/hooks/useIsFavoriteScreen';

const useGetLink = () => {
  const isFavoriteScreen = useIsFavoriteScreen()

  return isFavoriteScreen
    ? MainNavigationLink
    : FavoriteNavigationButton
}

export { useGetLink }