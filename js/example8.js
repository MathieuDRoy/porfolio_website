var scene, camera, renderer, cube, controls, sculpture;
init();
animate();

function init() {

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
    
    //threeD = readFile();

    const fileList = new Array();
    let fileContent = "";

    const fr = new FileReader();
    fr.onload = () => {
    fileContent = fr.result;
    console.log('Commands', fileContent);
    }

    fr.readAsText(fileList[0]);

    console.log(threeD[1]);

    camera.position.z = distanceforcam;
    
    controls.enablePan = false;
    controls.enableDamping = true;   

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

async function readFile() {
    try {
        const contents = await fsPromises.readFile(basic.pos, 'utf-8');
    
        const arr = contents.split(/\r?\n/);
    
        console.log(arr);
        
    
        return arr;
      } catch (err) {
        console.log(err);
      }
}

window.addEventListener('resize', onWindowResize);