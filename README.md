# SVELTE COMPONENT INFO

Show information about the properties of a Svelte component. Designed to simplify the creation of documentation

NPM link: [@el3um4s/svelte-component-info](https://www.npmjs.com/package/@el3um4s/svelte-component-info)
Documentation: [el3um4s.github.io/svelte-component-info](https://el3um4s.github.io/svelte-component-info/)

### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/svelte-component-info
```

and then in a svelte file:

```html
<script lang="ts">
	import { SvelteInfo } from '@el3um4s/svelte-component-info';
</script>

<SvelteInfo name="SvelteTitlebar" urlPackage="@el3um4s/svelte-titlebar"
info={infoSvelteComponents['TitleBar.svelte']} description="A Titlebar component for Svelte
Projects" />
```

I recommend using it with [el3um4s/svelte-get-component-info](https://github.com/el3um4s/svelte-get-component-info).
