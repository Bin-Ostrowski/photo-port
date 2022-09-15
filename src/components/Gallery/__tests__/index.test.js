import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

//Gallery component will also require a prop of currentCategory. 
//Rather than taking it from the App component, we're going to mock it out 
//at the top of our file. Remember that with unit tests, you want to try to 
//isolate the part that you're testing as much as possible.
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is Rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />)
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    });
})