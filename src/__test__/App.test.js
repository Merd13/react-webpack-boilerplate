/**
 * Created by Merd Mansourifar on 7/22/18.
 */

import React from 'react';
import App from '../App.jsx';

describe('<App/>', () => {
  test('Component Mount test', () => {
    global.shallow(<App />);
  });
});
