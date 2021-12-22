/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import CodeBash from '../../lib/components/helpers/CodeBash.svelte';

describe("CodeBash.svelte", () => {
    test("should render component in the page", () => {
        const component = render(CodeBash, { code: "code"});
        const element = component.container.getElementsByTagName("div");
        expect(element).toBeTruthy();
        expect(element[0]).toHaveTextContent("code")
    });

    test("should not render component in the page", () => {
        const component = render(CodeBash);
        const element = component.container.getElementsByTagName("div");
        expect(element).toBeTruthy();
        expect(element[0]).toHaveTextContent("")
    });

})