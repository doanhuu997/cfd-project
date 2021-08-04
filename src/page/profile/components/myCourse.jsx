import React, { useState,useEffect } from 'react';
import userApi from '../../../api/userApi';

export default function MyCourse() {
// let [course,setCourse]=useState()
// useEffect( async() => {
//     let res=await userApi.course()
// }, [])
// if(!course) return "Loading ......."
    return (
        <div className="tab2" >
            <div className="item">
                <div className="cover">
                    <img src="../img/img3.png" alt="" />
                </div>
                <div className="info">
                    <a href="#" className="name">
                        front-end căn bản
</a>
                    <div className="date">Khai giảng ngày 09/09/2019</div>
                    <div className="row">
                        <div className>
                            <img src="../img/clock.svg" alt="" className="icon" />54 giờ
</div>
                        <div className>
                            <img src="../img/play.svg" alt="" className="icon" />25 video
</div>
                        <div className>
                            <img src="../img/user.svg" alt="" className="icon" />20 học viên
</div>
                    </div>
                    <div className="process">
                        <div className="line">
                            <div className="rate" style={{ width: '30%' }} />
                        </div>
30%
</div>
                    <div className="btn overlay round btn-continue">
                        Tiếp tục học
</div>
                </div>
            </div>
            <div className="item">
                <div className="cover">
                    <img src="../img/img7.png" alt="" />
                </div>
                <div className="info">
                    <a href="#" className="name">
                        front-end nâng cao
</a>
                    <div className="date">Khai giảng ngày 09/09/2019</div>
                    <div className="row">
                        <div className>
                            <img src="../img/clock.svg" alt="" className="icon" />54 giờ
</div>
                        <div className>
                            <img src="../img/play.svg" alt="" className="icon" />25 video
</div>
                        <div className>
                            <img src="../img/user.svg" alt="" className="icon" />20 học viên
</div>
                    </div>
                    <div className="process">
                        <div className="line">
                            <div className="rate" style={{ width: '30%' }} />
                        </div>
30%
</div>
                    <div className="btn overlay round btn-continue">
                        Tiếp tục học
</div>
                </div>
            </div>
        </div>
    );
}