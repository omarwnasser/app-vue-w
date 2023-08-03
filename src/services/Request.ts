import axios from 'axios';


const Request = axios;

Request.interceptors.request.use(e=> {
    e.baseURL = '/api';
    e.headers.setAccept('application/json');
    e.headers.setContentType('application/json') ;
    return e;
},(error)=>{
    console.log(error);
    return error;
})

Request.interceptors.response.use(e=>{

    return e;
},(error)=>{
    console.log(error);
    return error;
})

export default Request;