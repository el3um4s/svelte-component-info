/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import CSSVariables from '../../lib/components/helpers/CSSVariables.svelte';

const infoNull = { "props": [], "actions": [], "slots": [], "css": [] };

const infoText = {
    "props": [
        { "name": "text", "type": "string", "defaultValue": "Hello World!" },
        { "name": "counter", "type": "number", "defaultValue": "0" },
        { "name": "label", "type": "string" }
    ],
    "actions": [{ "name": "calc" }, { "name": "mouse-enter" }, { "name": "mouse-leave" }],
    "slots": [{ "anonymous": true }, { "name": "description", "anonymous": false }],
    "css": [{ "name": "--background-color" }, { "name": "--font-size" }, { "name": "--radius" }, { "name": "--hello" }]
};

describe("CSSVariables.svelte", () => {
    test("should render component in the page", () => {
        const component = render(CSSVariables, { info: infoText });
        const listCSS = component.getByTestId("css-variables");
        expect(listCSS).toBeVisible();
        expect(listCSS).toHaveTextContent(`--background-color`);
        expect(listCSS).toHaveTextContent(`--font-size`);
        expect(listCSS).toHaveTextContent(`--radius`);
        expect(listCSS).toHaveTextContent(`--hello`);

        const items = component.container.getElementsByTagName("li");
        expect(items.length).toBe(infoText.css.length);
    });

    test("should not render list in the page", () => {
        const component = render(CSSVariables, { info: infoNull });
        const listCSS = component.getByTestId("css-variables");
        expect(listCSS).toBeVisible();
        const items = component.container.getElementsByTagName("li");
        expect(items.length).toBe(infoNull.css.length);
    });


})