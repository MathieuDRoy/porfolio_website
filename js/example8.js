var scene, camera, renderer, cube, controls, sculpture;



function init(v_output) {



    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true;
    controls.update();
    
    var distanceforcam = 2*10;

    const geometry = new THREE.SphereGeometry(1, 20, 20);

    const material = new THREE.MeshBasicMaterial( { color: "#7A7AAF"} );
    var threeD = new Array();

    threeD = v_output.split(' ');
    alert(threeD);

    
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


window.addEventListener('resize', onWindowResize);