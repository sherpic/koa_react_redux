import {GET_POSTS} from './actionsTypes'
import superagentFactory from '../helpers/superagentFactory'

const superagent = superagentFactory();

export function getPosts(){
    return {
        type: GET_POSTS,
        payload: superagent
            .get('/getPosts/')
            .then(res => res.body)
    }
}
