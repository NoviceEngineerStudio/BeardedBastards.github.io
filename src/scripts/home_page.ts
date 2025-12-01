import * as THREE from "three";

const CLEAR_COLOR: THREE.ColorRepresentation = 0x161312;

class HomePageCanvas extends HTMLElement {
    private scene: THREE.Scene = new THREE.Scene();
    private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
        70.0, // FOV
        1.0, // Aspect Ratio (will be updated on resize)
        0.1, // Near clipping plane
        100.0 // Far clipping plane
    );

    private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
        antialias: true
    });

    constructor() {
        super();

        this.renderer.setAnimationLoop(this.onRender.bind(this));
        this.renderer.setClearColor(CLEAR_COLOR);

        this.renderer.domElement.style.setProperty("width", "100%");
        this.renderer.domElement.style.setProperty("height", "100%");
        this.appendChild(this.renderer.domElement);

        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this));
    }

    private onResize() {
        const width: number = this.clientWidth;
        const height: number = this.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    private onRender() {
        this.renderer.render(this.scene, this.camera);
    }
};

customElements.define('home-page-canvas', HomePageCanvas);