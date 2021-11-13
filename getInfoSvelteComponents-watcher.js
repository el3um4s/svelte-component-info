import {
    watch
} from 'fs';

import {
    exec
} from 'child_process';

exec("npm run get-info-svelte-components");

watch('./src/lib/components', () => {
    exec("npm run get-info-svelte-components");
});