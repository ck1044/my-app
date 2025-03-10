import { MobileMenu } from "./mobileMenu";
import { ModelSelect } from "./modelSelect";
import { Sidebar } from "./sidebar";

export function Header() {
  return (
    <header className="flex items-center p-2 top-0 sticky bg-white z-10">
      {/* 가로 배치 */}
      {/* 모바일 메뉴 영역 */}
      <MobileMenu>
        <Sidebar />
      </MobileMenu>
      {/* 모델 선택 영역 */}
      <ModelSelect />
    </header>
  );
}
