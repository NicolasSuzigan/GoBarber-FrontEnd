import React from 'react';

import Toast from './Toast';

import { Conteiner } from './styles';
import  {ToastMessage} from '../../hooks/toast';

interface ToastContainerProps{
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> =({ messages }) =>{

  return (
    <Conteiner>
      {messages.map(message => (
        <Toast key={message.id} message={message}/>
      ))}
    </Conteiner>
  );
};

export default ToastContainer;
