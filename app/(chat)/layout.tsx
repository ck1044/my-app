import { Header } from "@/components/chat/header";
import { Sidebar } from "@/components/chat/sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex h-full">
      {" "}
      {/* md:flex는 화면 크기가 768px이상일 때 뒤에 정의한 스타일 적용한다, 이상이면 데스탑으로 간주함 */}
      {/* 사이드바 영역 */}
      <div className="hidden md:block w-[300px]">
        {/* md:block은 데스크탑 시 보여짐, 세로로 나열, inline-block은 가로로 나열*/}
        <Sidebar />
      </div>
      {/* Header + chat 영역 */}
      <div className="top-0 flex flex-col flex-1 h-full overflow-y-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
