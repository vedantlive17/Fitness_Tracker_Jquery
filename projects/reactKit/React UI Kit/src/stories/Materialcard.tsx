// MaterialCard.tsx
import React from 'react';
import './MaterialCard.css';
import ReactLogo from './images/react.png';
import icon from './images/orange.png';

interface MaterialCardProps {
  cardType: 'card 1' | 'card 2';
  title: string;
  duration?: string;
  items?: string[];
  category?: string;
  description?: string;
  date?: string;
  time?: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ cardType, title, duration, items, category, description, date, time }) => {
  if (cardType === 'card 2') {
    return (
      <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={ReactLogo} />
        </div>
        <div className="card-body">
          <span className="title">{category}</span>
          <h4>{title}</h4>
              <p>{description}</p>
          <div className="icon">
            <img src={icon} />
            <div className="info">
              <h5>{date}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
  }

  // Default card layout
  return (
    <div className="material-card">
      <header className="material-card__header">
        <img className="material-card__icon" src={ReactLogo} alt="React Logo" />
      </header>
      <section className="material-card__body">
        <h2 className="material-card__title">{title}</h2>
        <span className="material-card__duration">{duration}</span>
        <ul className="material-card__knowledge">
          {items && items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
};

export default MaterialCard;
