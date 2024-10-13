'use client';

import useClock from '~/hooks/use-clock';

export default function UserGreeting() {
  const { dateTime, daysOfWeek, minutes, hours, month } = useClock();

  return (
    <div className="">
      <div className="">
        {(hours >= 22 || hours <= 5) && 'Доброй ночи'}
        {hours >= 18 && hours <= 21 && 'Добрый вечер'}
        {hours >= 12 && hours <= 17 && 'Добрый день'}
        {hours >= 6 && hours <= 11 && 'Доброе утро'}
      </div>
      <div className="">
        {hours} : {minutes < 10 ? '0' : ''}
        {minutes} --- {month} : {daysOfWeek}
      </div>
    </div>
  );
}
