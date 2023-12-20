import { Chat } from "./type";

export const initChatsFetch = async (): Promise<Chat[]> => {
  const data = await (await fetch('/api/chat')).json();
  return data.chats;
};