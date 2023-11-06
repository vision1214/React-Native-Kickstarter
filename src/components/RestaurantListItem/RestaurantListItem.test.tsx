import React from 'react';
import renderer from 'react-test-renderer';

import {restaurantItem} from '../../../__mocks__/RestaurantItem';
import ListItem, {ListItemProps} from './RestaurantListItem';

const props: ListItemProps = {
  item: restaurantItem,
  ItemClickCallback: jest.fn(),
};

test('ListItem snapshot', () => {
  const tree = renderer.create(<ListItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
