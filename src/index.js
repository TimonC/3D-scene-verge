import * as v3d from 'verge3d';

const app = new v3d.App('v3d-container');

app.loadScene('cube.glb', () => {
    app.enableControls();
    app.run();
});