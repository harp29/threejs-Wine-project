class animate {
    constructor(animate, scene, camera, shape){
        requestAnimationFrame(animate);

        shape.position.y += 0.01;
    }
    
}
