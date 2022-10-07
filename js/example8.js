// for colour picking https://threejs.org/examples/#webgl_materials_car

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
    const boxMaterial = new THREE.MeshBasicMaterial( { color: "#000000"} );
    
    var threeD = new Array();
    threeD = cleanArray(v_output);

    
    var modelDimentians = new Array();

    for (let allCoordinates = 0; allCoordinates < 9; allCoordinates++) {
        modelDimentians[allCoordinates] = threeD[allCoordinates]/2;
    }

    console.log(modelDimentians[5]);

    const points1 = [];
    points1.push( new THREE.Vector3( -modelDimentians[0],  modelDimentians[4], -modelDimentians[8] ) );
    points1.push( new THREE.Vector3( -modelDimentians[0],  modelDimentians[4],  modelDimentians[8] ) );
    points1.push( new THREE.Vector3(  modelDimentians[0],  modelDimentians[4],  modelDimentians[8] ) );
    points1.push( new THREE.Vector3(  modelDimentians[0], -modelDimentians[4],  modelDimentians[8] ) );
    const geometryForBox1 = new THREE.BufferGeometry().setFromPoints( points1 );
    const line1 = new THREE.Line( geometryForBox1, boxMaterial );
    scene.add( line1 );

    const points2 = [];
    points2.push( new THREE.Vector3( -modelDimentians[0], -modelDimentians[4], -modelDimentians[8] ) );
    points2.push( new THREE.Vector3( -modelDimentians[0],  modelDimentians[4], -modelDimentians[8] ) );
    points2.push( new THREE.Vector3(  modelDimentians[0],  modelDimentians[4], -modelDimentians[8] ) );
    points2.push( new THREE.Vector3(  modelDimentians[0],  modelDimentians[4],  modelDimentians[8] ) );
    const geometryForBox2 = new THREE.BufferGeometry().setFromPoints( points2 );
    const line2 = new THREE.Line( geometryForBox2, boxMaterial );
    scene.add( line2 );

    const points3 = [];
    points3.push( new THREE.Vector3(  modelDimentians[0],  modelDimentians[4], -modelDimentians[8] ) );
    points3.push( new THREE.Vector3(  modelDimentians[0], -modelDimentians[4], -modelDimentians[8] ) );
    points3.push( new THREE.Vector3( -modelDimentians[0], -modelDimentians[4], -modelDimentians[8] ) );
    points3.push( new THREE.Vector3( -modelDimentians[0], -modelDimentians[4],  modelDimentians[8] ) );
    const geometryForBox3 = new THREE.BufferGeometry().setFromPoints( points3 );
    const line3 = new THREE.Line( geometryForBox3, boxMaterial );
    scene.add( line3 );

    const points4 = [];
    points4.push( new THREE.Vector3( -modelDimentians[0],  modelDimentians[4],  modelDimentians[8] ) );
    points4.push( new THREE.Vector3( -modelDimentians[0], -modelDimentians[4],  modelDimentians[8] ) );
    points4.push( new THREE.Vector3(  modelDimentians[0], -modelDimentians[4],  modelDimentians[8] ) );
    points4.push( new THREE.Vector3(  modelDimentians[0], -modelDimentians[4], -modelDimentians[8] ) );
    const geometryForBox4 = new THREE.BufferGeometry().setFromPoints( points4 );
    const line4 = new THREE.Line( geometryForBox4, boxMaterial );
    scene.add( line4 );


    var particles = new Array();

    for (let allParticles = 9; allParticles < threeD.length; allParticles += 6) {
        particles[allParticles] = new Array();
        if (threeD[allParticles + 1] == "0"){
            particles[allParticles] = new THREE.Mesh( geometry, material1 );
        } else if (threeD[allParticles + 1] == "1"){
            particles[allParticles] = new THREE.Mesh( geometry, material2 );
        } else {
            particles[allParticles] = new THREE.Mesh( geometry, material3 );
        }
        
        scene.add(particles[allParticles]);
        particles[allParticles].position.set(threeD[allParticles+2]-51, threeD[allParticles+3]-51, threeD[allParticles+4]-51);
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