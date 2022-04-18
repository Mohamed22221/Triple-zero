import React ,{useState} from 'react'
import TopBar from '../components/bars/TopBar'
import {MarginPages} from '../styles/MarginPages'

const Home = ({HandelShow}) => {

  
  return (
    <MarginPages>
        <TopBar title={"الرئيسية"} HandelShow={HandelShow} />
    </MarginPages>
  )
}

export default Home