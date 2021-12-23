/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Actions from '../../lib/components/helpers/Actions.svelte';

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

describe("Actions.svelte", () => {
    test("should render component in the page", () => {
        const component = render(Actions, { info: infoText });
        const listActions = component.getByTestId("actions");
        expect(listActions).toBeVisible();
        expect(listActions).toHaveTextContent(`on:calc`);
        expect(listActions).toHaveTextContent(`on:mouse-enter`);
        expect(listActions).toHaveTextContent(`on:mouse-leave`);

        const items = component.container.getElementsByTagName("li");
        expect(items.length).toBe(infoText.actions.length);
    });

    test("should not render list in the page", () => {
        const component = render(Actions, { info: infoNull });
        const listActions = component.getByTestId("actions");
        expect(listActions).toBeVisible();
        const items = component.container.getElementsByTagName("li");
        expect(items.length).toBe(infoNull.actions.length);
    });


})