import {
  writeFileSync
} from 'fs';
import glob from 'glob';
import {
  getInfo
} from "@el3um4s/svelte-get-component-info";

const basePath = "src/__tests__/components/"

const listFile = glob.sync(`${basePath}**/*.svelte`);

let infoFiles = {}
listFile.forEach(file => {
  const info = getInfo(file);
  const fileName = file.substring(basePath.length);
  infoFiles[fileName] = info;
  console.log(info);
});

let data = JSON.stringify(infoFiles);
writeFileSync('./src/routes/test/infoSvelteComponents.json', data);