import type { Message, MessageWithSender, MessageWithoutId } from './type';

export const initMessagesFetch = async (id: Message['senderId']): Promise<MessageWithSender[]> => {
  const data = await (await fetch(`/api/messages/${id}`)).json();
  return data.messages;
};

export const sendMessageFetch = async (obj: MessageWithoutId): Promise<MessageWithSender | string> => {
  console.log(obj);

  const data = await (
    await fetch('/api/messages/', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(obj),
    })
  ).json();
  if (data.error) {
    return data.error;
  }
  return data.message;
};
