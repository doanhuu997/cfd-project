import React from 'react';

export default  function Footer() {


    return (
        <footer id="footer">
            <div classname="container">
                <div classname="row">
                    <div classname="col-md-5 left">
                        <p classname="des">
                            Sáng tạo, tinh tế và phù hợp sẽ khiến
                            sản phẩm của bạn trở nên khác biệt.
      </p>
                        <p classname="address">
                            Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
      </p>
                        <p classname="phone">(+84) 98 9596 913</p>
                        <div classname="social">
                            <a classname="fb" href="#">
                                 <img src="img/icon-fb.svg" alt="" /> 
                            </a>
                            <a classname="gmail" href="#">
                                 <img src="img/icon-gmail.svg" alt="" />
                            </a>
                            <a classname="skype" href="#">
                                 <img src="img/icon-skype.svg" alt="" /> 
                            </a>
                        </div>
                    </div>
                    <div classname="right">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="#">Khóa học</a>
                                </li>
                                <li>
                                    <a href="#">Thanh toán</a>
                                </li>
                                <li>
                                    <a href="#">Điều khoản</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <a href="#" classname="back-to-top">
                </a><div classname="line"><a href="#" classname="back-to-top">
                    CUỘN LÊN
    </a>
                </div>
                <div classname="copy-right">
                    <div classname="container">
                        <p>2020 Creative Front-End Dev</p>
                        <p>Được thiết kế và lập trình bởi CFD Team</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

