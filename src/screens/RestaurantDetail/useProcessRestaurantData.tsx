import {useEffect, useMemo, useState} from 'react';

import {DaySchedule, OpeningHours, Restaurant} from '../../store/models';
import Strings from '../../strings/en';

/**
 * This is a custom hook which processes the Reataurant detail data
 * @returns
 */
const useProcessRestaurantData = (restaurantDetail: Restaurant) => {
  const [dayTime, setDayTime] = useState('');
  const [openStatus, setOpenStatus] = useState('');
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {weekday: 'long'};
    const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
    const timeData: OpeningHours = restaurantDetail.hours;

    for (const day in timeData) {
      if (timeData.hasOwnProperty(day) && day === dayName.toLowerCase()) {
        const dayData: DaySchedule = timeData[day];
        setDayTime(
          `${dayName} ${Strings.text.openingHours}   ${dayData.opens_at} - ${dayData.closes_at} `,
        );
        setOpenStatus(
          dayData.is_closed ? Strings.text.closed : Strings.text.open,
        );
        setIsClosed(dayData.is_closed);
      }
    }
  }, [restaurantDetail]);
  return useMemo(
    () => ({dayTime, openStatus, isClosed}),
    [dayTime, openStatus, isClosed],
  );
};

export default useProcessRestaurantData;
