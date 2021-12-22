/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Name from '../../lib/components/helpers/Name.svelte';

describe("Name.svelte", () => {
    test("should render component in the page", () => {
        const component = render(Name, { name: "name"});
        const element = component.container.getElementsByTagName("h1");
        expect(element).toBeTruthy();
        expect(element[0]).toHaveTextContent("name")
    });

    test("should not render component in the page", () => {
        const component = render(Name);
        const element = component.container.getElementsByTagName("h1");
        expect(element.length).toBe(0);
    });

})