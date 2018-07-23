import Adapter from 'enzyme-adapter-react-16';

import { shallow, render, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

// global.intl = intl;

global.shallow = shallow;

global.render = render;

global.mount = mount;
