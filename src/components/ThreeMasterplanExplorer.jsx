// src/components/ThreeMasterplanExplorer.jsx
// High-Performance 3D WebGL Masterplan & Plot Explorer powered by Three.js
// Interactive 3D plot meshes, raycasting hover/click, camera views, and lighting toggles

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  Compass,
  Maximize2,
  Eye,
  Sun,
  Moon,
  Sunset,
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  MessageCircle,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { business } from '../data/siteData';

// Sector Plot Definitions (Architectural Real Estate Data for Balaghat)
export const plotData = [
  // Sector A: Residential Enclave
  {
    id: 'R-101',
    number: 'Plot 101',
    sector: 'Sector A · Residential',
    category: 'residential',
    area: '1,200 Sq.Ft',
    sqft: 1200,
    dims: '30 ft × 40 ft',
    roadWidth: '30 ft Paved Internal Road',
    facing: 'East Facing (Vastu Compliant)',
    status: 'Available',
    statusColor: '#10B981', // green
    priceRange: '₹14.4 Lakhs onwards',
    coords: { x: -35, z: -20, w: 18, h: 24 },
    note: 'Prime East-facing residential parcel near internal green avenue.',
  },
  {
    id: 'R-102',
    number: 'Plot 102',
    sector: 'Sector A · Residential',
    category: 'residential',
    area: '1,500 Sq.Ft',
    sqft: 1500,
    dims: '30 ft × 50 ft',
    roadWidth: '30 ft Paved Internal Road',
    facing: 'North Facing',
    status: 'In Planning',
    statusColor: '#F59E0B', // amber
    priceRange: '₹18.0 Lakhs onwards',
    coords: { x: -14, z: -20, w: 18, h: 24 },
    note: 'Generous front garden setback, ideal for independent duplex construction.',
  },
  {
    id: 'R-103',
    number: 'Plot 103 (Corner)',
    sector: 'Sector A · Residential',
    category: 'residential',
    area: '1,800 Sq.Ft',
    sqft: 1800,
    dims: '36 ft × 50 ft',
    roadWidth: 'Dual 40 ft & 30 ft Corner Frontage',
    facing: 'North-East Corner',
    status: 'Available',
    statusColor: '#10B981',
    priceRange: '₹22.5 Lakhs onwards',
    coords: { x: 8, z: -20, w: 22, h: 24 },
    note: 'Premium dual-road corner plot offering open natural ventilation and dual car parking access.',
  },
  {
    id: 'R-104',
    number: 'Plot 104',
    sector: 'Sector A · Residential',
    category: 'residential',
    area: '1,200 Sq.Ft',
    sqft: 1200,
    dims: '30 ft × 40 ft',
    roadWidth: '30 ft Paved Internal Road',
    facing: 'East Facing',
    status: 'Available',
    statusColor: '#10B981',
    priceRange: '₹14.4 Lakhs onwards',
    coords: { x: -35, z: 8, w: 18, h: 24 },
    note: 'Compact efficient rectangular format, perfect for nuclear family home plan.',
  },
  {
    id: 'R-105',
    number: 'Plot 105',
    sector: 'Sector A · Residential',
    category: 'residential',
    area: '2,000 Sq.Ft',
    sqft: 2000,
    dims: '40 ft × 50 ft',
    roadWidth: '40 ft Central Avenue',
    facing: 'North Facing',
    status: 'Priority Allocation',
    statusColor: '#E5C378', // gold
    priceRange: '₹26.0 Lakhs onwards',
    coords: { x: -14, z: 8, w: 20, h: 24 },
    note: 'Colossal residential acreage facing central landscaped avenue with wide setbacks.',
  },
  {
    id: 'R-106',
    number: 'Plot 106',
    sector: 'Sector A · Residential',
    category: 'residential',
    area: '1,500 Sq.Ft',
    sqft: 1500,
    dims: '30 ft × 50 ft',
    roadWidth: '30 ft Paved Internal Road',
    facing: 'East Facing',
    status: 'Available',
    statusColor: '#10B981',
    priceRange: '₹18.0 Lakhs onwards',
    coords: { x: 10, z: 8, w: 18, h: 24 },
    note: 'Clear boundary demarcations with instant registry readiness in Balaghat.',
  },

  // Sector B: Commercial Frontage Corridors
  {
    id: 'C-201',
    number: 'Commercial C-1',
    sector: 'Sector B · Commercial Frontage',
    category: 'commercial',
    area: '2,400 Sq.Ft',
    sqft: 2400,
    dims: '40 ft × 60 ft Frontage',
    roadWidth: '60 ft Main Arterial Corridor',
    facing: 'Main Boulevard Frontage',
    status: 'Available',
    statusColor: '#10B981',
    priceRange: 'Custom Pricing on Inquiry',
    coords: { x: 42, z: -20, w: 26, h: 24 },
    note: 'High-visibility frontage on main arterial highway route, ideal for showroom or multi-story retail.',
  },
  {
    id: 'C-202',
    number: 'Commercial C-2 (Junction)',
    sector: 'Sector B · Commercial Frontage',
    category: 'commercial',
    area: '3,000 Sq.Ft',
    sqft: 3000,
    dims: '50 ft × 60 ft Frontage',
    roadWidth: 'Dual 60 ft Highway & 40 ft Avenue',
    facing: 'Junction Corner Frontage',
    status: 'Priority Allocation',
    statusColor: '#E5C378',
    priceRange: 'Custom Pricing on Inquiry',
    coords: { x: 42, z: 8, w: 26, h: 24 },
    note: 'Signature commercial junction corner commanding maximum vehicular and pedestrian exposure in Balaghat.',
  },
];

