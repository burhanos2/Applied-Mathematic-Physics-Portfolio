let width = window.innerWidth;
let height = window.innerHeight;

let scene, camera, renderer;
let myCube;

function setUp()
{
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
	renderer = new THREE.WebGLRenderer();
	
	renderer.setSize(width, height);
	
	scene.background = new THREE.Color(0xeeeeee);
	document.body.appendChild(renderer.domElement);
	
	let texture = new THREE.TextureLoader().load('https://ichef.bbci.co.uk/news/660/media/images/79651000/jpg/_79651969_79651861.jpg');
	
	let geometry = new THREE.BoxGeometry(2,2,2);
	let material = new THREE.MeshBasicMaterial({map: texture, wireframe: true});
	
	myCube = new THREE.Mesh(geometry, material);
	scene.add(myCube);
	
	camera.position.z = 5;
	animate();
}

function animate()
{
	requestAnimationFrame(animate);
	
	myCube.rotation.x += 0.01;
	myCube.rotation.y += 0.01;
	
	renderer.render(scene, camera);
	
}

setUp();