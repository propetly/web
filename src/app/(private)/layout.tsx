import type { ReactNode } from 'react';

/**
 * TODO: Переопределить цвета
 * Вынести в tailwind config border-[#E5E5E5]
 *
 * Так же компонент требует рефакторинга, выделить SideBar и Header
 */
export default function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="app-container relative flex h-dvh w-full flex-col overflow-hidden lg:h-screen">
      <div className="relative size-full overflow-hidden">
        <div className="relative flex size-full overflow-hidden">
          <div className="fixed inset-y-0 z-20 -ml-[250px] flex h-full w-[250px] flex-shrink-0 flex-grow-0 flex-col border-r border-[#E5E5E5] bg-white duration-300 lg:relative lg:ml-0">
            <div className="flex size-full flex-1 flex-col pb-0 pt-4">menu</div>
          </div>

          <main className="relative flex size-full flex-col overflow-hidden">
            <div className="z-[18]">
              <div className="px-page-x flex h-[3.75rem] w-full items-center gap-2 border-b border-[#E5E5E5] bg-white">
                <div className=""></div>
                <div className="w-full">
                  <div className="relative z-[18] flex w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 px-0">
                    Header
                  </div>
                </div>
              </div>
            </div>
            <div className="size-full overflow-hidden">
              <div className="relative size-full overflow-hidden">
                <div className="px-page-x vertical-scrollbar scrollbar-lg py-page-y bg-custom-background-90 vertical-scrollbar scrollbar-lg flex size-full flex-col gap-7 overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>
            <div className="z-[18] lg:hidden">
              <div className="px-page-x flex h-[3.75rem] w-full items-center gap-2 border-t border-[#E5E5E5] bg-white">
                <div className=""></div>
                <div className="w-full">
                  <div className="relative z-[18] flex w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 px-0">
                    <div className="">Объекты</div>
                    <div className="">Уведомления</div>
                    <div className="">Меню</div>
                    <div className="">Добавить</div>
                    <div className="">Профиль</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
