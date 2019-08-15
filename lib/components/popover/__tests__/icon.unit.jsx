import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../Icon';
import { mount } from 'enzyme';

// 注意: 运行icon测试用例的时候,先别导入icnfont.js !!!
describe('<Icon />', () => {
  it('renders icon component', () => {
    const json = renderer.create(<Icon name={'alipay'} height={'20px'}/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('icon component click events', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="qq" onClick={fn}/>);
    component.find('svg').simulate('click');
  })
});
