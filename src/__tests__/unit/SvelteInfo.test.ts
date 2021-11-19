/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import { SvelteInfo } from '../../lib/index';

const infoSvelteComponents = {
	'Hello.svelte': { props: [], actions: [] },
	'Text.svelte': {
		props: [
			{ name: 'text', type: 'string', defaultValue: 'Hello World!' },
			{ name: 'counter', type: 'number', defaultValue: '0' },
			{ name: 'label', type: 'string' },
			{ name: 'jolly' }
		],
		actions:[
			{name:"calc"},
			{name:"mouse-enter"},
			{name:"mouse-leave"}
		]
	}
};

describe("should render component in the page", () => {

	test('without props', () => {
		const svelteInfo = render(SvelteInfo, {});
		expect(svelteInfo.queryByRole("heading")).toBeNull();
		expect(svelteInfo.queryByTestId("list-of-props")).toBeNull();
		expect(svelteInfo.queryByTestId("table-of-props")).toBeNull();
	});


	test('without name but with urlPackage', () => {
		const svelteInfo = render(SvelteInfo, {urlPackage: "@test-no-exist/hello-svelte"});

		const importCode = svelteInfo.getByTestId("import-code");
		expect(importCode).toBeInTheDocument();
		expect(importCode).toBeVisible();
		expect(importCode).toHaveTextContent("@test-no-exist/hello-svelte");
		expect(importCode).toHaveTextContent("CustomComponent");
	});

	test('simple', () => {
		const svelteInfo = render(SvelteInfo, { name:"Hello", info: infoSvelteComponents['Hello.svelte']});
		expect(svelteInfo.queryByRole("heading")).toBeTruthy();
		const title = svelteInfo.getByRole("heading");
		expect(title).toBeInTheDocument();
		expect(title).toBeVisible();
		expect(title).toHaveTextContent(/^Hello$/);
	
		expect(svelteInfo.queryByTestId("description")).toBeNull();
		expect(svelteInfo.queryByTestId("list-of-props")).toBeNull();
		expect(svelteInfo.queryByTestId("table-of-props")).toBeNull();
		expect(svelteInfo.queryByTestId("urlPackage")).toBeNull();
		expect(svelteInfo.queryByTestId("import-code")).toBeNull();
	});

	test('simple - with description', () => {
		const svelteInfo = render(SvelteInfo, { name:"Hello", description: "A Simple Svelte component - without props, actions, styles and slots.", info: infoSvelteComponents['Hello.svelte']});
		const description = svelteInfo.getByTestId("description");
		expect(description).toBeInTheDocument();
		expect(description).toBeVisible();
		expect(description).toHaveTextContent("A Simple Svelte component - without props, actions, styles and slots.");
	});

	test('simple - with urlPackage', () => {
		const svelteInfo = render(SvelteInfo, { name:"Hello", urlPackage: "@test-no-exist/hello-svelte", info: infoSvelteComponents['Hello.svelte']});
		const urlPackage = svelteInfo.getByTestId("urlPackage");
		expect(urlPackage).toBeInTheDocument();
		expect(urlPackage).toBeVisible();
		expect(urlPackage).toHaveTextContent("@test-no-exist/hello-svelte");

		const importCode = svelteInfo.getByTestId("import-code");
		expect(importCode).toBeInTheDocument();
		expect(importCode).toBeVisible();
		expect(importCode).toHaveTextContent("@test-no-exist/hello-svelte");
		expect(importCode).toHaveTextContent("Hello");
	});

	test('with props', () => {
		const svelteInfo = render(SvelteInfo, { name:"Text", urlPackage: "@test-no-exist/hello-svelte", info: infoSvelteComponents['Text.svelte']});
		
		const listOfProps = svelteInfo.getByTestId("list-of-props");
		expect(listOfProps).toBeInTheDocument();
		expect(listOfProps).toBeVisible();

		const listOfPropsItems = listOfProps.getElementsByTagName("li");
		expect(listOfPropsItems.length).toBe(infoSvelteComponents['Text.svelte'].props.length);

		for (let i = 0; i < listOfPropsItems.length; i++) {
			const element = listOfPropsItems[i];
			expect(element).toHaveClass("list-of-props-name");
			expect(element).toHaveTextContent(infoSvelteComponents['Text.svelte'].props[i].name);	
		};

		const tableOfProps = svelteInfo.getByTestId("table-of-props");
		expect(tableOfProps).toBeInTheDocument();
		expect(tableOfProps).toBeVisible();
	});

	test('with actions', () => {
		const svelteInfo = render(SvelteInfo, { name:"Text", urlPackage: "@test-no-exist/hello-svelte", info: infoSvelteComponents['Text.svelte']});
		
		const listOfActions = svelteInfo.getByTestId("list-of-actions");
		expect(listOfActions).toBeInTheDocument();
		expect(listOfActions).toBeVisible();

		const listOfActionsItems = listOfActions.getElementsByTagName("li");
		expect(listOfActionsItems.length).toBe(infoSvelteComponents['Text.svelte'].actions.length);

		for (let i = 0; i < listOfActionsItems.length; i++) {
			const element = listOfActionsItems[i];
			expect(element).toHaveClass("list-of-actions-name");
			expect(element).toHaveTextContent(infoSvelteComponents['Text.svelte'].actions[i].name);	
		};
	});

})
