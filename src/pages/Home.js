import React ,{useState} from 'react'
import TopBar from '../components/bars/TopBar'
import {MarginPages} from '../styles/MarginPages'

const Home = () => {
  return (
    <MarginPages>
        <TopBar title={"الرئيسية"} />
    </MarginPages>
  )
}

export default Home