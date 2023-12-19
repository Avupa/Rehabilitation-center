import React from 'react';
import "./help.css"
import Messages from './Messages';
import AddMessageForm from './AddMessageForm';

function Help(): JSX.Element {
  return (
    <div className="bg-grey w-full h-full">
      <p className="text-green-500">Помощь</p>
      <Messages />
      <AddMessageForm />
    </div>
  );
}

export default Help;
