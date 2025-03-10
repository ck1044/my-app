import { MessageSquare, Plus } from "lucide-react";
import Image from "next/image";
import { BASE_URL, CHAT_ROUTES } from "@/constants/routes";
import { SidebarItem } from "./sidebarItem";
import { LogoutButton } from "./logoutButton";
import Link from "next/link";
import { getConversationsByUser } from "@/data/user";

const NEW_SIDEBAR_ITEMS = {
  id: "new",
  label: "새로운 대화",
  icon: <Plus />,
  href: BASE_URL,
};

export async function Sidebar() {
  const conversations = await getConversationsByUser();
  const formattedItems = [
    NEW_SIDEBAR_ITEMS,
    ...conversations.map((conversation) => ({
      id: conversation.id,
      label: conversation.name || "",
      icon: <MessageSquare />,
      href: `${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`,
    })),
  ];
  return (
    <nav className="h-full p-3 bg-black flex flex-col text-white">
      {/* 로고 영역 + 메뉴 아이템 */}
      <div className="flex-1 overflow-y-auto">
        {/* overflow y로 최대 늘려놓고, 스크롤가능, flex-1로 고정해버림, 로그아웃 버튼 하단 배치 */}
        <Link href={BASE_URL} className="flex items-center gap-2">
          <Image width={40} height={40} src="/logo.png" alt="logo" />
          {/* 퍼블릭 생략 가능 */}
          <h1 className="text-2xl font-bold">Chat GPT</h1>
        </Link>
        <div className="flex flex-col gap-2 mt-10">
          {formattedItems.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
          {/* map 으로 묶으면서, 보여준다*/}
        </div>
      </div>
      {/* 로그아웃 버튼 영역 */}
      <div className="flex justify-center">
        <LogoutButton />
      </div>
    </nav>
  );
}
//사이드바는 로고와 메뉴 아이템, 로그아웃 버튼으로 구성되어있음
//로고는 사이드바 고정, link로 ssr 가능하므로 한페이지로 묶음
//메뉴아이템, 로그아웃 버튼은 csr 가능하므로 각각 컴포넌트로 분리
//메뉴아이템은 더미데이터로 구성, map으로 묶어서 보여줌