const ThreeMasterplanExplorer = () => {
  const mountRef = useRef(null);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); // all, residential, commercial
  const [lightingMode, setLightingMode] = useState('sunset'); // sunset, daylight, night
  const [cameraView, setCameraView] = useState('aerial'); // aerial, topdown, avenue

  // Three.js instances ref
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const plotMeshesRef = useRef([]);
  const lightsRef = useRef({});

  // ── Initialize Three.js Scene ──
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 600;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x070b0a);
    scene.fog = new THREE.FogExp2(0x070b0a, 0.006);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 85, 110);
    cameraRef.current = camera;

    // 3. Renderer with Optimized Performance
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
      preserveDrawingBuffer: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Capped for zero frame-drop
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.maxPolarAngle = Math.PI / 2.15; // Don't go below ground
    controls.minDistance = 25;
    controls.maxDistance = 240;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffd59e, 1.8);
    dirLight.position.set(60, 90, 40);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0005;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 300;
    dirLight.shadow.camera.left = -90;
    dirLight.shadow.camera.right = 90;
    dirLight.shadow.camera.top = 90;
    dirLight.shadow.camera.bottom = -90;
    scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0xffeedd, 0x051a14, 0.6);
    scene.add(hemiLight);

    lightsRef.current = { ambientLight, dirLight, hemiLight };

    // 6. Base Ground / Masterplan Terrain
    const groundGeo = new THREE.PlaneGeometry(240, 180);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0c1412,
      roughness: 0.85,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Subtle Architectural Grid lines on ground
    const gridHelper = new THREE.GridHelper(220, 44, 0xd4af37, 0x1a2e28);
    gridHelper.position.y = -0.15;
    scene.add(gridHelper);

    // 7. Internal Asphalt Road Network
    // Main Arterial Avenue (running North-South)
    const mainRoadGeo = new THREE.PlaneGeometry(22, 170);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x181e1c,
      roughness: 0.65,
      metalness: 0.2,
    });
    const mainRoad = new THREE.Mesh(mainRoadGeo, roadMat);
    mainRoad.rotation.x = -Math.PI / 2;
    mainRoad.position.set(28, 0, 0);
    mainRoad.receiveShadow = true;
    scene.add(mainRoad);

    // White Lane Divider Dashes along Main Road
    for (let z = -75; z < 75; z += 10) {
      const dashGeo = new THREE.PlaneGeometry(0.8, 5);
      const dashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const dash = new THREE.Mesh(dashGeo, dashMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(28, 0.05, z);
      scene.add(dash);
    }

    // Cross Avenue 1 (running East-West)
    const crossRoad1Geo = new THREE.PlaneGeometry(180, 16);
    const crossRoad1 = new THREE.Mesh(crossRoad1Geo, roadMat);
    crossRoad1.rotation.x = -Math.PI / 2;
    crossRoad1.position.set(0, 0.02, -6);
    crossRoad1.receiveShadow = true;
    scene.add(crossRoad1);

    // White Cross Avenue Dashes
    for (let x = -80; x < 80; x += 10) {
      if (Math.abs(x - 28) > 12) {
        const dashGeo = new THREE.PlaneGeometry(5, 0.8);
        const dashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const dash = new THREE.Mesh(dashGeo, dashMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.set(x, 0.05, -6);
        scene.add(dash);
      }
    }

    // 8. Architectural Entrance Arch in Foreground
    const archGroup = new THREE.Group();
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x1a2420,
      roughness: 0.4,
      metalness: 0.6,
    });
    const goldBeamMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.25,
      metalness: 0.85,
    });

    const leftPillar = new THREE.Mesh(new THREE.BoxGeometry(4, 18, 4), pillarMat);
    leftPillar.position.set(16, 9, 65);
    leftPillar.castShadow = true;
    archGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(new THREE.BoxGeometry(4, 18, 4), pillarMat);
    rightPillar.position.set(40, 9, 65);
    rightPillar.castShadow = true;
    archGroup.add(rightPillar);

    const topBeam = new THREE.Mesh(new THREE.BoxGeometry(28, 3.5, 4.5), goldBeamMat);
    topBeam.position.set(28, 17.5, 65);
    topBeam.castShadow = true;
    archGroup.add(topBeam);

    // Glowing Sign Plate
    const signPlate = new THREE.Mesh(
      new THREE.BoxGeometry(16, 2.5, 0.6),
      new THREE.MeshStandardMaterial({
        color: 0x051a14,
        emissive: 0x224433,
        roughness: 0.2,
      })
    );
    signPlate.position.set(28, 17.5, 67.4);
    archGroup.add(signPlate);

    scene.add(archGroup);

    // 9. Modern Street Lamps along internal roads
    const lampPositions = [
      { x: 19, z: -50 },
      { x: 19, z: -15 },
      { x: 19, z: 20 },
      { x: 19, z: 50 },
      { x: 37, z: -50 },
      { x: 37, z: -15 },
      { x: 37, z: 20 },
      { x: 37, z: 50 },
    ];

    lampPositions.forEach((pos) => {
      const poleGeo = new THREE.CylinderGeometry(0.25, 0.35, 10, 8);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(pos.x, 5, pos.z);
      pole.castShadow = true;
      scene.add(pole);

      const lampHeadGeo = new THREE.BoxGeometry(1.2, 0.4, 2);
      const lampHeadMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
      const lampHead = new THREE.Mesh(lampHeadGeo, lampHeadMat);
      lampHead.position.set(pos.x, 10, pos.z);
      scene.add(lampHead);

      const lightBulb = new THREE.PointLight(0xffea9f, 0.6, 25);
      lightBulb.position.set(pos.x, 9.5, pos.z);
      scene.add(lightBulb);
    });

    // 10. Generate 3D Interactive Plot Meshes
    const meshes = [];
    plotData.forEach((plot) => {
      const plotGroup = new THREE.Group();
      plotGroup.userData = plot;

      const isCommercial = plot.category === 'commercial';
      const baseColor = isCommercial ? 0x0e3a2f : 0x072820;
      const glowColor = isCommercial ? 0xe5c378 : 0x10b981;

      // Extruded Plot Pad Mesh
      const padGeo = new THREE.BoxGeometry(plot.coords.w, 1.2, plot.coords.h);
      const padMat = new THREE.MeshStandardMaterial({
        color: baseColor,
        roughness: 0.5,
        metalness: 0.2,
        transparent: true,
        opacity: 0.92,
      });
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.position.set(0, 0.6, 0);
      pad.castShadow = true;
      pad.receiveShadow = true;
      plotGroup.add(pad);

      // Glowing Wireframe Outline (Border)
      const edges = new THREE.EdgesGeometry(padGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: glowColor,
        linewidth: 2,
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      wireframe.position.copy(pad.position);
      plotGroup.add(wireframe);

      // Four Corner Demarcation Survey Stones
      const halfW = plot.coords.w / 2;
      const halfH = plot.coords.h / 2;
      const cornerOffsets = [
        [-halfW + 0.4, -halfH + 0.4],
        [halfW - 0.4, -halfH + 0.4],
        [-halfW + 0.4, halfH - 0.4],
        [halfW - 0.4, halfH - 0.4],
      ];

      const pillarGeo = new THREE.CylinderGeometry(0.35, 0.45, 1.8, 6);
      const pillarMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.4,
      });
      cornerOffsets.forEach(([cx, cz]) => {
        const pillar = new THREE.Mesh(pillarGeo, pillarMat);
        pillar.position.set(cx, 1.2, cz);
        pillar.castShadow = true;
        plotGroup.add(pillar);
      });

      // Position Entire Plot in 3D Space
      plotGroup.position.set(plot.coords.x, 0, plot.coords.z);
      scene.add(plotGroup);

      meshes.push(pad); // store hit-mesh for raycaster
    });

    plotMeshesRef.current = meshes;

    // 11. Raycasting & Interaction Listeners
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const getMousePos = (e) => {
      const rect = container.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    const handlePointerMove = (e) => {
      const pos = getMousePos(e);
      mouse.x = pos.x;
      mouse.y = pos.y;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(plotMeshesRef.current);

      if (intersects.length > 0) {
        const hitPlot = intersects[0].object.parent.userData;
        container.style.cursor = 'pointer';
        setHoveredPlot(hitPlot);

        // Highlight hit mesh
        plotMeshesRef.current.forEach((m) => {
          if (m === intersects[0].object) {
            m.material.emissive.setHex(0x3a554a);
          } else {
            m.material.emissive.setHex(0x000000);
          }
        });
      } else {
        container.style.cursor = 'grab';
        setHoveredPlot(null);
        plotMeshesRef.current.forEach((m) => {
          m.material.emissive.setHex(0x000000);
        });
      }
    };

    const handleClick = (e) => {
      const pos = getMousePos(e);
      mouse.x = pos.x;
      mouse.y = pos.y;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(plotMeshesRef.current);

      if (intersects.length > 0) {
        const clickedData = intersects[0].object.parent.userData;
        setSelectedPlot(clickedData);

        // Smooth camera shift towards clicked plot
        const targetX = clickedData.coords.x;
        const targetZ = clickedData.coords.z;
        controls.target.set(targetX, 0, targetZ);
      }
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('click', handleClick);

    // 12. Visibility Observer (Pause render loop when offscreen to eliminate scrolling lag)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 13. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 14. Render Loop (Only renders when visible)
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return; // Zero GPU / CPU usage when user is scrolling elsewhere!
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('click', handleClick);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ── Camera Preset Views ──
  const setCameraAngle = useCallback((viewType) => {
    setCameraView(viewType);
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    if (viewType === 'aerial') {
      // High-angle 3D Isometric View
      camera.position.set(0, 95, 115);
      controls.target.set(0, 0, 0);
    } else if (viewType === 'topdown') {
      // 90-degree 2D Blueprint Plan View
      camera.position.set(0, 150, 0.1);
      controls.target.set(0, 0, 0);
    } else if (viewType === 'avenue') {
      // Entrance Boulevard Perspective Walkthrough
      camera.position.set(28, 14, 95);
      controls.target.set(28, 5, -20);
    }
  }, []);

  // ── Lighting Mode Switch ──
  const toggleLighting = (mode) => {
    setLightingMode(mode);
    const { dirLight, hemiLight, ambientLight } = lightsRef.current;
    const scene = sceneRef.current;
    if (!dirLight || !scene) return;

    if (mode === 'sunset') {
      scene.background.setHex(0x070b0a);
      scene.fog.color.setHex(0x070b0a);
      dirLight.color.setHex(0xffd59e);
      dirLight.intensity = 1.8;
      dirLight.position.set(60, 90, 40);
      ambientLight.color.setHex(0xfff5e6);
      ambientLight.intensity = 0.9;
    } else if (mode === 'daylight') {
      scene.background.setHex(0x111c18);
      scene.fog.color.setHex(0x111c18);
      dirLight.color.setHex(0xffffff);
      dirLight.intensity = 2.2;
      dirLight.position.set(20, 120, 50);
      ambientLight.color.setHex(0xffffff);
      ambientLight.intensity = 1.1;
    } else if (mode === 'night') {
      scene.background.setHex(0x020504);
      scene.fog.color.setHex(0x020504);
      dirLight.color.setHex(0x6080a0);
      dirLight.intensity = 0.5;
      ambientLight.color.setHex(0x203040);
      ambientLight.intensity = 0.4;
    }
  };

  // ── Filter Visibility ──
  useEffect(() => {
    if (!plotMeshesRef.current) return;
    plotMeshesRef.current.forEach((padMesh) => {
      const parent = padMesh.parent;
      if (!parent || !parent.userData) return;
      const category = parent.userData.category;
      if (activeFilter === 'all') {
        parent.visible = true;
      } else {
        parent.visible = category === activeFilter;
      }
    });
  }, [activeFilter]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-[#D8B879]/30 shadow-2xl bg-[#070B0A]">
      
      {/* ── 3D Viewport Controls Top Bar ── */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        {/* Left: Sector Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/75 backdrop-blur-xl border border-white/15 pointer-events-auto shadow-lg">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-inter font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#D8B879] text-[#001D18] shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            All Sectors ({plotData.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('residential')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-inter font-semibold transition-all ${
              activeFilter === 'residential'
                ? 'bg-[#10B981] text-black shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Residential Enclave
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('commercial')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-inter font-semibold transition-all ${
              activeFilter === 'commercial'
                ? 'bg-[#D8B879] text-[#001D18] shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Commercial Frontage
          </button>
        </div>

        {/* Right: Camera Views & Lighting Toggle */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Camera View Selector */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-black/75 backdrop-blur-xl border border-white/15 shadow-lg">
            <button
              type="button"
              onClick={() => setCameraAngle('aerial')}
              title="Aerial 3D Isometric View"
              className={`px-3 py-1.5 rounded-full text-xs font-inter font-semibold transition-all ${
                cameraView === 'aerial'
                  ? 'bg-white/20 text-[#D8B879]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              🚁 3D Aerial
            </button>
            <button
              type="button"
              onClick={() => setCameraAngle('topdown')}
              title="2D Top-Down Blueprint"
              className={`px-3 py-1.5 rounded-full text-xs font-inter font-semibold transition-all ${
                cameraView === 'topdown'
                  ? 'bg-white/20 text-[#D8B879]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              📐 2D Grid
            </button>
            <button
              type="button"
              onClick={() => setCameraAngle('avenue')}
              title="Boulevard Walkthrough"
              className={`px-3 py-1.5 rounded-full text-xs font-inter font-semibold transition-all ${
                cameraView === 'avenue'
                  ? 'bg-white/20 text-[#D8B879]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              🚗 Avenue Walk
            </button>
          </div>

          {/* Lighting Mode Selector */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-black/75 backdrop-blur-xl border border-white/15 shadow-lg">
            <button
              type="button"
              onClick={() => toggleLighting('sunset')}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                lightingMode === 'sunset' ? 'bg-[#D8B879] text-[#001D18]' : 'text-white/60 hover:text-white'
              }`}
              title="Sunset Golden Hour"
            >
              <Sunset size={14} />
            </button>
            <button
              type="button"
              onClick={() => toggleLighting('daylight')}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                lightingMode === 'daylight' ? 'bg-[#D8B879] text-[#001D18]' : 'text-white/60 hover:text-white'
              }`}
              title="Daylight Mode"
            >
              <Sun size={14} />
            </button>
            <button
              type="button"
              onClick={() => toggleLighting('night')}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                lightingMode === 'night' ? 'bg-[#D8B879] text-[#001D18]' : 'text-white/60 hover:text-white'
              }`}
              title="Night Illumination"
            >
              <Moon size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* ── WebGL Canvas Container ── */}
      <div
        ref={mountRef}
        className="w-full h-[520px] sm:h-[600px] lg:h-[660px] relative cursor-grab active:cursor-grabbing"
      />

      {/* ── 3D Controls Legend (Bottom-Left) ── */}
      <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-inter text-white/60 pointer-events-none">
        <span>🖱️ Drag to Rotate 3D</span>
        <span>•</span>
        <span>🔍 Scroll to Zoom</span>
        <span>•</span>
        <span>👆 Click Plot to Inspect</span>
      </div>

      {/* ── Floating Hover Tooltip ── */}
      {hoveredPlot && !selectedPlot && (
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none p-3.5 rounded-2xl bg-[#001D18]/95 border border-[#D8B879]/40 backdrop-blur-xl shadow-2xl text-left min-w-[220px] animate-fadeIn">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-inter uppercase tracking-wider text-emerald-400 font-bold">
              {hoveredPlot.sector}
            </span>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold"
              style={{ backgroundColor: `${hoveredPlot.statusColor}22`, color: hoveredPlot.statusColor }}
            >
              {hoveredPlot.status}
            </span>
          </div>
          <div className="font-playfair font-bold text-white text-base">
            {hoveredPlot.number}
          </div>
          <div className="text-xs font-inter text-white/70 mt-0.5">
            {hoveredPlot.area} ({hoveredPlot.dims})
          </div>
          <div className="text-[10px] font-inter text-[#D8B879] mt-1">
            Click to open plot dossier →
          </div>
        </div>
      )}

      {/* ── Selected Plot Technical Dossier Drawer (Right Side) ── */}
      {selectedPlot && (
        <div className="absolute top-4 right-4 bottom-4 w-full sm:w-[360px] z-30 p-5 rounded-3xl bg-[#001D18]/98 border border-[#D8B879]/45 backdrop-blur-2xl shadow-2xl text-left flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#D8B879] font-bold">
                  Plot Technical Dossier
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlot(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Title & Status */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-playfair font-bold text-white text-2xl">
                {selectedPlot.number}
              </h3>
              <span
                className="text-[11px] font-inter px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex-shrink-0"
                style={{ backgroundColor: `${selectedPlot.statusColor}22`, color: selectedPlot.statusColor }}
              >
                {selectedPlot.status}
              </span>
            </div>
            <p className="text-xs font-inter text-white/60 mb-5">
              {selectedPlot.sector} · Vanam Valley, Balaghat (M.P.)
            </p>

            {/* Specifications Grid */}
            <div className="space-y-3 p-4 rounded-2xl bg-black/40 border border-white/10 mb-5 text-xs font-inter">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Plot Area:</span>
                <span className="text-white font-bold">{selectedPlot.area}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Dimensions:</span>
                <span className="text-white font-medium">{selectedPlot.dims}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Approach Road:</span>
                <span className="text-white font-medium">{selectedPlot.roadWidth}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">Facing / Vastu:</span>
                <span className="text-[#D8B879] font-medium">{selectedPlot.facing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Title Verification:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> 100% Clear Title
                </span>
              </div>
            </div>

            {/* Plot Architectural Note */}
            <p className="text-xs font-inter text-white/75 leading-relaxed mb-6 font-light">
              {selectedPlot.note}
            </p>
          </div>

          {/* Action Triggers */}
          <div className="space-y-2.5 pt-3 border-t border-white/10">
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                `Hello Vanam Valley, I am interested in ${selectedPlot.number} (${selectedPlot.area}) in ${selectedPlot.sector}. Please share layout map and pricing.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-inter font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle size={15} />
              <span>Inquire for {selectedPlot.number}</span>
            </a>

            <a
              href={`tel:${business.phone[0]}`}
              className="w-full py-2.5 rounded-full border border-[#D8B879] bg-transparent hover:bg-[#D8B879] text-[#D8B879] hover:text-[#001D18] font-inter text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={13} />
              <span>Call Balaghat Advisory Desk</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default ThreeMasterplanExplorer;

