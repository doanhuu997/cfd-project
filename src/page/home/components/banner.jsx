import React from 'react';
import bg_cover from '../../../assets/img/bg-cover.jpg'
import cfdvideo from '../../../assets/video/CFD-video-bg2.mp4'
export default function Banner() {


    return (
        <div className="banner2 jarallax" style={{display: 'flex !important'}}>
        <div className="container">
            <div className="content">
                <h2 className="title">Thực Chiến</h2>
                <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                <div className="btn main round">KHÓA HỌC</div>
            </div>
        </div>
        <div className="jarallax-img">
            <img data-src={bg_cover} alt="" className="lazyload" />
            <div className="video-bg lazyload" data-src={cfdvideo} />
        </div>
    </div>
    );
}

