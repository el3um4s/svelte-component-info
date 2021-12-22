/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import { SvelteInfo } from '../../lib/index';

describe('SvelteInfo.svelte', () => {
    test("import component", () =>{
        const component = render(SvelteInfo);
        expect(component).toBeTruthy();
    })
})