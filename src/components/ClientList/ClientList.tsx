import React from 'react';
import ClientCard from '../ClientCard/ClientCard';
import './ClientList.css';

const clients = [
  { name: 'Carlos Graham', email: 'Sincere@gmail.com', birthDate: '23 Abril 1999', registerDate: '12 Enero 2020' },
  { name: 'Andres Graham', email: 'Sincere@gmail.com', birthDate: '23 Abril 1999', registerDate: '12 Enero 2020' },
  { name: 'Leonardo Graham', email: 'Sincere@gmail.com', birthDate: '23 Abril 1999', registerDate: '12 Enero 2020' },
];

const ClientList = () => (
  <div className="client-list">
    {clients.map((client, index) => (
      <ClientCard key={index} {...client} />
    ))}
  </div>
);

export default ClientList;