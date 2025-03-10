import db from "@/db";
import { conversation } from "@/db/schema";
import { Message } from "ai";
import { eq } from "drizzle-orm";

export const getMessagesByConversation = async (id: string) => {
  const response = await db.query.conversation.findFirst({
    where: eq(conversation.id, id),
    with: {
      messages: {
        orderBy: (message, { asc }) => [asc(message.createdAt)],
      },
    },
  });

  return (response?.messages || []) as Message[]; //사용할 메세지 타입 애들만 리턴할거다!
};
