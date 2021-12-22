/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/svelte';
import Chevron from '../../lib/components/icons/Chevron.svelte';

describe("Chevron.svelte", () => {
    test("should render component in the page", () => {
        const component = render(Chevron);
        const element = component.container.getElementsByTagName("svg");
        expect(element).toBeTruthy();
    });

    test('Click on icon', async () => {
        let count = 0;
        const component = render(Chevron, {onClick: () => count++});
        const button = component.getByRole('button');
        await fireEvent.click(button);
        expect(count).toBe(1);
    })

})

