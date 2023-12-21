import type { UserWithoutRoleApp } from "../User/userType";

export type Message = {
  id:number;
  chatId: number;
  senderId: number | undefined;
  recipientId: number;
  content: string;
}

export type MessageWithoutId = Omit<Message, 'id'>

export type MessageWithSender = Message & {
  sender: UserWithoutRoleApp;
}