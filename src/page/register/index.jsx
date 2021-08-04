import React,{useState,useEffect} from 'react';
import {useHistory, useParams } from 'react-router';
import useFormValiDate from '../../core/useFormValiDate';
import courseApi from '../../api/courseApi';
import { useDispatch, useSelector } from 'react-redux'
import { Detail,register } from '../../redux/reducers/coureseReducers'
export default function Register() {

    let {slug}=useParams();
    let dispatch = useDispatch()
  
    let history=useHistory()
  
    useEffect( async()=>
    {
        dispatch(Detail(slug))
    },[slug])
    const courses = useSelector(state => state.courses)
    const course=courses.Detail;
    let {form,error,inputChang,check}  =useFormValiDate({
        name: '',
            phone: '',
            email: '',
            fb: '',
            coin: '',
            payement: '',
            gender:'female',
            gender2:'',
           
    },{
        rule:{
            name:{
                required:true,
               
            },
            phone:{
                required:true,
                pattern:'phone'
            },
            email:{
                required:true,
                pattern:'email'
            },
            fb:{
                required:true,
                pattern:'url'
            }
        },
        messager:{
            name:{
                required:"Họ và tên không được để trống"
            }, phone:{
                required:"Số điện thoại không được để trống"
            }, email:{
                required:"Email không được để trống"
            }
        }
    })
  async  function _btnRegister()
    {



        let error=check();
        if(Object.keys(error).length === 0)
        {
          let res = await courseApi.register(form,slug)
            // dispatch(Register(slug,form))
        //    const res=course.Register
        //    console.log(res)
          if(res.success)
          {
               history.push(`/cfd-project/course/${slug}`)
          }
           
        }
    }
    if(!course) return 'Loading .....'
    function _payment()
    {
        // setForm({
        //     ...form,
        //    payement:this    
        // })
         
    }

      
    
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title"> {course.title} </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> {course.opening_time}</div>
                            <div className="time"><strong>Thời lượng:</strong> {course.count_video} buổi</div>
                            <div className="time"><strong>Học phí:</strong> {course.money} VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} onChange={inputChang} type="text" placeholder="Họ và tên bạn" name="name" />
                                {error.name ? <p className="error_form"> {error.name} </p> : null}
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input value={form.phone} onChange={inputChang} type="text" placeholder="Số điện thoại" name="phone" />
                                {error.phone ? <p className="error_form"> {error.phone} </p> : null}
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} onChange={inputChang} type="text" placeholder="Email của bạn" name="email" />
                                {error.email ? <p className="error_form"> {error.email} </p> : null}
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.fb} onChange={inputChang} type="text" placeholder="Email của bạn" name="fb" />
                                {error.fb ? <p className="error_form"> {error.fb} </p> : null}
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" checked={form.coin} onChange={inputChang} name="coin" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                 
                                    <input type="radio" value="male"   name="gender"  checked={form.gender === "male"} onChange={inputChang} /> Nam
                                    <span className="checkmark" />
                                  
                                </div>
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                 
                                    <input type="radio" value="female"  name="gender"  checked={form.gender ==="female"} onChange={inputChang} /> Nữ
                                    <span className="checkmark" />
                                  
                                </div>
                            </label>
                            <label className="disable">
                                <p>Khóa</p>
                                <select name="gender2" id=""onChange={inputChang} >
                                <option value="" selected={form.gender2 === ""} >-- Vui lòng chọn-- </option>
                                    <option value="basic" selected={form.gender2 === "basic"} >Cơ bản </option>
                                    <option value="advanced" selected={form.gender2 === "Advanced"}>Nâng cao </option>  
                                </select>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#" data-value="chuyen-khoan" onClick={_payment.bind('chuyen-khoan')}>Chuyển khoản</a>
                                        <a href="#" data-value="tien-mat" onClick={_payment.bind('tien-matt')}>Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={_btnRegister}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
  
        </main>
    )
}