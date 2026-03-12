import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { useRef, Suspense, useState } from "react";
import * as THREE from "three";

/* ── Scissors Model ── */
const ScissorsModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        {/* Blade 1 */}
        <mesh position={[0.05, 0.9, 0]} rotation={[0, 0, 0.08]}>
          <boxGeometry args={[0.015, 1.8, 0.04]} />
          <meshStandardMaterial color="#d0d0d0" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Blade edge 1 */}
        <mesh position={[0.065, 0.9, 0]} rotation={[0, 0, 0.08]}>
          <boxGeometry args={[0.005, 1.6, 0.035]} />
          <meshStandardMaterial color="#e8e8e8" metalness={1} roughness={0.02} />
        </mesh>
        {/* Blade 2 */}
        <mesh position={[-0.05, 0.9, 0]} rotation={[0, 0, -0.08]}>
          <boxGeometry args={[0.015, 1.8, 0.04]} />
          <meshStandardMaterial color="#d0d0d0" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Pivot screw */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.06, 32]} />
          <meshStandardMaterial color="#999" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Ring handle 1 */}
        <mesh position={[0.15, -0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.025, 16, 32]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Ring handle 2 */}
        <mesh position={[-0.15, -0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.025, 16, 32]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Handle shafts */}
        <mesh position={[0.08, -0.35, 0]} rotation={[0, 0, -0.12]}>
          <cylinderGeometry args={[0.02, 0.025, 0.9, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.08, -0.35, 0]} rotation={[0, 0, 0.12]}>
          <cylinderGeometry args={[0.02, 0.025, 0.9, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Glow ring at pivot */}
        <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.08, 0.008, 16, 64]} />
          <meshStandardMaterial color="#e87c20" emissive="#e87c20" emissiveIntensity={0.6} metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  );
};

/* ── Forceps Model ── */
const ForcepsModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.25;
  });
  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        {/* Jaw 1 */}
        <mesh position={[0.015, 1.2, 0]} rotation={[0, 0, 0.03]}>
          <boxGeometry args={[0.012, 0.8, 0.03]} />
          <meshStandardMaterial color="#d4d4d4" metalness={0.95} roughness={0.04} />
        </mesh>
        {/* Jaw 2 */}
        <mesh position={[-0.015, 1.2, 0]} rotation={[0, 0, -0.03]}>
          <boxGeometry args={[0.012, 0.8, 0.03]} />
          <meshStandardMaterial color="#d4d4d4" metalness={0.95} roughness={0.04} />
        </mesh>
        {/* Serration lines on jaws */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[0, 0.85 + i * 0.08, 0.018]}>
            <boxGeometry args={[0.035, 0.003, 0.002]} />
            <meshStandardMaterial color="#aaa" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        {/* Shaft */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 1.4, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Handle — ribbed grip */}
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.85} roughness={0.15} />
        </mesh>
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={`grip-${i}`} position={[0, -0.6 + i * 0.06, 0]}>
            <torusGeometry args={[0.042, 0.004, 8, 32]} />
            <meshStandardMaterial color="#999" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </Float>
    </group>
  );
};

/* ── Needle Holder Model ── */
const NeedleHolderModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
  });
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
        {/* Short wide jaws */}
        <mesh position={[0.02, 0.6, 0]} rotation={[0, 0, 0.06]}>
          <boxGeometry args={[0.02, 0.5, 0.06]} />
          <meshStandardMaterial color="#ccc" metalness={0.95} roughness={0.05} />
        </mesh>
        <mesh position={[-0.02, 0.6, 0]} rotation={[0, 0, -0.06]}>
          <boxGeometry args={[0.02, 0.5, 0.06]} />
          <meshStandardMaterial color="#ccc" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* TC insert (gold) on jaws */}
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.05, 0.15, 0.055]} />
          <meshStandardMaterial color="#c8a84e" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Pivot */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.06, 32, 32]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Shanks */}
        <mesh position={[0.04, -0.3, 0]} rotation={[0, 0, -0.05]}>
          <cylinderGeometry args={[0.015, 0.02, 1.2, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.04, -0.3, 0]} rotation={[0, 0, 0.05]}>
          <cylinderGeometry args={[0.015, 0.02, 1.2, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Ring handles */}
        <mesh position={[0.12, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.13, 0.02, 16, 32]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.12, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.13, 0.02, 16, 32]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Ratchet teeth */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={i} position={[0.03, -0.75 + i * 0.04, 0]}>
            <boxGeometry args={[0.008, 0.015, 0.01]} />
            <meshStandardMaterial color="#999" metalness={0.9} roughness={0.15} />
          </mesh>
        ))}
      </Float>
    </group>
  );
};

const instruments = [
  { name: "Surgical Scissors", component: ScissorsModel },
  { name: "Tissue Forceps", component: ForcepsModel },
  { name: "Needle Holder", component: NeedleHolderModel },
];

const InstrumentViewer3D = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const ActiveModel = instruments[activeIdx].component;

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#e87c20" />
          <pointLight position={[0, 2, 0]} intensity={0.8} color="#e87c20" />
          <ActiveModel />
          <Environment preset="studio" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>

      {/* Instrument selector */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {instruments.map((inst, i) => (
          <button
            key={inst.name}
            onClick={() => setActiveIdx(i)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              i === activeIdx
                ? "bg-primary text-primary-foreground"
                : "bg-foreground/5 text-muted-foreground hover:text-foreground border border-border/20"
            }`}
          >
            {inst.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InstrumentViewer3D;
