import axios from 'axios';


const Request = axios;

Request.interceptors.request.use(e=> {
    e.baseURL = 'http://127.0.0.1:3002/api';
    e.headers.setAccept('application/vnd.api+json');
    e.headers.setContentType('application/vnd.api+json') ;
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