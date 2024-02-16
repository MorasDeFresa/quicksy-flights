import React from 'react';
import { useClientEffect } from 'next/client';
import { connectToDatabase } from '../../service/mongoService';

const Users = ({ users }) => {
    useClientEffect(() => {
        async function fetchData() {
            try {
                const db = await connectToDatabase();
                const usersCollection = db.collection('users');
                const usersData = await usersCollection.find().toArray();
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
            {/* Renderizar los usuarios aquí */}
        </div>
    );
};

export default Users;
