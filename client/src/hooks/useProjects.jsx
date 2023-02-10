import React, { useContext } from 'react'
import ProjecstContext from '../context/ProjectsProvider'

export const useProjects = () => {
  return useContext(ProjecstContext)
}


 