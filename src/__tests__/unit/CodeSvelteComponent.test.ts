/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import CodeSvelteComponent from '../../lib/components/helpers/CodeSvelteComponent.svelte';

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


describe("CodeSvelteComponent.svelte", () => {
    test("should render component in the page: only default name", () => {
        const component = render(CodeSvelteComponent, {info: infoNull });
        const element = component.getByTestId("only-name");
        expect(element).toBeVisible();
        expect(element).toHaveTextContent(`<CustomComponent />`);
    });
    test("should render component in the page: only custom name", () => {
        const component = render(CodeSvelteComponent, {name: "Hello", info: infoNull });
        const element = component.getByTestId("only-name");
        expect(element).toBeVisible();
        expect(element).toHaveTextContent(`<Hello />`);
    });

    test("should render component in the page: with info", () => {
        const component = render(CodeSvelteComponent, {name: "Hello", info: infoText });
        const listPropsAndActions = component.getByTestId("props-actions");
        expect(listPropsAndActions).toBeVisible();
        expect(listPropsAndActions).toHaveTextContent(/text/);
        expect(listPropsAndActions).toHaveTextContent(/counter/);
        expect(listPropsAndActions).toHaveTextContent(/label/);
        expect(listPropsAndActions).toHaveTextContent(`on:calc`);
        expect(listPropsAndActions).toHaveTextContent(`on:mouse-enter`);
        expect(listPropsAndActions).toHaveTextContent(`on:mouse-leave`);
        const listSlots = component.getByTestId("slots");
        expect(listSlots).toBeVisible();
        expect(listSlots).toHaveTextContent(`<div> Slot anonymous </div>`);
        expect(listSlots).toHaveTextContent(`<div slot="description" > Named slot </div>`);
    });

})