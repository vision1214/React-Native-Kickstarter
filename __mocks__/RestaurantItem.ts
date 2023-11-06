import {Restaurant} from 'store/models';

export const restaurantItem: Restaurant = {
  id: 9891,
  uid: '81c63072-65b7-4e45-8887-6b6fd84ad439',
  name: 'Blue Burger',
  type: 'Ethiopean',
  description:
    'To provide an exceptional dining experience that satisfies our guests’ grown-up tastes by being a Cut-Above in everything we do.',
  review:
    'For dessert, we ordered the chocolate drizzled churros and they were delicious too! They even came with some fresh fruit (blueberries and strawberries).',
  logo: 'https://loremflickr.com/500/500/restaurant',
  phone_number: '966-592-9886',
  address: 'Apt. 729 229 Teodoro Squares, West Loidaside, MS 43215',
  hours: {
    monday: {opens_at: '7:34 AM', closes_at: '1:38 PM', is_closed: true},
    tuesday: {opens_at: '10:20 AM', closes_at: '1:21 PM', is_closed: false},
    wednesday: {opens_at: '8:51 AM', closes_at: '5:35 PM', is_closed: true},
    thursday: {opens_at: '10:37 AM', closes_at: '12:36 PM', is_closed: true},
    friday: {opens_at: '6:31 AM', closes_at: '8:27 PM', is_closed: false},
    saturday: {opens_at: '9:20 AM', closes_at: '9:45 PM', is_closed: false},
    sunday: {opens_at: '11:53 AM', closes_at: '8:37 PM', is_closed: false},
  },
};

export const restaurantType: string[] = [
  'Veg',
  'Italian',
  'Vegan',
  'Italian',
  'Japanese',
  'Comfort food',
];
