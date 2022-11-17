import React from 'react'
import Wallpaper from '../Wallpaper/Wallpaper'
import QuickSearch from '../Quicksearch/Quicksearch'
import Class from '../Class'
import CSS from './home.css';


export default function Home() {
  return (
    <React.Fragment>
        <Wallpaper/>
        <QuickSearch/>
        <Class />
        </React.Fragment>
       
  )
}
