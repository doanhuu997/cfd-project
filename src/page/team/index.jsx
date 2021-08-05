import React from 'react';
import avt1 from '../../assets/img/trannghia.jpg'
import avt2 from '../../assets/img/anhvuong.jpg'
import avt3 from '../../assets/img/danghuy.jpg'
import avt4 from '../../assets/img/anhvuong2.jpg'
export default function Team() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                        elementum
                        sem non luctus
              </p>
                    </div>
                    <div className="list row">
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src={avt1} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        trần nghĩa
                    </div>
                                    <p className="title">Founder &amp; Creative Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src={avt4} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        đặng thuyền vương
                    </div>
                                    <p className="title">Co-Founder &amp; Fullstack Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src={avt2} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        đặng thuyền quân
                    </div>
                                    <p className="title">Co-Founder &amp; Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <div className="wrap">
                                <div className="cover">
                                    <img src={avt3} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        nguyễn đức huy
                    </div>
                                    <p className="title">Co-Founder &amp; Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}