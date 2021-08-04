export default {
    register(data, slug) {
        let token = JSON.parse(localStorage.getItem('token'))
        return fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course-register/${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    courses() {
        return fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/courses`).then(res => res.json())
    },
    detail(slug) {
        return fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`).then(res => res.json())
    },
    related(slug) {
        return fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course-related/${slug}`).then(res => res.json())
    }
}