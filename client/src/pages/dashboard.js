import React, {useEffect, useState} from 'react';
import {isLogged} from '../api/auth';
import {Container} from 'react-bootstrap';
import CustomNavbar from '../components/navbar/'
import Cookies from 'universal-cookie';
import axios from 'axios';

var cookies = new Cookies();

function Dashboard() {
    const [userData,setUserData] = useState([]);
    useEffect(()=>{

        async function loadUserData(){
            let token = cookies.get('token')

            let authHeaders = {
                'Authorization' : `Bearer ${token}`,
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json'
            }

            console.table(authHeaders);

            const response = await axios.get('http://localhost:8000/api/dashboard',{headers:authHeaders})
            setUserData([response.data.items]);
        }

        loadUserData();



    },[])


    return(
        <>
            <CustomNavbar />
            <Container>
                <h1>Bem vindo</h1>
                <h3>Confira seus dados:</h3>

                <ul>
                    {
                    userData.map((items,i) => (
                        console.log(items),
                        <>
                        <li key={i}>{items.email}</li>
                        <li key={i}>{items.name}</li>
                        <li key={i}>{items.created_at}</li>
                        </>
                    ))
                    }
                </ul>

            </Container>
        </>
    )
  }



export default Dashboard;


