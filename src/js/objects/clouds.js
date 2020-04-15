function addClouds(){
    let  cloudLoader = new THREE.TextureLoader();
    cloudLoader.load('./assets/images/cloud_texture_2.png', function(texture){
        texture.minFilter = THREE.LinearFilter;

        cloudGeo = new THREE.PlaneBufferGeometry(500,80);
        cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        })
        cloudMaterial.depthWrite = false;

        for (let p = 0; p < 10; p++) {
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
                cloud.position.set(
                    Math.random()* 800 -350,
                    Math.random()* 10 +5,
                    Math.random()* -300 +100,
                )
                cloud.rotation.x = 3.1
                cloud.rotation.y = -3.2
                // cloud.rotation.z = Math.random() * 160
                cloud.material.opacity = Math.random()* .3 - .3,

                cloudParticle.push(cloud)
                scene.add(cloud) 
        }
    })
}
