import React, { useEffect, useState } from 'react'

import Testimonial from "./components/testtimonial";
import Gallery from './components/gallery'
import Action from './components//action'
import Banner from './components/banner'
import Different from './components/different'
import { useDispatch, useSelector } from 'react-redux'
import { getHome } from '../../redux/reducers/homeReducers'
import homeapi from '../../api/homeapi';
import CourseList from '../../components/courseList'
import UseStateSecssion from '../../core/useStateSecsion'
export default function Home() {
    let dispatch = useDispatch()
    const homes = useSelector(state => state.home)
    let [state, setState] = UseStateSecssion({
        gallery: [],
        online: [],
        offline: [],
        review: [],
        api: true,
        loading: true
    }, 'home')

    useEffect(() => {
        dispatch(getHome())
        const pageHome=homes.home
            console.log(pageHome)
        if(state.api)
        {
           
         
            setState({
                ...state,
              pageHome,
              loading:false,
              api:false
            })
        }
    },[])
    if( !homes.home){
        return 'Loading..........'
    }
 
    return (
        <main className="homepage" id="main">
            <Banner />

            <CourseList offline={homes.home.offline} online={homes.home.online} />
            <Different />
            <Testimonial review={homes.home.review} />
            <Gallery gallery={homes.home.gallery} />
            <Action />

        </main>
    )
}