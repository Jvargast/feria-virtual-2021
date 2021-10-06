import axios, {AxiosRequestConfig} from 'axios'
export interface Credentials{
    username: string;
    password: string;
}

export interface Mail{
    email: string;
}

interface LoginResponse{
    created: string;
    id: string;
    token: string;
    username:string;
}

interface PasswordResponse {
    token: string,
    password: string,
    repeatPassword: string
}

export const onLogin = async(data:Credentials)=>{
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:4000/auth/signIn',
        data
    }
    return axios.request<LoginResponse>(requestConfig);
    
    
    
}


export const onRegister = async(data: any) =>{

    console.log('Data', data);
    const requestConfig: AxiosRequestConfig = {
        method:'post',
        url: 'http://localhost:4000/auth/signUp',
        data: data
    }

    try{
        const response = await axios.request(requestConfig);
        console.log(response);
    }catch (e:any){
        console.log(e.response);
        return e;
    }
    
    
}

export const onPassword = async(data:any) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:4000/auth/forgot-password',
        data:data
    }
    try{
        const response = await axios.request(requestConfig);
        console.log(response);
    } catch (e:any) {
        return e;
    }
}

export const onPasswordChange = async(data:any) => {
    
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:4000/auth/change-password',
        data:data
    }
    try{
        const response = await axios.request(requestConfig);
        console.log(response);
    } catch (e:any) {
        return e;
    }
    return axios.request<PasswordResponse>(requestConfig);
}

//store token in localstorage
// sss