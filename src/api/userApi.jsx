import {domain} from './cogfix'
export default {
    login: (data) => {
        return fetch(`${domain}elearning/v4/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        }).then(res => res.json())
    },
    updateInfo: (data) => {
        let token = JSON.parse(localStorage.getItem('token'))
        return fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
}