import * as THREE from "three";
import {Vector3} from "three/src/math/Vector3";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


let pixelRatio:number = window.devicePixelRatio //像素
let s = 600// 三维场景显示范围控制系数，系数越大，显示的范围越大
let k = 0
let scene:THREE.Scene|null; //场景
let camera:THREE.Camera|null; //相机
let renderer:THREE.WebGLRenderer|null; //渲染器
let light:THREE.HemisphereLight; //自然光源
let axesHelper:THREE.AxesHelper; //辅助内容
let controls:OrbitControls; //控制器
let three:HTMLElement; //dom结点
let  animationFlag:number|null = null;

//初始化项目
function init():void{
    scene = new THREE.Scene();
    k = window.innerWidth/ window.innerHeight //窗口高宽比
    camera = new THREE.PerspectiveCamera(50, k, 0.1, 500000)
    camera.position.set(0, 500, 500)

    //初始化渲染器 antialias=抗锯齿
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF);

    let three = document.getElementById('three');
    three&&three.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new Vector3(0,0,0);
    controls.update();

    light = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 1);
    scene.add(light);

    axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);

    const size = 10000;
    const divisions = 200;

    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );
}

init();
render();

function render(){
    if(renderer && scene && camera){
        renderer.render(scene, camera);
    }
    animationFlag = requestAnimationFrame(render);
}
