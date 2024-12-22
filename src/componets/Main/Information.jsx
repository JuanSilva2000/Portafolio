import React from 'react'
import '../../css/Main/Information.css'
import { Education } from './secctions/Education';
import { Projects } from './secctions/Projects';
import { Skills } from './secctions/Skills';

export const Information = () => {
  return (
    <div className='info-container'>
     <Education/>
     <Projects/>
     <Skills/>
    </div>
  )
}
