
import React        from 'react';
import Checkbox from '../src';
import {expect}     from 'chai';
import {mount}      from 'enzyme';
    
describe('checkbox',function(){
      it('should render', function(){
        const root = mount(<Checkbox/>);
        expect(root.text()).to.eql('hello from checkbox');
      });
});
