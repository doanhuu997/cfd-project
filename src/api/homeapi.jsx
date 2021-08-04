import {domain} from './cogfix'
export default {
    home: () => {
        return fetch(`${domain}elearning/v4/home`).then(res => res.json())
    }
}