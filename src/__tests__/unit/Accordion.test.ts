/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/svelte';
import Accordion from '../../lib/components/helpers/Accordion.svelte';


afterEach(() => {
  jest.useRealTimers();
});

describe("Accordion.svelte", () => {

    test('should render div with slot in the page', async () => {
        const component = render(Accordion, { open: true});
        const element = component.container.querySelectorAll('[data-testid="accordion-open"]');
        expect(element.length).toBeGreaterThan(0);
    });

    test('should not render div with slot in the page', async () => {
        const component = render(Accordion, { open: false});
        const element = component.container.querySelectorAll('[data-testid="accordion-open"]');
        expect(element.length).toBe(0);
    });
    
    test('Click on icon to open accordion', async () => {
        const component = render(Accordion, { open: false});
        const button = component.getByRole("button");
        await fireEvent.click(button);
        const element = component.container.querySelectorAll('[data-testid="accordion-open"]');
        expect(element.length).toBeGreaterThan(0);
    });
    
    test('Click on icon to close accordion', async () => {
        const component = render(Accordion, { open: true});
        const button = component.getByRole("button");
        await fireEvent.click(button);
        jest.useFakeTimers();
        jest.advanceTimersByTime(1000);

        setTimeout(() => {
            const element = component.container.querySelectorAll('[data-testid="accordion-open"]');
            expect(element.length).toBe(0);
        }, 1000);
    });
})
