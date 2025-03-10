import { Chat } from "@/components/chat/chat";
import { getMessagesByConversation } from "@/data/conversation";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const messages = await getMessagesByConversation(
    (
      await params
    ).conversationId
  );
  return <Chat initialMessages={messages} />;
}
