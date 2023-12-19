import React from 'react'

function AddMessageForm():JSX.Element {
  const sendMessage(e:React.FormEvent<HTMLFormElement>):void {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <textarea></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default AddMessageForm