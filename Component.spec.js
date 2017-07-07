import { h } from 'preact';
import { shallow } from 'preact-render-spy';

const Component = () => <div>Hello?</div>;

it('lets you do cool things with preact components', () => {
  const context = shallow(<Component />);
  expect(context.find('div').contains('Hello?')).toBeTruthy();
});
