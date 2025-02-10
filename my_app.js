import * as v3d from './node_modules/verge3d/build/v3d.module.js';

const app = new v3d.App('v3d-container');

app.loadScene('/assets/cube.glb', () => {
    app.enableControls();
    app.run();
});