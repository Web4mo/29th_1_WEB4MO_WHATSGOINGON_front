import React, { useState } from 'react';
import './calendar.css';
import bookIcon from '../../assets/icons/book.svg';
import book2Icon from '../../assets/icons/book_2.svg';

const CAL: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDate, setMarkedDate] = useState<Date | null>(null);

  const attendanceDates = [new Date(currentDate.getFullYear(), 6, 1), new Date(currentDate.getFullYear(), 6, 3)];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const daysOfWeekKor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  };

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];
    let totalCells;

    if ((firstDayOfMonth + daysInMonth) > 35) {
      totalCells = 7 * 6;
    } else if ((firstDayOfMonth + daysInMonth) > 28) {
      totalCells = 7 * 5;
    } else {
      totalCells = 7 * 4;
    }

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      const isMarked = attendanceDates.some(d => isSameDay(d, currentDay));
      const isToday = markedDate ? isSameDay(currentDay, markedDate) : false;

      days.push(
        <div key={day} className={`day ${isMarked ? 'marked-day' : ''} ${isToday ? 'today' : ''}`}>
          {day}
          {(isMarked || isToday) && <img src={isMarked ? book2Icon : bookIcon} alt="book" className="icon" />}
        </div>
      );
    }

    const remainingCells = totalCells - (firstDayOfMonth + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
      days.push(<div key={`empty-${firstDayOfMonth + daysInMonth + i}`} className="empty-day" />);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleMarkToday = () => {
    setMarkedDate(new Date());
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = daysOfWeekKor[date.getDay()];

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek}`;
  };

  return (
    <div className="cal">
      <h1>Today</h1>
      <h6>{formatDate(currentDate)}</h6>
      <button onClick={handleMarkToday}>읽었어요</button>
      <div className="calendar-controls">
        <button onClick={handlePrevMonth} className="cal-button">&lt; 이전 달 보기</button>
        <h1>{months[currentDate.getMonth()]}</h1>
        <button onClick={handleNextMonth} className="cal-button">다음 달 보기 &gt;</button>
      </div>
      <div className="calendar-grid-day">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-of-week">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {generateCalendar(currentDate)}
      </div>
    </div>
  );
};

export default CAL;
