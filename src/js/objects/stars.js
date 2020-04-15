function addStars(quantity, size, color){

    let  loader = new THREE.TextureLoader();
    loader.load('./assets/images/snow_mask_2.png', function(texture){
    texture.minFilter = THREE.LinearFilter;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < quantity; i++) {
        vertices.push( 
            Math.random() * 350 - 200,
            Math.random() * 80 - 40,
            Math.random() * -150 - 40
        );
    }
        
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    const material =  new THREE.PointsMaterial({
        color: color,
        size: size,
        transparent: true,
        map: texture
    })

    stars = new THREE.Points( geometry, material );
        stars.rotation.x = -1.77
        stars.rotation.y = -3.15
            stars.material.opacity = Math.random()* .3 - .3
    scene.add(stars);
    })
}






function addFlickerStars(quantity, size, color){

    let  loader = new THREE.TextureLoader();
    loader.load('./assets/images/snow_mask_2.png', function(texture){
    texture.minFilter = THREE.LinearFilter;
    
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < quantity; i++) {
        vertices.push( 
            Math.random() * 350 - 200,
            Math.random() * 80 - 40,
            Math.random() * -150 - 40
        );
    }
        
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    const material =  new THREE.PointsMaterial({
        color: color,
        size: size,
        transparent: true,
        map: texture
    })

    flickerStars = new THREE.Points( geometry, material );
        flickerStars.rotation.x = -1.77
        flickerStars.rotation.y = -3.15
            flickerStars.material.opacity = Math.random()* .3 - .3
    scene.add(flickerStars);
    })
}

function addSpace(){
    let loader = new THREE.TextureLoader();
    loader.load('./assets/images/night_sky_bg3.png', function(texture){
        texture.minFilter = THREE.LinearFilter;

        geometry = new THREE.PlaneBufferGeometry(1500,1000);
        material = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        })
        material.depthWrite = false;
        

        nightSky = new THREE.Mesh(geometry, material)
        nightSky.position.set(-170,100,-200)
        nightSky.rotation.x = -1.80
        nightSky.rotation.y = -3.15
        nightSky.material.opacity = .2

        scene.add(nightSky) 
    })
}