import React from 'react'
import { useRenderContent } from './hooks/useRenderContent'

const FavoritesPage = () => {
  const renderContent = useRenderContent()

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default FavoritesPage