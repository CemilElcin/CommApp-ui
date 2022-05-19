import Cookies from 'js-cookie'

export default class Auth{

    async login(userName,password){
        return await fetch('http://localhost:5000/api/v1/auth/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({
                "username":userName,
                "password":password
            })
        })
        .then(response=>{
            console.log(response.status)
            if(response.status===200){
                return response.json()
            }
            else return false
        })
        .then(response=>{
            if(response==false){
                return false
            }
            console.log(response)
            console.log(response._id)
            Cookies.set('accessToken',response.accessToken,{expires:7,path:'/'})
            Cookies.set('_id',response._id,{expires:7,path:'/'})
            Cookies.set('username',response.username,{expires:7,path:'/'})
            Cookies.set('email',response.email,{expires:7,path:'/'})
            Cookies.set('isAdmin',response.isAdmin,{expires:7,path:'/'})
            Cookies.set('createdAt',response.createdAt,{expires:7,path:'/'})
            Cookies.set('updatedAt',response.updatedAt,{expires:7,path:'/'})
            Cookies.set('__v',response.__v,{expires:7,path:'/'})
            window.location.href = "/home";
            return true
        })
    }

    

    async register(userName,password,eMail){

        return await fetch('http://localhost:5000/api/v1/auth/register',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({
                "username":userName,
                "email":eMail,
                "password":password
            })
        })
        .then(response=>{
            console.log(response.status)

            if(response.status===201){
                return response.json()
            }
            else return false
        })
        .then(response=>{
            if(response==false){
                return false
            }
            console.log(response)
            console.log(response._id)
            Cookies.set('accessToken',response.accessToken,{expires:7,path:'/'})
            Cookies.set('_id',response._id,{expires:7,path:'/'})
            Cookies.set('username',response.username,{expires:7,path:'/'})
            Cookies.set('email',response.email,{expires:7,path:'/'})
            Cookies.set('isAdmin',response.isAdmin,{expires:7,path:'/'})
            Cookies.set('createdAt',response.createdAt,{expires:7,path:'/'})
            Cookies.set('updatedAt',response.updatedAt,{expires:7,path:'/'})
            Cookies.set('__v',response.__v,{expires:7,path:'/'})
            return true
        })
    }

    async logOut(){
        Cookies.remove('accessToken', { path: '/' })
        Cookies.remove('_id', { path: '/' })
        Cookies.remove('username', { path: '/' })
        Cookies.remove('email', { path: '/' })
        Cookies.remove('isAdmin', { path: '/' })
        Cookies.remove('createdAt', { path: '/' })
        Cookies.remove('updatedAt', { path: '/' })
        Cookies.remove('__v', { path: '/' })
    }

}