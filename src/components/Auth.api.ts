import axios, {AxiosRequestConfig} from 'axios'
export interface Credentials{
    username: string;
    password: string;
}

export const onLogin = async(data:Credentials)=>{
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        //url: process.send.apibaseurl + '/login',
        data
    }
    try{
        const {data: response} = await axios.request(requestConfig)
    }catch(e:any){
        console.error(e);
        return {error: e.response.data.message}
    }
    
    
}