
import React        from 'react';
import Styleguide from '../src';
import {expect}     from 'chai';
import {mount}      from 'enzyme';
    
describe('styleguide',function(){
      it('should render', function(){
        const root = mount(<Styleguide/>);
        expect(root.text()).to.eql('hello from styleguide');
      });
});
