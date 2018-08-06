
import React        from 'react';
import Button from '../src';
import {expect}     from 'chai';
import {mount}      from 'enzyme';
    
describe('button',function(){
      it('should render', function(){
        const root = mount(<Button/>);
        expect(root.text()).to.eql('hello from button');
      });
});
