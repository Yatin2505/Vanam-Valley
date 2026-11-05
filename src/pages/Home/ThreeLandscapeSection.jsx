// src/pages/Home/ThreeLandscapeSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Eye, RotateCcw, Compass, Layers, Info, MapPin } from 'lucide-react';

const ThreeLandscapeSection = () => {
  const mountRef = useRef(null);
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [activePin, setActivePin] = useState(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const terrainMeshRef = useRef(null);
  const wireframeMeshRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false, prevX: 0, prevY: 0 });

  const pins = [
    {
      id: 'residential',
      name: 'Residential Sanctuary Enclave',
      type: 'Conceptual Zone A',
      desc: 'Envisioned low-density residential plotting nestled amidst undisturbed green contours.',
      pos: { x: -12, y: 4, z: -5 },
    },
    {
      id: 'commercial',
      name: 'Commercial Frontage Corridor',
      type: 'Conceptual Zone B',
      desc: 'Prime highway access corridor positioned for business establishments and showrooms.',
      pos: { x: 14, y: 5, z: 8 },
    },
    {
      id: 'buffer',
      name: 'Ecological Forest Buffer',
      type: 'Protected Green Belt',
      desc: 'Natural woodland preservation zone ensuring continuous environmental vitality.',
      pos: { x: 0, y: 6.5, z: -16 },
    },
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x001713, 0.022);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 24, 38);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0x075C4A, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xD8B879, 2.4);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);

    const goldPoint = new THREE.PointLight(0xD8B879, 3, 60);
    goldPoint.position.set(0, 15, 0);
    scene.add(goldPoint);

    // ── Generate Procedural Topographical Terrain ──
    const cols = 70;
    const rows = 70;
    const size = 65;
    const geometry = new THREE.PlaneGeometry(size, size, cols, rows);
    geometry.rotateX(-Math.PI / 2);

    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      // Multi-frequency wave calculation for natural rolling terrain
      const y =
        Math.sin(x * 0.14) * 2.5 +
        Math.cos(z * 0.12) * 2.8 +
        Math.sin((x + z) * 0.08) * 2.2 +
        Math.sin(x * 0.3) * Math.cos(z * 0.28) * 1.2;
      pos.setY(i, y);
    }
    geometry.computeVertexNormals();

    // Dark emerald terrain surface
    const material = new THREE.MeshStandardMaterial({
      color: 0x002D26,
      roughness: 0.7,
      metalness: 0.2,
      wireframe: false,
      flatShading: true,
    });
    const terrain = new THREE.Mesh(geometry, material);
    scene.add(terrain);
    terrainMeshRef.current = terrain;

    // Glowing Gold Topographical Wireframe Overlay
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xD8B879,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
    wireframe.position.y += 0.05;
    scene.add(wireframe);
    wireframeMeshRef.current = wireframe;

    // Floating Rings
    const ringGeo = new THREE.RingGeometry(22, 22.4, 64);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xD8B879, side: THREE.DoubleSide, transparent: true, opacity: 0.25 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 8;
    scene.add(ring);

    // 3D Visual Pins on Terrain
    const pinGroup = new THREE.Group();
    pins.forEach((p) => {
      const pinPillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 4, 16),
        new THREE.MeshBasicMaterial({ color: 0xD8B879, transparent: true, opacity: 0.8 })
      );
      pinPillar.position.set(p.pos.x, p.pos.y, p.pos.z);

      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xD8B879, emissive: 0xD8B879, emissiveIntensity: 0.8, roughness: 0.2 })
      );
      beacon.position.set(p.pos.x, p.pos.y + 2.2, p.pos.z);

      pinGroup.add(pinPillar);
      pinGroup.add(beacon);
    });
    scene.add(pinGroup);

    // Mouse Interactions
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseRef.current.targetX = (clientX / width - 0.5) * 1.5;
      mouseRef.current.targetY = (clientY / height - 0.5) * 1.0;

      if (mouseRef.current.isDragging) {
        const deltaX = e.clientX - mouseRef.current.prevX;
        const deltaY = e.clientY - mouseRef.current.prevY;
        terrain.rotation.y += deltaX * 0.006;
        wireframe.rotation.y += deltaX * 0.006;
        pinGroup.rotation.y += deltaX * 0.006;
        mouseRef.current.prevX = e.clientX;
        mouseRef.current.prevY = e.clientY;
      }
    };

    const onMouseDown = (e) => {
      mouseRef.current.isDragging = true;
      mouseRef.current.prevX = e.clientX;
      mouseRef.current.prevY = e.clientY;
    };

    const onMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Touch Support for mobile
    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseRef.current.targetX = ((touch.clientX - rect.left) / width - 0.5) * 1.2;
      }
    };
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Animation Loop ──
    const startTime = performance.now();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      camera.position.x = mouseRef.current.x * 12;
      camera.position.y = 24 - mouseRef.current.y * 6;
      camera.lookAt(0, 0, 0);

      // Gentle continuous rotation
      if (!mouseRef.current.isDragging) {
        terrain.rotation.y += 0.0012;
        wireframe.rotation.y += 0.0012;
        pinGroup.rotation.y += 0.0012;
      }

      // Floating ring rotation
      ring.rotation.z += 0.002;

      // Pulse beacon lights
      goldPoint.intensity = 2.4 + Math.sin(elapsedTime * 2) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('touchmove', onTouchMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  // Toggle wireframe mode
  const handleToggleWireframe = () => {
    setWireframeOnly((prev) => {
      const next = !prev;
      if (terrainMeshRef.current) {
        terrainMeshRef.current.visible = !next;
      }
      if (wireframeMeshRef.current) {
        wireframeMeshRef.current.material.opacity = next ? 0.75 : 0.32;
      }
      return next;
    });
  };

  // Reset 3D camera
  const handleResetCamera = () => {
    if (cameraRef.current && terrainMeshRef.current && wireframeMeshRef.current) {
      cameraRef.current.position.set(0, 24, 38);
      cameraRef.current.lookAt(0, 0, 0);
      terrainMeshRef.current.rotation.y = 0;
      wireframeMeshRef.current.rotation.y = 0;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    }
  };

  return (
    <section className="relative bg-[#001713] text-white py-24 md:py-32 px-5 md:px-10 lg:px-16 overflow-hidden border-t border-b border-gold/15">
      
      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
              INTERACTIVE 3D ENVIRONMENT
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Topographical Elevation &amp; <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
              Conceptual Landscape
            </span>
          </h2>
        </div>

        <p className="font-inter text-white/70 text-xs sm:text-sm max-w-md font-light leading-relaxed">
          Interact with our conceptual 3D elevation simulation. Drag to rotate terrain contours and explore the harmonic integration of residential enclaves with natural contours.
        </p>
      </div>

      {/* ── 3D Canvas Viewport Container ── */}
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden border border-gold/25 bg-gradient-to-b from-[#001D18] to-[#00120F] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        
        {/* WebGL Canvas Mount */}
        <div
          ref={mountRef}
          className="w-full h-[450px] sm:h-[540px] md:h-[620px] cursor-grab active:cursor-grabbing select-none"
        />

        {/* ── 3D HUD Top Overlay ── */}
        <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          
          {/* Spatial Coordinates Compass */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001D18]/80 backdrop-blur-md border border-gold/30 text-xs font-inter text-gold/90 pointer-events-auto">
            <Compass size={14} className="text-gold animate-spin-slow" />
            <span className="tracking-widest font-mono text-[11px]">21°48'N • 80°11'E</span>
          </div>

          {/* Interactive Controls Pill */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleToggleWireframe}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-inter transition-all ${
                wireframeOnly
                  ? 'bg-gold text-[#002620] font-semibold shadow-gold'
                  : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/15'
              }`}
              title="Toggle Mesh / Wireframe"
            >
              <Layers size={13} />
              <span>{wireframeOnly ? 'Full Mesh' : 'Wireframe'}</span>
            </button>

            <button
              onClick={handleResetCamera}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 border border-white/15 text-xs font-inter transition-all"
              title="Reset View"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* ── Interactive Pin Legend (Bottom Left) ── */}
        <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-md z-10 flex flex-col gap-2 pointer-events-auto">
          <div className="p-4 rounded-2xl bg-[#001D18]/90 backdrop-blur-md border border-gold/25 text-left shadow-xl">
            <div className="flex items-center gap-2 text-gold text-[10px] font-inter font-semibold tracking-wider uppercase mb-1.5">
              <MapPin size={12} />
              <span>Interactive Conceptual Sectors</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-inter">
              {pins.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePin(activePin === p.id ? null : p.id)}
                  className={`px-2.5 py-1.5 rounded-lg border text-left transition-all ${
                    activePin === p.id
                      ? 'bg-gold text-[#002620] border-gold font-medium'
                      : 'bg-white/5 border-white/10 text-white/80 hover:border-gold/50'
                  }`}
                >
                  <div className="font-semibold truncate">{p.name.split(' ')[0]}</div>
                  <div className="text-[9px] opacity-70 truncate">{p.type}</div>
                </button>
              ))}
            </div>

            {/* Active Pin Detailed Info Drawer */}
            {activePin && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 pt-3 border-t border-white/10 text-xs text-white/80"
              >
                <div className="font-playfair font-bold text-sm text-gold">
                  {pins.find((p) => p.id === activePin)?.name}
                </div>
                <p className="mt-1 font-light leading-relaxed">
                  {pins.find((p) => p.id === activePin)?.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* ── Official Architectural Disclaimer (Bottom Right) ── */}
        <div className="hidden lg:flex absolute bottom-5 right-5 z-10 max-w-xs items-center gap-2.5 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-inter text-white/55">
          <Info size={14} className="text-gold flex-shrink-0" />
          <span>
            Conceptual Topographical Visualization. Actual layout demarcations and masterplan will be confirmed upon formal survey releases.
          </span>
        </div>

      </div>

    </section>
  );
};

export default ThreeLandscapeSection;
