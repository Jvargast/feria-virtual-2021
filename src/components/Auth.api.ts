import axios, {AxiosRequestConfig} from 'axios'
export interface Credentials{
    username: string;
    password: string;
}

interface LoginResponse{
    created: string;
    id: string;
    token: string;
    username:string;
}

export const onLogin = async(data:Credentials)=>{
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        //url: process.send.apibaseurl + '/login',
        data
    }
    try{
        const {data: response} = await axios.request<LoginResponse>(requestConfig)
    }catch(e:any){
        console.error(e);
        return {error: e.response.data.message}
    }
    
    
}


/*export const onRegister = async(data: Credentials) =>{
    const requestConfig: AxiosRequestConfig = {
        method:'post',
        //url: process.env.apibaseurl + '/register',
        data
    }

    try{
        const {data:response} = await axios.request(requestConfig);
    }catch (e:any){
        console.log(e.response);
        return {error:e.response.data.message}
    }
    
    
}

//store token in localstorage
export const token_key= 'token_test';

const storeToken = (token:string) =>{
    localStorage.setItem(token_key,token);
}*/