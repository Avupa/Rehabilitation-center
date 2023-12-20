import type { Message } from './type';

export const initMessagesFetch = async (id:Message['senderId']): Promise<Message[]> => {
  const data = await (await fetch(`/api/messages/${id}`)).json();
  return data.messages;
};

