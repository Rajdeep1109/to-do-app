'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidays } from '@/redux/holidayActions'; 

const HolidayList = () => {
  const dispatch = useDispatch();
  const { holidays, loading, error } = useSelector((state) => state.holidays);

  useEffect(() => {
    dispatch(fetchHolidays()); // dispatch the action to fetch the holidays
  }, [dispatch]);

  return (//shows current year with holiday in that respective date
    <div>
      <h2>Holidays for {new Date().getFullYear()}</h2> 
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {holidays.length > 0 ? (
        <ul>
          {holidays.map((holiday) => (
            <li key={holiday.date.iso}>
              {holiday.name} - {holiday.date.iso}
            </li>
          ))}
        </ul>
      ) : (
        <p>No holidays found</p>
      )}
    </div>
  );
};

export default HolidayList;
