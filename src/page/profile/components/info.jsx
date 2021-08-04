
import React from 'react';
import useFormValiDate from '../../../core/useFormValiDate';
import {updateInfor,update} from '../../../redux/reducers/authReducers'
import userApi from '../../../api/userApi';
import { useDispatch, useSelector } from 'react-redux'
 export default function Info() {
   
    const auth = useSelector(state => state.auth)
    let  user  = auth.user
    let dispatch = useDispatch()
    let {form,error,inputChang,check}  =useFormValiDate({
        name: user.name,
            phone: user.phone,
            fb: user.fb,
            skype:user.skype,
    },{
        rule:{
            name:{
                required:true,
               
            },
            phone:{
                required:true,
                pattern:'phone'
            },
            fb:{
                required:true,
                pattern:'url'
            },
            skype:{
                required:true,
                pattern:'skype'
            }
        },
        messager:{
            name:{
                required:"Họ và tên không được để trống"
            }, phone:{
                required:"Số điện thoại không được để trống"
            }, 
        },
        options:{
            localStorage:'profile'
        }
    })
    async function _save()
    {
        let error=check();
        if(Object.keys(error).length === 0)
        {
            
     
            let res= await userApi.updateInfo(form)
            if(res.data)
            {
                update(res.data)
            }

        }
    }
    return (
        <div className="tab1" >
        <label>
            <p>Họ và tên<span>* **</span></p>
            <input value={form.name} onChange={inputChang} type="text" placeholder="Họ và tên bạn" name="name" />
            {error.name ? <p className="error_form"> {error.name} </p> : null}
        </label>
        <label>
            <p>Số điện thoại<span>*</span></p>
          
            <input value={form.phone} onChange={inputChang} type="text" placeholder="0949******" name="phone" />
            {error.phone ? <p className="error_form"> {error.phone} </p> : null}
        </label>
        <label>
            <p>Email<span>*</span></p>
            <input onChange={inputChang} disabled  type="text" name="mail" defaultValue={user.email} />
            {error.mail ? <p className="error_form"> {error.mail} </p> : null}
        </label>
        <label>
            <p>Facebook<span>*</span></p>
            <input value={form.fb} onChange={inputChang} type="text" placeholder="Facebook url"  name="fb" />
            {error.fb ? <p className="error_form"> {error.fb} </p> : null}
        </label>
        <label>
            <p>Skype<span>*</span></p>
         
            <input value={form.skype} onChange={inputChang} type="text" placeholder="Skype url"  name="skype" />
            {error.skype ? <p className="error_form"> {error.skype} </p> : null}
        </label>
        <div className="btn main rect" onClick={_save}>LƯU LẠI</div>
    </div>
    );
}