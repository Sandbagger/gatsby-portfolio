import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Hello from './index.js'

describe('hello component', async assert => {
    const $ = render(<Hello/>);
  
assert({
    given: 'nothing',
    should: 'render hello world',
    actual: $('.greeting')
            .html()
            .trim(),
    expected: 'failing test'
})
})