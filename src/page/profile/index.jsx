import React from 'react';
import { useSelector } from 'react-redux';
import {useRouteMatch} from 'react-router'
import {NavLink} from 'react-router-dom'
import avt from '../../assets/img/avatar-lg.png'
// import useAuth from '../../core/useAuth';

export default function Profile({children}) {
    let {url}=useRouteMatch()
    let auth =useSelector(state => state.auth);
    const user=auth.user
    return (

        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={avt} alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={url}> Thông tin tài khoản </NavLink>
                            <NavLink to={`${url}/course`} >Khóa học của bạn </NavLink>
                            <NavLink to={`${url}/project`} >Dự án đã làm </NavLink>
                            <NavLink to={`${url}/payment`} >Lịch sử thanh toán </NavLink>
                            <NavLink to={`${url}/coins`} >Quản lý COIN của tôi </NavLink>
                        </div>
                        <div className="tab-content">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    
    );
}
