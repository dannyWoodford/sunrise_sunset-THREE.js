
    function loadModels(){

        loader = new THREE.GLTFLoader()

        loader.load('assets/3d/logo/scene.gltf',
            function ( gltf ) {
                logo = gltf.scene
                logo.scale.set(.5,.5,.5)
                logo.rotation.y = 3.38
                logo.position.y = 32 
                logo.position.x = 10 
                
            
                scene.add(logo);
            }
        )

        loader.load('assets/3d/moon/scene.gltf',
            function ( gltf ) {
                moon = gltf.scene
                moon.traverse( function ( child ) {
                    
                    if ( child.isMesh ) { 
                        
                        child.material.transparent = true;
                        child.material.opacity = -.4
                        moonMaterial = child.material
                        // child.customDepthMaterial = new THREE.MeshStandardMaterial({ alphaTest: .2 });
                        // child.material.color =  new THREE.Color("rgb(255, 0, 0)");
                
                    }
                
                }  );
                moon.scale.set(1,1,1)
            
                moon.position.x = 105 
                moon.position.y = 40 
                moon.position.z = 0 

                scene.add(moon);
            }
        )
    }