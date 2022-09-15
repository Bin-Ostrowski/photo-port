import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

//configure testing environment
afterEach(cleanup);

describe('Contact is Rendering', () => {

    it('renders', () => {
        render(<Contact/>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1Contact')).toHaveTextContent('Contact Me')
    });
    
    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    });
})