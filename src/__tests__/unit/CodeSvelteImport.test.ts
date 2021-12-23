/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import CodeSvelteImport from '../../lib/components/helpers/CodeSvelteImport.svelte';

describe("CodeSvelteImport.svelte", () => {
    test("should render component in the page", () => {
        const component = render(CodeSvelteImport);
        const element = component.container.getElementsByTagName("p");
        expect(element).toBeTruthy();
        expect(element[0]).toBeVisible();
        expect(element[0]).toHaveTextContent(`import { CustomComponent } from "-";`);
    });

    test("should render component with custom props", () => {
        const component = render(CodeSvelteImport, { name: "Name", urlPackage: "el3un4s/name"});
        const element = component.container.getElementsByTagName("p");
        expect(element).toBeTruthy();
        expect(element[0]).toBeVisible();
        expect(element[0]).toHaveTextContent(`import { Name } from "el3un4s/name";`);
    });
})