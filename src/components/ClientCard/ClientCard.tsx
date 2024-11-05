import React, {FC} from 'react';
import './ClientCard.css';


interface ClientCardProps {
  name: string;
  email: string;
  birthDate: string;
  registerDate: string;
}

const ClientCard: FC<ClientCardProps> = ({ name, email, birthDate, registerDate }) => (
  <div className="client-card">
    <div className="client-info">
      <div className="client-avatar">👤</div>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
    <div className="client-dates">
      {birthDate} | {registerDate}
    </div>
    <div className="client-actions">
      <button className="edit-button">✏️</button>
      <button className="delete-button">🗑️</button>
    </div>
  </div>
);

export default ClientCard;