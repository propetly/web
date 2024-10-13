import type { ReactNode } from 'react';
import MobileMenu from '~/components/MobileMenu';
import Menu from '~/components/Menu';
import Header from '~/components/Header';

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
          <Menu />

          <main className="relative flex size-full flex-col overflow-hidden">
            <Header />

            <div className="size-full overflow-hidden">
              <div className="relative size-full overflow-hidden">
                <div className="px-page-x vertical-scrollbar scrollbar-lg py-page-y bg-custom-background-90 vertical-scrollbar scrollbar-lg flex size-full flex-col gap-7 overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>

            <MobileMenu />
          </main>
        </div>
      </div>
    </div>
  );
}
