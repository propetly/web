export default function MobileMenu() {
  return (
    <div className="z-[18] lg:hidden">
      <div className="px-page-x flex h-[3.75rem] w-full items-center gap-2 border-t border-[#E5E5E5] bg-white">
        <div className=""></div>
        <div className="w-full">
          <div className="relative z-[18] flex w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 px-0">
            <div className="">Объекты</div>
            <div className="">Уведомления</div>
            <button>Меню</button>
            <div className="">Добавить</div>
            <div className="">Профиль</div>
          </div>
        </div>
      </div>
    </div>
  );
}
