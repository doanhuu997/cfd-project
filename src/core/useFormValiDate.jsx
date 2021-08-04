import { useEffect, useState } from "react";
let emailPattern=/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
phonePattern=/(84|0[3|5|7|8|9])+([0-9]{8,10})\b/i,
urlPattern=/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i

export default function useFormValiDate(initialForm,validate)
{
    let {rule,messager,options}=validate;
   
    if(!options) options={};
    let v=initialForm;
    if(options.localStorage){
        v=JSON.parse(localStorage.getItem(options.localStorage)) ||initialForm

    }
    let [form,setForm]=useState(v);
    let [error,setError]=useState({});
    useEffect(() =>{
        if(options.localStorage){
            localStorage.setItem(options.localStorage,JSON.stringify(form))
            return ()=>{
                localStorage.removeItem(options.localStorage)
            }
        }
    },[form])
    function inputChang(e)
    {
       
        let name = e.target.name;
        let value = e.target.value;
        let type=e.target.type;
       
        
        if( type === 'checkbox'){
            value=e.target.checked;
        }
        if( type === 'radio'){
            value=document.querySelector(`[name="${name}"]:checked`).value;
    
        }
        setForm({
            ...form,
            [name]: value
        })
     
    }

    function check( opitions={exclude:{}}){
        let { exclude} =opitions
        if(typeof exclude === 'underfined') exclude={}
        let errorObj={};
        for (let i in rule){
            if(i in exclude) continue
            let r=rule[i];
            let m=messager?.[i] || null;
            if(r.required && !form[i] ){
                errorObj[i]=m?.required || "Trường này không được để trống"
            }
            if(r.pattern && form[i]){
                let pattern=r.pattern;
                if(pattern === 'email'){ pattern=emailPattern}
                if(pattern === 'phone'){ pattern=phonePattern}
                if(pattern === 'url'){ pattern=urlPattern}
                
                try
                {
                    if(!pattern.test(form[i])){
                        errorObj[i]=m?.pattern || 'Trường này không đúng định dạng nhá !!!!'
                    }
                }
                catch(err){}

            }
           
        }
        setError(errorObj);
        return errorObj
    }
    return {
        form,error,inputChang,check
    }
}