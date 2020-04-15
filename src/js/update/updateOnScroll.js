
function updateOnScroll(){
    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener("wheel", function(e) {
        {
            scrollNumber = event.deltaY
    // console.info(event.deltaY);
            if (event.deltaY > 0)
                {
                    
                    
                    moonMaterial.opacity += .025
                    moon.scale.x += .01
                    moon.scale.y += .01
                    moon.scale.z += .01
                    moon.rotation.y += .04
                    moon.position.y += .9

                    cloudParticle.forEach( p => {
                        p.position.z += 0.9
                        p.position.x += 0.09
                        p.rotation.x += .01
                        if(p.material.opacity < .7){
                            p.material.opacity += .0008
                        }
                    })
                        stars.material.opacity += .016
                        if(nightSky.material.opacity < .3){
                            nightSky.material.opacity += .01
                        }
                        
                    sun.position.y -= 19
                    sun.scale.x -= .013
                    sun.scale.y -= .013
                    sun.scale.z -= .013

                    logo.position.y -= 1.1
                    parameters.inclination += .0014
                    updateSun()
                    // console.log(light.position.z, "lightpoition" )
                }
            else if (event.deltaY < 0)
                {
                    
                    // console.log('scrolling up');
                    moonMaterial.opacity -= .025
                    moon.scale.x -= .01
                    moon.scale.y -= .01
                    moon.scale.z -= .01
                    moon.rotation.y -= .04
                    moon.position.y -= .9

                    cloudParticle.forEach( p => {
                        p.position.z -= 0.9
                        p.position.x -= 0.09
                        p.rotation.x -= .01
                        if(p.material.opacity > 0){
                            p.material.opacity -= .0008
                        }
                    })

                        stars.material.opacity -= .016
                        if(nightSky.material.opacity > .2){
                            nightSky.material.opacity -= .01
                        }

                    sun.position.y += 19
                    sun.scale.x += .013
                    sun.scale.y += .013
                    sun.scale.z += .013

                    logo.position.y += 1.1
                    parameters.inclination -= .0014
                    updateSun()
                    // console.log(parameters.inclination)
                }
        }
    })
}