// for colour picking https://threejs.org/examples/#webgl_materials_car

var scene, camera, renderer, controls;
var vDrawBox = false;
var threeD = new Array();
var perspective;

function init(v_output) {
    scene = new THREE.Scene();    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xffffff ); // white background
    document.body.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    //controls.autoRotate = true;
    controls.update();

    threeD = cleanArray(v_output);
    drawBox();
    drawModel();

    camera.position.z = threeD[0];

    controls.enablePan = false;
    controls.enableDamping = true;

    animate();
}

function animate() {

    /*if (perspective == 1) {
        camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
        controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.update();
        camera.position.z = threeD[0];
        console.log("no");
    } else if (perspective == 2) {
        camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth,  window.innerWidth / -2,  window.innerWidth / 2, 0.1, 1000);
        controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.update();
        camera.position.z = threeD[0];
        console.log("yes");
    }*/
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

function drawBox() {
    if (vDrawBox == true) {
        const boxMaterial = new THREE.MeshBasicMaterial( { color: "#000000"} );
        var modelDimentians = new Array();

        for (let allCoordinates = 0; allCoordinates < 9; allCoordinates++) {
            modelDimentians[allCoordinates] = threeD[allCoordinates]/2;
        }

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
    }
    
}

function drawModel() {

    while(scene.children.length > 0){ 
        for (let allChildren = 0; allChildren< scene.children.length; allChildren++ ){
            scene.remove(scene.children[allChildren]); 
        }
        
    }

    const geometry = new THREE.SphereGeometry(document.getElementById("radius").value, document.getElementById("slice").value, document.getElementById("stack").value);

    const material0 = new THREE.MeshBasicMaterial( { color: document.getElementById("zeroColour").value} );
    const material1 = new THREE.MeshBasicMaterial( { color: document.getElementById("oneColour").value} );
    const material2 = new THREE.MeshBasicMaterial( { color: document.getElementById("twoColour").value} );
    const material3 = new THREE.MeshBasicMaterial( { color: document.getElementById("threeColour").value} );
    const material4 = new THREE.MeshBasicMaterial( { color: document.getElementById("fourColour").value} );
    const material5 = new THREE.MeshBasicMaterial( { color: document.getElementById("fiveColour").value} );
    const material6 = new THREE.MeshBasicMaterial( { color: document.getElementById("sixColour").value} );
    const material7 = new THREE.MeshBasicMaterial( { color: document.getElementById("sevenColour").value} );
    const material8 = new THREE.MeshBasicMaterial( { color: document.getElementById("eightColour").value} );
    const material9 = new THREE.MeshBasicMaterial( { color: document.getElementById("nineColour").value} );
    const material10 = new THREE.MeshBasicMaterial( { color: "#000000"} );

    var particles = new Array();

    for (let allParticles = 9; allParticles < threeD.length; allParticles += 6) {
        particles[allParticles] = new Array();
        if (threeD[allParticles + 1] == "0"){
            particles[allParticles] = new THREE.Mesh( geometry, material0 );
        } else if (threeD[allParticles + 1] == "1"){
            particles[allParticles] = new THREE.Mesh( geometry, material1 );
        } else if (threeD[allParticles + 1] == "2"){
            particles[allParticles] = new THREE.Mesh( geometry, material2 );
        } else if (threeD[allParticles + 1] == "3"){
            particles[allParticles] = new THREE.Mesh( geometry, material3 );
        } else if (threeD[allParticles + 1] == "4"){
            particles[allParticles] = new THREE.Mesh( geometry, material4 );
        } else if (threeD[allParticles + 1] == "5"){
            particles[allParticles] = new THREE.Mesh( geometry, material5 );
        } else if (threeD[allParticles + 1] == "6"){
            particles[allParticles] = new THREE.Mesh( geometry, material6 );
        } else if (threeD[allParticles + 1] == "7"){
            particles[allParticles] = new THREE.Mesh( geometry, material7 );
        } else if (threeD[allParticles + 1] == "8"){
            particles[allParticles] = new THREE.Mesh( geometry, material8 );
        } else if (threeD[allParticles + 1] == "9"){
            particles[allParticles] = new THREE.Mesh( geometry, material9 );
        } else {
            particles[allParticles] = new THREE.Mesh( geometry, material10 );
        }
        scene.add(particles[allParticles]);
        particles[allParticles].position.set(threeD[allParticles+2]-51, threeD[allParticles+3]-51, threeD[allParticles+4]-51);
        
    }

    drawBox();
}

function setCameraView() {
    if (document.getElementById("setCamera") == "on"){
        perspective = 1;
    } else {
        perspective = 2;
    }
}


window.addEventListener('resize', onWindowResize);