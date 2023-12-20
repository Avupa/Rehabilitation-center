import type { UserWithoutRoleApp } from "../User/userType";

export type Message = {
  chatId: number;
  senderId: number;
  recipientId: number;
  content: string;
}

export type MessageWithSender = Message & {
  sender: UserWithoutRoleApp;
}