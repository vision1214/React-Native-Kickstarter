import React from 'react';
import renderer from 'react-test-renderer';

import {restaurantItem} from '../../../__mocks__/RestaurantItem';
import RestaurantDetailScreen from './RestaurantDetail';

const mockRoute = {
  params: {
    data: restaurantItem,
  },
};

test('AutocompleteSearch snapshot', () => {
  const tree = renderer
    .create(<RestaurantDetailScreen route={mockRoute} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
