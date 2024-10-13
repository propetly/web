import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkOverlay({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className: string;
  href: string;
}) {
  return (
    <Link
      {...props}
      className={`${className} static before:absolute before:left-0 before:top-0 before:z-0 before:block before:size-full before:cursor-pointer before:content-['']`}
    >
      {children}
    </Link>
  );
}
