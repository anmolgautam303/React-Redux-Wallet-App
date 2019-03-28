import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(App).toMatchSnapshot();
    });

    it('contains a connected wallet componenet', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    it('contains a connected Loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });

    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
      });
});