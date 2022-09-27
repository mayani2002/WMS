import React, { createContext, useState, useEffect, useContext } from "react"
import Cookies from 'universal-cookie';
import { AccountContext } from '../../context/AccountProvider';

const cookies = new Cookies();

const setCookie = (email, firstName) => {
    cookies.set('email',email, { path: '/', maxAge: 2592000 });
    cookies.set('firstName', firstName, { path: '/', maxAge: 2592000 });
    console.log(cookies.get('eil'));
}

const setLogin = (email, firstName) => {

    const { account, setAccount } = useContext(AccountContext);
    setCookie(email, firstName);
    setAccount({ 'email': email, 'firstName': firstName });
    console.log(account);
}

export const postRegisterForm = async (finalValues) => {
    try {
    const res = await fetch('http://localhost:8000/add', {
        method: 'POST',
        body: JSON.stringify(finalValues),
        headers: {
            'Content-Type': 'application/json'
        },
    });
        if (res.status == 200) {
            const response = await res.json();
            alert(response);
            setLogin(finalValues['email'], finalValues['firstName'] )
        }
        
    } catch (error) {
        console.log('Error while calling addUser api', error);
    }
};