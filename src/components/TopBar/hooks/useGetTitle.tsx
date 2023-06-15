import React from 'react'
import { useLocation } from 'react-router-dom'
import { favoritesPath } from '../constants/routePath';

const useGetTitle = () => {
  const { pathname } = useLocation()

  let title = ''
  let routePath = ''

  if (favoritesPath.includes(pathname)) {
    title = 'Избранное'
    routePath = '/'
  } else {
    title = 'Главная'
    routePath = '/favorites'
  }

  return {
    title,
    routePath
  }

}

export { useGetTitle }