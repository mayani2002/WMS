import React, { createContext, useState, useEffect, useContext } from "react"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
            cookies.set('email', finalValues['email'], { path: '/', maxAge: 2592000 });
            cookies.set('firstName', finalValues['firstName'], { path: '/', maxAge: 2592000 });
            console.log(cookies.get('email'));
        }
        
    } catch (error) {
        console.log('Error while calling addUser api', error);
    }
};