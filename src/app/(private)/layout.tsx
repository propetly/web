import type { ReactNode } from 'react';

/**
 * TODO: Переопределить цвета
 * bg-custom-background-100
 * border-custom-sidebar-border-200
 * bg-custom-sidebar-background-100
 *
 * Так же компонент требует рефакторинга, выделить SideBar и Header
 */
export default function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-custom-background-100 app-container relative flex h-screen w-full flex-col overflow-hidden">
      <div className="relative size-full overflow-hidden">
        <div className="relative flex size-full overflow-hidden">
          <div className="border-custom-sidebar-border-200 bg-custom-sidebar-background-100 fixed inset-y-0 z-20 flex h-full w-[250px] flex-shrink-0 flex-grow-0 flex-col border-r duration-300 md:relative md:ml-0">
            <div className="flex size-full flex-1 flex-col pb-0 pt-4">menu</div>
          </div>

          <main className="bg-custom-background-100 relative flex size-full flex-col overflow-hidden">
            <div className="z-[18]">
              <div className="px-page-x border-custom-border-200 bg-custom-sidebar-background-100 flex h-[3.75rem] w-full items-center gap-2 border-b">
                <div className=""></div>
                <div className="w-full">
                  <div className="bg-custom-sidebar-background-100 relative z-[18] flex w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 px-0">
                    Header
                  </div>
                </div>
              </div>
            </div>
            <div className="size-full overflow-hidden">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
