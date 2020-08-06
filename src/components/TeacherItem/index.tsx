import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4" alt="Profile"/>
              <div>
                <strong>Carlos Oliveira</strong>
                <span>English</span>
              </div>
            </header>

            <p>
              Professor.... Que ensina...sabe.... ?!!!
              <br/>
              <br/>
              Faz muitas coisas...Sabe como é né ?
            </p>

            <footer>
              <p>
                Preço/hora
                <strong>R$123,99</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
              </button>
            </footer>
          </article>
  );
}

export default TeacherItem;