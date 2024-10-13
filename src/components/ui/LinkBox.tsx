import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function LinkBox({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={`${className} relative z-[1]`} {...props}>
      {children}
    </div>
  );
}
