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
        url: 'http://localhost:3000/auth/signIn',
        //url: process.send.apibaseurl + '/login',
        data
    }
    return axios.request<LoginResponse>(requestConfig);
    
    
    
}


/*
export funcion loginAction(username, password, history) {
    return(dispatch) =>{
        login(username,password)
            .then((response)=>{
                saveTokenLocalStorage(response.data);
                runLogoutTimer(dispatch, response.data.expiresIn * 1000);
                dispatch(loginConfirmedAction(response.data));
                history.push('/');
            })
            .catch((error)=>{
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(error.message));
            });
    };
}

export function loginFailedAction(data){
    return
}

export funcion loginConfirmedAction(){
    
}
*/

export const onRegister = async(data: any) =>{

    console.log('Data', data);
    const requestConfig: AxiosRequestConfig = {
        method:'post',
        url: 'http://localhost:3000/auth/signUp',
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

//store token in localstorage
// sss