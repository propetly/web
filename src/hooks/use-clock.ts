import { useState, useEffect } from 'react';

const DAYS_OF_WEEK = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export default function useClock() {
  const [dateTime, setDateTime] = useState(new Date());
  const daysOfWeek = DAYS_OF_WEEK[dateTime.getDay()];
  const month = dateTime.toLocaleString('default', { month: 'long' });

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    dateTime,
    daysOfWeek,
    month,
    hours: dateTime.getHours(),
    minutes: dateTime.getMinutes(),
  };
}
