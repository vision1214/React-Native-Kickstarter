import React from 'react';
import renderer from 'react-test-renderer';

import RestaurantList from './RestaurantList';

const mockNavigation = {
  navigate: jest.fn(),
};

test('AutocompleteSearch snapshot', () => {
  const tree = renderer
    .create(<RestaurantList navigation={mockNavigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
