// src/components/landing-page/landingPage.js
'use client'

import React, { useEffect, useState } from 'react';
import { connectToDatabase } from '../../service/mongoService';

const LandingPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const db = await connectToDatabase();
                const usersCollection = db.collection('users');
                const usersData = await usersCollection.find().toArray();
                setUsers(usersData);
                console.log('Usuarios:', usersData);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default LandingPage;
