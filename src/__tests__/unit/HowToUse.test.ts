/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import HowToUSe from '../../lib/components/helpers/HowToUse.svelte';

const infoNull = { "props": [], "actions": [], "slots": [] };

const infoText = {
    "props": [
        { "name": "text", "type": "string", "defaultValue": "Hello World!" },
        { "name": "counter", "type": "number", "defaultValue": "0" },
        { "name": "label", "type": "string" }
    ],
    "actions": [{ "name": "calc" }, { "name": "mouse-enter" }, { "name": "mouse-leave" }],
    "slots": [{ "anonymous": true }, { "name": "description", "anonymous": false }]
};

describe("HowToUSe.svelte", () => {
    test("should render url package in the page", () => {
        const component = render(HowToUSe, { urlPackage:"hello", name: "name", info: infoText});
        const element = component.getByTestId("how-to-use");
        expect(element).toBeTruthy();
        expect(element).toHaveTextContent("To import the package in a project:")
    });

    test("should not render url package in the page", () => {
        const component = render(HowToUSe, { name: "name", info: infoText});
                const element = component.getByTestId("how-to-use");
        expect(element).toBeTruthy();
        expect(element).not.toHaveTextContent("To import the package in a project:")
    });

})