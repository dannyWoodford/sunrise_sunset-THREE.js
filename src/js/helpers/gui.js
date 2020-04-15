function addGui(){

    gui = new dat.GUI();

        let folder = gui.addFolder( 'Sky' );
            folder.add( parameters, 'azimuth', 0, 1, 0.0001 ).onChange( updateSun );
            folder.open();
            
        uniforms = water.material.uniforms;
            folder = gui.addFolder( 'Water' );
            folder.add( uniforms.distortionScale, 'value', 0, 8, 0.1 ).name( 'distortionScale' );
            folder.add( uniforms.size, 'value', 0.1, 10, 0.1 ).name( 'size' );
            folder.add( uniforms.alpha, 'value', 0.9, 1, .001 ).name( 'alpha' );
            folder.open();
}