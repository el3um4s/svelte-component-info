/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Props from '../../lib/components/helpers/Props.svelte';

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

describe("Props.svelte", () => {
    test("should render component in the page", () => {
        const component = render(Props, { info: infoText });
        const listActions = component.getByTestId("props");
        expect(listActions).toBeVisible();
        expect(listActions).toHaveTextContent(`text`);
        expect(listActions).toHaveTextContent(`counter`);
        expect(listActions).toHaveTextContent(`label`);

        expect(listActions).toHaveTextContent(`number`);
        expect(listActions).toHaveTextContent(`string`);
        expect(listActions).toHaveTextContent(`undefined`);

    });
})