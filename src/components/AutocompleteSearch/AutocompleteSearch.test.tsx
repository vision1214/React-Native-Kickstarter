import React from 'react';
import renderer from 'react-test-renderer';

import {restaurantType} from '../../../__mocks__/RestaurantItem';
import AutocompleteSearch, {ListItemProps} from './AutocompleteSearch';

const props: ListItemProps = {
  data: restaurantType,
  filterCallback: jest.fn(),
  ref: jest.fn(),
};

test('AutocompleteSearch snapshot', () => {
  const tree = renderer.create(<AutocompleteSearch {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
