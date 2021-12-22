/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Description from '../../lib/components/helpers/Description.svelte';

describe("Description.svelte", () => {
    test("should render component in the page", () => {
        const component = render(Description, { description: "description"});
        const element = component.container.getElementsByTagName("i");
        expect(element).toBeTruthy();
        expect(element[0]).toHaveTextContent("description")
    });

    test("should not render component in the page", () => {
        const component = render(Description, { description: "-"});
        const element = component.container.getElementsByTagName("i");
        expect(element.length).toBe(0);
    });

    test("should not render component in the page", () => {
        const component = render(Description);
        const element = component.container.getElementsByTagName("i");
        expect(element.length).toBe(0);
    });
})