import axios from 'axios';
import { BACKEND_DOMAIN } from '../config'

export class CommentService {
    async getComments() {
        const res = await axios.get(`${BACKEND_DOMAIN}/comments`)
        return res.data;
    }  

    async createComments(dto) {
        try{
            const res = await axios.post(`${BACKEND_DOMAIN}/comments`, dto)
            if (res.status !== 200){
                console.log(res.data)
                throw new Error()
            }

            return res.data
        }
        catch(e){
            return false
        }
    }
}

export const commentService = new CommentService()