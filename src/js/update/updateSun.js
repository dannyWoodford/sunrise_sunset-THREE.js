
    function updateSun() {
        let theta = Math.PI * ( parameters.inclination - 0.5 );
        let phi = 2 * Math.PI * ( parameters.azimuth - 0.5 );

            light.position.x = parameters.distance * Math.cos( phi );
            light.position.y = parameters.distance * Math.sin( phi ) * Math.sin( theta );
            light.position.z = parameters.distance * Math.sin( phi ) * Math.cos( theta );
            
            
            sky.material.uniforms[ 'sunPosition' ].value = light.position.copy( light.position );
            water.material.uniforms[ 'sunDirection' ].value.copy( light.position ).normalize();

            cubeCamera.update( renderer, sky );
    }