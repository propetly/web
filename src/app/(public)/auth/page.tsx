import Image from 'next/image';

export default function AuthPage() {
  return (
    <div className="bg-custom-background-100 app-container relative flex h-screen w-full flex-col overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        <div className="bg-custom-background-100 h-screen w-full overflow-hidden">
          <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                className="h-full w-full object-cover"
                alt="background"
                width={1512}
                height={900}
                src="https://app.plane.so/_next/static/media/background-pattern-dark.e05ca51f.svg"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 flex h-screen w-screen flex-col overflow-hidden overflow-y-auto">
              <div className="container relative flex min-w-full flex-shrink-0 items-center justify-between px-10 pb-4 transition-all lg:px-20 xl:px-36">
                <div className="flex items-center gap-x-2 py-10">Logo</div>
                <div className="text-onboarding-text-300 flex flex-col items-end text-center text-sm font-medium sm:flex-row sm:items-center sm:gap-2">
                  Buttons
                </div>
              </div>
              <div className="container mx-auto flex h-[100vh-60px] max-w-lg flex-grow flex-col justify-center px-10 transition-all lg:max-w-md lg:px-5">
                <div className="relative flex flex-col space-y-6">form</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
