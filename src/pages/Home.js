import React ,{useState} from 'react'
import TopBar from '../components/bars/TopBar'
import TabelUsers from '../components/home/TabelUsers'
import {MarginPages} from '../styles/MarginPages'

const Home = ({HandelShow}) => {

  
  return (
    <MarginPages>
        <TopBar title={"الرئيسية"} HandelShow={HandelShow} />
        <TabelUsers />
    </MarginPages>
  )
}

export default Home