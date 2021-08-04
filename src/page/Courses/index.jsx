import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoures } from '../../redux/reducers/coureseReducers'
import CourseList from '../../components/courseList'
export default function Courses_khoa() {
    let dispatch = useDispatch()
    const courses = useSelector(state => state.courses)
    useEffect(() => {
       dispatch(getCoures())
    },[])
    console.log(courses.courses)
    return (

        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
            <CourseList offline={courses.courses.offline} online={courses.courses.online} />
                </div>
            </section>

        </main>

    )
}