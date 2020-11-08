import {mount} from 'enzyme'
import {Input} from "../Input";
import React from 'react';

describe('Button test --', function () {
    it('looks good', () => {
        const subject = mount(<Input/>)
        expect(subject).toMatchSnapshot();
    })
});
