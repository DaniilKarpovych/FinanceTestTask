import { screen } from '@testing-library/react';
import {Setting} from '../Setting'
import { render } from './test-utils';

test('renders learn react link', () => {
  const store = render(<Setting />, { preloadedState: { socket: {}, selectedCompany: { selectedCompany: ["test company"]} }});
  const linkElement = screen.getByText("Reset");
  linkElement.click();
  expect(store.getState().selectedCompany.selectedCompany).toStrictEqual([]);
});
