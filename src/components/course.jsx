import React from 'react';
import { Link } from 'react-router-dom'
import iconuser from '../assets/img/icon-user-white.svg'
import iconheart from '../assets/img/icon-heart.svg'
import iconremove from '../assets/img/icon-viewmore.svg'
export default function Course({ title, thumbnail, short_description, status, teacher, slug }) {


    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={`/cfd-project/course/${slug}`}>
                    <img src={thumbnail.link} alt="" />
                    {
                        status === "dang-dien-ra" ? <span className="badge b1">Dang Diễn Ra</span>
                            : status === "da-ket-thuc" ? <span className="badge b1">Đã kết thúc</span>
                                : <span className="badge b1">Sắp Diễn Ra</span>
                    }

                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src={iconuser} alt="" />
                                12</div>
                            <div className="heart">
                                <img src={iconheart} alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src={iconremove} alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <Link className="name" to={`/cfd-project/course/${slug}`}>
                        {title}
                    </Link>
                    <p className="des">
                        {short_description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar.link} alt="" />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <Link to={`/cfd-project/register/${slug}`} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>

    );
}

