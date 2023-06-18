import React from 'react'
import { SearchForm } from '@/components/SearchForm'
import { PartSpeechFilter } from '@/components/PartSpeechFilter'
import { useGetNavBarContent } from '../hooks/useGetNavBarContent'

const NavBar = () => {
  const filterForm = useGetNavBarContent()
  return (
    <div>
      <SearchForm />
      {filterForm}
    </div>
  )
}

export { NavBar }