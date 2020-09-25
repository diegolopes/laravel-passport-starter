import Cookies from 'universal-cookie';


var cookies = new Cookies();



async function getAuthToken(formData) {
    const data = new FormData(formData.target);

    let user = {
        email: data.get('email'),
        password: data.get('password')
    }

    let headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify(user)

    }

    let response = await fetch('http://localhost:8000/api/login', headers);
    let token = await response.json();

    return token;
}


function auth(token){
    const token_cookie = new Cookies();
    token_cookie.set('token', token);

}

function logOut(){
    cookies.remove('token')
    console.log('cookie removed')
}

function randomNumber(){
    return Math.random() * 20;
}


function isLogged(){
    let token = cookies.get('token')

    if(token){
        console.log('found cookie')
        return true;
    }
    else {
        console.log('cookie missing');
        return false;
    }

}


export  {getAuthToken, auth, logOut, isLogged, randomNumber};

