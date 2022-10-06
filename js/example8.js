var scene, camera, renderer, cube, controls, sculpture;

function init(v_output) {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xffffff ); // white background
    document.body.appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true;
    controls.update();
    
    var distanceforcam = 2*100;

    const geometry = new THREE.SphereGeometry(2.7, 20, 20);

    const material1 = new THREE.MeshBasicMaterial( { color: "#FF0000"} );
    const material2 = new THREE.MeshBasicMaterial( { color: "#0000FF"} );
    const material3 = new THREE.MeshBasicMaterial( { color: "#00FF00"} );
    var particles = new Array();
    var threeD = new Array();
    threeD = cleanArray(v_output);
    var x = 0;
    var y = 0;
    var z = 0;

    //console.log(threeD);



    for (let allParticles = 9; allParticles < threeD.length; allParticles += 6) {
        particles[allParticles] = new Array();
        console.log(allParticles);
        if (threeD[allParticles + 1] == "0"){
            particles[allParticles] = new THREE.Mesh( geometry, material1 );
        } else if (threeD[allParticles + 1] == "1"){
            particles[allParticles] = new THREE.Mesh( geometry, material2 );
        } else {
            particles[allParticles] = new THREE.Mesh( geometry, material3 );
        }
        
        scene.add(particles[allParticles]);
        particles[allParticles].position.set(threeD[allParticles+2], threeD[allParticles+3], threeD[allParticles+4]);
    }


    camera.position.z = distanceforcam;
    
    controls.enablePan = false;
    controls.enableDamping = true;

    animate();
}

function animate() {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function cleanArray (v_output) {
    var arrForCleanData = new Array();
    arrFromFile = v_output.split(' ');
    var nextDataPoint = 0;
    var coordinateData;
    for (let i = 0; i < arrFromFile.length; i++){
        coordinateData = arrFromFile[i];
        if (coordinateData != "") {
            arrForCleanData[nextDataPoint] = coordinateData;
            nextDataPoint++;
        }
    }
    return arrForCleanData;
}


window.addEventListener('resize', onWindowResize);