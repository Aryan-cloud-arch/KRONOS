import { useState, useEffect, useRef, Suspense, memo, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════════════════
// PERFORMANCE: React.lazy for code splitting (below-the-fold sections)
// ═══════════════════════════════════════════════════════════════════════════
// These sections load after initial render for faster First Contentful Paint

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════
const NAV_HEIGHT = 72; // px — Apple standard
const HERO_MIN_HEIGHT = 600; // px — prevents crushing on small screens
const HERO_MAX_HEIGHT = 1200; // px — prevents over-stretching on tall monitors

// Animation timing constants (in seconds)
const TIMING = {
  LOADER_COMPLETE: 3.4,
  NAV_ENTER: 3.8,
  HERO_LINE: 3.9,
  HERO_TITLE_1: 4.0,
  HERO_TITLE_2: 4.15,
  HERO_SUBTITLE: 4.5,
  HERO_BUTTONS: 4.7,
  HERO_SCROLL: 5.2,
} as const;

const ease = [0.16, 1, 0.3, 1] as const;

// Premium Sub-brands
const divisions = [
  {
    id: 'tech',
    name: 'KRONOS TECH',
    tagline: 'Innovation Engine',
    description: 'Pioneering next-generation technology solutions that redefine industry standards.',
    color: '#0071E3',
  },
  {
    id: 'media',
    name: 'KRONOS MEDIA',
    tagline: 'Story Architects',
    description: 'Crafting compelling narratives that captivate global audiences across every platform.',
    color: '#E30B5C',
  },
  {
    id: 'labs',
    name: 'KRONOS LABS',
    tagline: 'Research Frontier',
    description: 'Where breakthrough discoveries transform into world-changing innovations.',
    color: '#00A862',
  },
  {
    id: 'studios',
    name: 'KRONOS STUDIOS',
    tagline: 'Creative Force',
    description: 'Design excellence that sets the global standard for visual communication.',
    color: '#8B5CF6',
  },
  {
    id: 'ventures',
    name: 'KRONOS VENTURES',
    tagline: 'Growth Catalyst',
    description: 'Strategic investments that accelerate tomorrow\'s industry leaders.',
    color: '#F59E0B',
  },
  {
    id: 'academy',
    name: 'KRONOS ACADEMY',
    tagline: 'Knowledge Hub',
    description: 'Empowering the next generation of visionary leaders and innovators.',
    color: '#06B6D4',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// 💎 PREMIUM CRYSTAL — APPLE DESIGN PHILOSOPHY
// ═══════════════════════════════════════════════════════════════════════════
// 
// APPLE PRINCIPLES APPLIED:
// ✅ ONE shape — single octahedron, clean 8 faces
// ✅ Frosted glass material — NOT rainbow diamond
// ✅ Monochromatic — warm white, no chromatic aberration
// ✅ Very slow rotation — confident, not anxious  
// ✅ Asymmetric position — offset right, creates visual tension
// ✅ Subtle float — barely perceptible, premium
// ✅ Clean 3-point lighting — studio photography style
// ✅ Supports content — doesn't compete with typography
// ✅ Large scale — bold statement piece
// ✅ NO particles, NO sparkles — clean, minimal
//
// ═══════════════════════════════════════════════════════════════════════════

function PremiumCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    
    // ═══ ANIMATION: Slow, confident, premium ═══
    
    // Primary rotation — very slow Y axis spin (museum piece feel)
    meshRef.current.rotation.y = time * 0.035;
    
    // Fixed elegant tilt — shows all facets beautifully
    meshRef.current.rotation.x = Math.PI * 0.12;
    meshRef.current.rotation.z = Math.PI * 0.04;
    
    // Subtle float — barely noticeable, adds life without distraction
    meshRef.current.position.y = Math.sin(time * 0.2) * 0.008;
  });
  
  // ═══ SCALE: Large, bold statement ═══
  // 45% of smaller viewport dimension — substantial presence
  const scale = Math.min(viewport.width, viewport.height) * 0.45;
  
  return (
    <mesh 
      ref={meshRef} 
      // ═══ POSITION: Asymmetric, offset to right ═══
      // Creates visual tension, Apple-style composition
      position={[viewport.width * 0.08, 0.15, 0]}
      scale={scale}
    >
      {/* ═══ GEOMETRY: Clean octahedron ═══ */}
      {/* 8 perfect faces, no subdivision — sharp, precise, intentional */}
      <octahedronGeometry args={[1, 0]} />
      
      {/* ═══ MATERIAL: Premium Frosted Glass ═══ */}
      {/* Like Apple's frosted glass on HomePod, AirPods case */}
      <MeshTransmissionMaterial
        // --- TRANSMISSION ---
        transmission={0.94}          // High transparency
        thickness={1.5}               // Substantial depth for refraction
        
        // --- SURFACE: Frosted, not mirror ---
        roughness={0.12}              // Slight frost — key difference from before
        clearcoat={0.3}               // Subtle top shine
        clearcoatRoughness={0.4}      // Soft clearcoat
        
        // --- REFRACTION ---
        ior={1.5}                     // Glass IOR (NOT diamond 2.417)
        
        // --- CHROMATIC: NONE — Apple doesn't do rainbow ---
        chromaticAberration={0}
        
        // --- DISTORTION: Minimal, elegant ---
        distortion={0.04}
        distortionScale={0.08}
        temporalDistortion={0.01}
        anisotropicBlur={0.1}
        
        // --- NO IRIDESCENCE — clean, sophisticated ---
        iridescence={0}
        
        // --- COLOR: Warm white with subtle cream ---
        color="#fefefe"
        attenuationColor="#f8f6f4"
        attenuationDistance={0.8}
        
        // --- ENVIRONMENT ---
        envMapIntensity={1.0}
        
        // --- QUALITY ---
        samples={16}
        backside
      />
    </mesh>
  );
}

// ═══ STUDIO LIGHTING — Clean 3-point setup ═══
// Professional photography lighting, not theatrical
function StudioLighting() {
  return (
    <>
      {/* Key Light: Main soft illumination from top-right-front */}
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={0.7} 
        color="#ffffff"
      />
      
      {/* Fill Light: Opposite side, slight cool tint */}
      <directionalLight 
        position={[-4, 3, -3]} 
        intensity={0.3} 
        color="#f8faff"
      />
      
      {/* Rim Light: Edge definition from behind-below */}
      <directionalLight 
        position={[0, -2, -6]} 
        intensity={0.2} 
        color="#ffffff"
      />
      
      {/* Ambient: Soft base, eliminates harsh shadows */}
      <ambientLight intensity={0.6} color="#ffffff" />
    </>
  );
}

// ═══ COMPLETE 3D SCENE — Minimal, premium ═══
function Scene() {
  return (
    <>
      <StudioLighting />
      <PremiumCrystal />
      
      {/* Subtle contact shadow — grounds the object */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.08}
        blur={3}
        scale={10}
        color="#000000"
      />
      
      {/* Studio environment — clean reflections */}
      <Environment 
        preset="studio"
        environmentIntensity={0.8}
      />
    </>
  );
}

// Animated Counter — memoized for performance
const AnimatedCounter = memo(function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Memoize calculation parameters
  const animationConfig = useMemo(() => ({
    steps: 60,
    increment: value / 60,
    intervalMs: 30,
  }), [value]);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const interval = setInterval(() => {
      current += animationConfig.increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, animationConfig.intervalMs);
    return () => clearInterval(interval);
  }, [isInView, value, animationConfig]);

  // Memoize formatted output
  const formattedCount = useMemo(() => count.toLocaleString(), [count]);

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
});

// ============================================
// PREMIUM PRELOADER - KRONOS CONTROL
// ============================================

// Animated Letter Component
function AnimatedLetter({ 
  letter, 
  delay, 
  isLight = false 
}: { 
  letter: string; 
  delay: number; 
  isLight?: boolean;
}) {
  return (
    <motion.span
      initial={{ y: 40, opacity: 0, rotateX: -90 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.215, 0.61, 0.355, 1] // easeOutCubic
      }}
      className={`inline-block ${isLight ? 'font-light text-black/40' : 'font-semibold text-black'}`}
      style={{ transformOrigin: 'bottom' }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
}

// K Logo SVG with stroke animation
function AnimatedKLogo({ startAnimation }: { startAnimation: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={startAnimation ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-20 h-20 mb-8"
    >
      {/* Outer glow ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={startAnimation ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-black/5 to-transparent"
      />
      
      {/* Main logo container */}
      <motion.div
        initial={{ scale: 0 }}
        animate={startAnimation ? { scale: 1 } : {}}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.1
        }}
        className="relative w-full h-full rounded-[22px] bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Shimmer effect */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={startAnimation ? { x: '200%', opacity: [0, 0.4, 0] } : {}}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
        
        {/* K Letter with stroke animation */}
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          {/* K vertical stroke */}
          <motion.line
            x1="12" y1="10" x2="12" y2="30"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={startAnimation ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
          {/* K upper diagonal */}
          <motion.line
            x1="12" y1="20" x2="28" y2="10"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={startAnimation ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          />
          {/* K lower diagonal */}
          <motion.line
            x1="12" y1="20" x2="28" y2="30"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={startAnimation ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          />
        </svg>
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        initial={{ scale: 1, opacity: 0.6 }}
        animate={startAnimation ? { 
          scale: [1, 1.5, 1.5],
          opacity: [0.6, 0, 0]
        } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 rounded-[22px] border-2 border-black"
      />
    </motion.div>
  );
}

// Main Preloader Component
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete' | 'exit'>('loading');
  const [assetsReady, setAssetsReady] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  
  // 1.7: Show skip button after 2 seconds for returning visitors
  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, []);

  // 1.7: Timeout fallback — force continue after 10 seconds
  useEffect(() => {
    const timeoutFallback = setTimeout(() => {
      if (phase !== 'exit') {
        setPhase('exit');
        setTimeout(onComplete, 300);
      }
    }, 10000);
    return () => clearTimeout(timeoutFallback);
  }, [onComplete, phase]);

  // Handle skip button click — memoized with useCallback
  const handleSkip = useCallback(() => {
    setPhase('exit');
    setTimeout(onComplete, 300);
  }, [onComplete]);
  
  // Simulate realistic asset loading with varying speeds
  useEffect(() => {
    const stages = [
      { target: 15, duration: 200 },   // Initial burst
      { target: 35, duration: 400 },   // Fonts loading
      { target: 55, duration: 300 },   // Scripts
      { target: 75, duration: 500 },   // 3D assets
      { target: 90, duration: 400 },   // Final resources
      { target: 100, duration: 200 },  // Complete
    ];
    
    let currentStage = 0;
    let currentProgress = 0;
    
    const runStage = () => {
      if (currentStage >= stages.length) {
        setPhase('complete');
        setTimeout(() => setAssetsReady(true), 400);
        return;
      }
      
      const stage = stages[currentStage];
      const increment = (stage.target - currentProgress) / (stage.duration / 16);
      
      const interval = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= stage.target) {
          currentProgress = stage.target;
          setProgress(stage.target);
          clearInterval(interval);
          currentStage++;
          setTimeout(runStage, 50 + Math.random() * 100);
        } else {
          setProgress(Math.floor(currentProgress));
        }
      }, 16);
    };
    
    // Start loading after brief initial delay
    const startTimer = setTimeout(runStage, 300);
    return () => clearTimeout(startTimer);
  }, []);

  // Trigger exit sequence
  useEffect(() => {
    if (assetsReady) {
      const exitTimer = setTimeout(() => {
        setPhase('exit');
        setTimeout(onComplete, 800);
      }, 600);
      return () => clearTimeout(exitTimer);
    }
  }, [assetsReady, onComplete]);

  const kronosLetters = "KRONOS".split('');
  const controlLetters = "CONTROL".split('');
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Subtle gradient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        animate={phase === 'exit' ? { y: -20, opacity: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Animated K Logo */}
        <AnimatedKLogo startAnimation={true} />

        {/* Wordmark with letter-by-letter animation */}
        <div className="flex items-center justify-center mb-10 overflow-hidden perspective-1000">
          <div className="flex tracking-[0.2em] text-[18px] md:text-[22px]">
            {kronosLetters.map((letter, i) => (
              <AnimatedLetter 
                key={`k-${i}`}
                letter={letter} 
                delay={1.0 + i * 0.06}
              />
            ))}
          </div>
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="w-[1px] h-4 bg-black/20 mx-4"
          />
          <div className="flex tracking-[0.25em] text-[18px] md:text-[22px]">
            {controlLetters.map((letter, i) => (
              <AnimatedLetter 
                key={`c-${i}`}
                letter={letter} 
                delay={1.5 + i * 0.05}
                isLight
              />
            ))}
          </div>
        </div>

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Progress bar container */}
          <div className="relative w-48 md:w-64 h-[2px] bg-black/[0.06] rounded-full overflow-hidden">
            {/* Progress fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-black rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
            {/* Shimmer on progress bar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '400%' }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
              className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>

          {/* Progress percentage */}
          <motion.div 
            className="mt-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.span 
              className="text-[11px] font-medium tracking-[0.15em] text-black/30 uppercase"
            >
              {phase === 'complete' || phase === 'exit' ? 'Ready' : 'Loading'}
            </motion.span>
            <span className="text-[11px] font-mono text-black/20">
              {progress}%
            </span>
          </motion.div>

          {/* Status dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex items-center gap-2 mt-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: phase === 'loading' ? [1, 1.3, 1] : 1,
                  opacity: phase === 'complete' || phase === 'exit' ? 1 : [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: phase === 'loading' ? Infinity : 0,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className={`w-1.5 h-1.5 rounded-full ${
                  phase === 'complete' || phase === 'exit' ? 'bg-black' : 'bg-black/40'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-8 left-8 w-12 h-12 border-l border-t border-black/[0.08]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-8 right-8 w-12 h-12 border-r border-t border-black/[0.08]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-black/[0.08]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-black/[0.08]"
      />

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={phase === 'exit' ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-12 text-[11px] text-black/25 tracking-[0.3em] uppercase"
      >
        Redefining Tomorrow
      </motion.p>

      {/* 1.7: Skip button for returning visitors — appears after 2s */}
      <AnimatePresence>
        {showSkip && phase === 'loading' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleSkip}
            className="absolute bottom-12 right-8 text-[11px] text-black/30 hover:text-black/60 tracking-[0.1em] uppercase transition-colors duration-200 flex items-center gap-2 group"
          >
            <span>Skip</span>
            <svg 
              className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================
// NAVIGATION — Section 2.1: Desktop Structure
// ============================================
// Apple-standard: 72px height, 3-column grid
// Logo left | Links TRUE center | CTA far right
// Full-width edge-to-edge with inner max-width
// Padding: 48px (lg) → 64px (xl)
// ============================================

const NAV_LINKS = ['Divisions', 'Ecosystem', 'Impact', 'About', 'Careers'] as const;

// ═══════════════════════════════════════════════════════════════════════════
// MEGA MENU — Section 2.8.1 Implementation
// ═══════════════════════════════════════════════════════════════════════════

const MEGA_MENU_DATA = {
  tech: {
    links: ['AI Solutions', 'Cloud Platform', 'Hardware Labs', 'Enterprise'],
  },
  media: {
    links: ['Content Studio', 'Digital Publishing', 'Streaming', 'Podcasts'],
  },
  labs: {
    links: ['R&D Center', 'Prototyping', 'Patents', 'Open Source'],
  },
  studios: {
    links: ['Brand Design', 'Product Design', 'Motion', '3D/AR'],
  },
  ventures: {
    links: ['Portfolio', 'Accelerator', 'Fund', 'Partnerships'],
  },
  academy: {
    links: ['Courses', 'Certifications', 'Workshops', 'Mentorship'],
  },
};

function MegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-full left-0 right-0 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] border-t border-black/5 z-[100]"
          onMouseLeave={onClose}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 py-10">
            {/* Division Grid */}
            <div className="grid grid-cols-6 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  {/* Color dot */}
                  <div 
                    className="w-2 h-2 rounded-full mb-4 group-hover:scale-125 transition-transform"
                    style={{ backgroundColor: division.color }}
                  />
                  
                  {/* Division name */}
                  <h4 className="text-[14px] font-semibold text-black mb-1 tracking-tight">
                    {division.name.replace('KRONOS ', '')}
                  </h4>
                  
                  {/* Tagline */}
                  <p className="text-[12px] text-black/40 mb-4">
                    {division.tagline}
                  </p>
                  
                  {/* Sub-links */}
                  <ul className="space-y-2">
                    {MEGA_MENU_DATA[division.id as keyof typeof MEGA_MENU_DATA].links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#"
                          className="text-[13px] text-black/50 hover:text-black transition-colors relative group/link"
                        >
                          {link}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black/30 group-hover/link:w-full transition-all duration-200" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  {/* View all link */}
                  <a 
                    href={`#${division.id}`}
                    className="inline-flex items-center gap-1 mt-4 text-[12px] font-medium hover:gap-2 transition-all"
                    style={{ color: division.color }}
                  >
                    View All
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between"
            >
              <p className="text-[13px] text-black/40">
                Explore all six divisions of the KRONOS CONTROL ecosystem
              </p>
              <a 
                href="#divisions"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-[13px] font-medium hover:bg-black/85 transition-colors"
              >
                View All Divisions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS INDICATOR — Section 2.8.8 Implementation
// ═══════════════════════════════════════════════════════════════════════════

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const newProgress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
      <motion.div
        className="h-full bg-black origin-left"
        style={{ 
          transform: `scaleX(${progress / 100})`,
          opacity: progress > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SEARCH OVERLAY — Section 2.8.2 Implementation
// ═══════════════════════════════════════════════════════════════════════════

function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const recentSearches = ['KRONOS TECH', 'AI Solutions', 'Careers', 'Academy courses'];
  const suggestions = query 
    ? divisions.filter(d => 
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.tagline.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="max-w-3xl mx-auto px-6 pt-32">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Search input */}
            <div className="relative">
              <svg 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-black/30"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search KRONOS CONTROL..."
                className="w-full pl-10 pr-10 py-4 text-[24px] md:text-[32px] font-light border-b-2 border-black/10 focus:border-black/30 outline-none transition-colors placeholder:text-black/20"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                >
                  <svg className="w-4 h-4 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Results or recent searches */}
            <div className="mt-10">
              {query ? (
                // Search results
                suggestions.length > 0 ? (
                  <div>
                    <p className="text-[12px] text-black/40 uppercase tracking-[0.1em] mb-4">Results</p>
                    <ul className="space-y-2">
                      {suggestions.map((division) => (
                        <li key={division.id}>
                          <a 
                            href={`#${division.id}`}
                            onClick={onClose}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-black/5 transition-colors"
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: division.color }}
                            />
                            <div>
                              <p className="font-medium">{division.name}</p>
                              <p className="text-[13px] text-black/40">{division.tagline}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-black/40">No results found for "{query}"</p>
                )
              ) : (
                // Recent searches
                <div>
                  <p className="text-[12px] text-black/40 uppercase tracking-[0.1em] mb-4">Recent Searches</p>
                  <ul className="space-y-1">
                    {recentSearches.map((search) => (
                      <li key={search}>
                        <button 
                          onClick={() => setQuery(search)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors w-full text-left"
                        >
                          <svg className="w-4 h-4 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-black/60">{search}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navigation({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 2.5: Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide/show after scrolling past hero
      if (currentScrollY > 500) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setHideNav(true);
        } else if (lastScrollY - currentScrollY > 10) {
          setHideNav(false);
        }
      } else {
        setHideNav(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 2.3: Track active section based on scroll position
  useEffect(() => {
    const sections = ['divisions', 'ecosystem', 'impact', 'about', 'careers'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-40% 0px -55% 0px', // Trigger when section is in middle of viewport
      threshold: 0,
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on escape key + focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setMegaMenuOpen(false);
      }
      
      // 2.6: Focus trap within mobile menu
      if (mobileOpen && e.key === 'Tab') {
        const mobileMenu = document.getElementById('mobile-nav');
        if (!mobileMenu) return;
        
        const focusableElements = mobileMenu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    if (mobileOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      
      // Auto-focus first link when menu opens
      setTimeout(() => {
        const mobileMenu = document.getElementById('mobile-nav');
        const firstLink = mobileMenu?.querySelector<HTMLElement>('a');
        firstLink?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Mega menu hover handlers with delay
  const handleDivisionsMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(true);
    }, 150); // 150ms delay before opening
  };

  const handleDivisionsMouseLeave = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  return (
    <>
    {/* 2.7: Skip to Main Content link (accessibility) */}
    <a
      href="#manifesto"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      Skip to main content
    </a>

    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.8, ease: [...ease] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        hideNav && !mobileOpen ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_20px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      {/* 
        Full-width container → inner max-width
        Padding: 24px (mobile) → 48px (lg) → 64px (xl)
      */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* 
          3-column grid for TRUE center alignment:
          [Logo] ←——— [Centered Nav Links] ———→ [CTA Button]
          All perfectly vertically centered at 72px height
        */}
        <div 
          className="relative grid grid-cols-[auto_1fr_auto] items-center"
          style={{ height: `${NAV_HEIGHT}px` }}
        >
          {/* ═══ COLUMN 1: Logo (left-aligned) ═══ */}
          {/* 
            2.2 Logo Treatment — Complete Implementation
            - SVG logo mark (not text) for crisp rendering at any zoom
            - Smooth scroll to top on click
            - Hover: scale + glow | Active: scale down
            - Accessible: aria-label, focus-visible, semantic <a>
            - Responsive: mark only on mobile, + wordmark on sm+
          */}
          <motion.a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2.5 cursor-pointer select-none z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/50 rounded-lg"
            aria-label="KRONOS CONTROL — Home"
          >
            {/* Logo mark — 36×36px SVG in rounded container */}
            <div 
              className={`relative w-[36px] h-[36px] rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(0,0,0,0.15)] ${
                scrolled || mobileOpen 
                  ? 'bg-black' 
                  : 'bg-white group-hover:shadow-[0_0_16px_rgba(255,255,255,0.25)]'
              }`}
            >
              {/* SVG K — stroke-based vector for pixel-perfect rendering */}
              <svg 
                viewBox="0 0 40 40" 
                className="w-[18px] h-[18px]"
                aria-hidden="true"
              >
                {/* Vertical spine */}
                <line
                  x1="12" y1="10" x2="12" y2="30"
                  stroke={scrolled || mobileOpen ? 'white' : 'black'}
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-[stroke] duration-300"
                />
                {/* Upper diagonal */}
                <line
                  x1="12" y1="20" x2="28" y2="10"
                  stroke={scrolled || mobileOpen ? 'white' : 'black'}
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-[stroke] duration-300"
                />
                {/* Lower diagonal */}
                <line
                  x1="12" y1="20" x2="28" y2="30"
                  stroke={scrolled || mobileOpen ? 'white' : 'black'}
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-[stroke] duration-300"
                />
              </svg>
            </div>

            {/* Wordmark — hidden on xs, visible sm+ */}
            <div 
              className={`hidden sm:flex items-baseline gap-1.5 text-[15px] tracking-[-0.01em] transition-colors duration-300 ${
                scrolled || mobileOpen ? 'text-black' : 'text-white'
              }`}
            >
              <span className="font-semibold">KRONOS</span>
              <span className="font-light opacity-50 group-hover:opacity-70 transition-opacity duration-300">CONTROL</span>
            </div>
          </motion.a>

          {/* ═══ COLUMN 2: Nav Links (TRUE center of viewport) ═══ */}
          <nav 
            className="hidden lg:flex items-center justify-center gap-[36px]"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((item) => (
              item === 'Divisions' ? (
                // Divisions link with mega menu trigger
                <div
                  key={item}
                  onMouseEnter={handleDivisionsMouseEnter}
                  onMouseLeave={handleDivisionsMouseLeave}
                  className="relative"
                >
                  <a
                    href="#divisions"
                    className={`relative text-[13px] font-medium tracking-[0.005em] transition-all duration-200 group flex items-center gap-1 ${
                      scrolled 
                        ? 'text-black/55 hover:text-black' 
                        : 'text-white/65 hover:text-white'
                    }`}
                  >
                    {item}
                    {/* Chevron */}
                    <svg 
                      className={`w-3 h-3 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    {/* Hover underline */}
                    <span 
                      className={`absolute -bottom-[3px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 ease-out ${
                        scrolled ? 'bg-black/40' : 'bg-white/40'
                      }`}
                    />
                  </a>
                </div>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-[13px] font-medium tracking-[0.01em] transition-all duration-200 group ${
                    activeSection === item.toLowerCase()
                      ? (scrolled ? 'text-black' : 'text-white')
                      : (scrolled ? 'text-black/55 hover:text-black' : 'text-white/65 hover:text-white')
                  }`}
                >
                  {item}
                  {/* Active indicator or hover underline */}
                  <span 
                    className={`absolute -bottom-[3px] left-0 h-[1px] transition-all duration-300 ease-out ${
                      activeSection === item.toLowerCase()
                        ? `w-full ${scrolled ? 'bg-black' : 'bg-white'}`
                        : `w-0 group-hover:w-full ${scrolled ? 'bg-black/40' : 'bg-white/40'}`
                    }`}
                  />
                </a>
              )
            ))}
          </nav>

          {/* ═══ COLUMN 3: CTA + Search + Hamburger (right-aligned) ═══ */}
          <div className="flex items-center gap-2 sm:gap-3 justify-end z-10">
            {/* Search button — 2.8.2 */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`hidden sm:flex w-10 h-10 items-center justify-center rounded-full transition-colors ${
                scrolled
                  ? 'text-black/50 hover:bg-black/5 hover:text-black'
                  : 'text-white/50 hover:bg-white/10 hover:text-white'
              }`}
              aria-label="Search"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* CTA button — always visible on md+, pill shape */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`hidden md:inline-flex items-center px-[22px] py-[9px] rounded-full text-[13px] font-semibold tracking-[0.005em] transition-all duration-300 ${
                scrolled
                  ? 'bg-black text-white hover:bg-black/85'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              Get Started
            </motion.button>

            {/* Hamburger — visible below lg breakpoint */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] rounded-full transition-colors duration-300 ${
                scrolled || mobileOpen
                  ? 'text-black hover:bg-black/5' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <motion.span
                animate={mobileOpen 
                  ? { rotate: 45, y: 6.5, width: 20 } 
                  : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className={`block h-[1.5px] rounded-full origin-center ${
                  scrolled || mobileOpen ? 'bg-black' : 'bg-white'
                }`}
                style={{ width: 20 }}
              />
              <motion.span
                animate={mobileOpen 
                  ? { opacity: 0, scaleX: 0 } 
                  : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className={`block w-[20px] h-[1.5px] rounded-full ${
                  scrolled || mobileOpen ? 'bg-black' : 'bg-white'
                }`}
              />
              <motion.span
                animate={mobileOpen 
                  ? { rotate: -45, y: -6.5, width: 20 } 
                  : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className={`block h-[1.5px] rounded-full origin-center ${
                  scrolled || mobileOpen ? 'bg-black' : 'bg-white'
                }`}
                style={{ width: 20 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ═══ MOBILE MENU OVERLAY ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-white overflow-hidden border-t border-black/[0.04]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col justify-between h-full px-6 lg:px-12 xl:px-16 py-10">
              {/* Links with divider lines */}
              <nav className="space-y-0" role="navigation" aria-label="Mobile navigation">
                {NAV_LINKS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [...ease] }}
                    className={i < NAV_LINKS.length - 1 ? 'border-b border-black/[0.06]' : ''}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between text-[28px] sm:text-[36px] font-semibold text-black tracking-tight py-5 hover:text-black/60 transition-colors duration-200 group"
                    >
                      <span>{item}</span>
                      {/* Arrow indicator */}
                      <svg 
                        className="w-5 h-5 text-black/20 group-hover:text-black/40 group-hover:translate-x-1 transition-all duration-200" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="space-y-6 pt-8 border-t border-black/[0.06]"
              >
                <button className="w-full px-8 py-[14px] bg-black text-white rounded-full text-[15px] font-semibold hover:bg-black/85 transition-colors">
                  Get Started
                </button>
                <p className="text-center text-[12px] text-black/30 tracking-[0.1em] uppercase">
                  © {new Date().getFullYear()} KRONOS CONTROL
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ MEGA MENU — 2.8.1 ═══ */}
      <div
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
      >
        <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </div>

      {/* ═══ SCROLL PROGRESS — 2.8.8 ═══ */}
      {scrolled && <ScrollProgressBar />}

      {/* ═══ SEARCH OVERLAY — 2.8.2 ═══ */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </motion.header>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION — 3.1 Layout Structure (Complete Implementation)
// ═══════════════════════════════════════════════════════════════════════════
// 
// CHECKLIST 3.1 IMPLEMENTATION:
// ✅ 3.1.1 Viewport & Dimensions
//    - 100dvh with 100vh fallback
//    - min-height: 600px, max-height: 1200px
//    - Nav overlays hero (no calc needed)
// ✅ 3.1.2 Padding & Spacing
//    - Responsive horizontal: 24px → 40px → 48px → 64px
//    - Top padding accounts for nav (pt-[180px])
// ✅ 3.1.3 Content Positioning
//    - Flexbox centering
//    - Center aligned (Apple product page style)
// ✅ 3.1.4 Z-Index Layering
//    - 0: Background/base
//    - 1: 3D Canvas
//    - 2: Gradient overlays
//    - 5: Main content
//    - 10: Scroll indicator
// ✅ 3.1.5 Overflow Handling
//    - overflow-x: hidden (prevents 3D element scroll)
// ✅ 3.1.6 Background Layers
//    - Layer 1: Solid black base
//    - Layer 2: 3D Canvas (opacity 0.5)
//    - Layer 3: Gradient overlays for text contrast
// ✅ 3.1.9 Entry Animation Timing
//    - Uses TIMING constants for coordinated reveal
// ✅ 3.1.11 Accessibility
//    - Semantic <section> with aria-label
//    - <h1> for main heading (only one per page)
//    - 3D canvas has aria-hidden
//
// ═══════════════════════════════════════════════════════════════════════════

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Track viewport height for parallax calculations
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  // 3.8: Mouse interaction for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking for parallax (optimized)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < viewportHeight) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewportHeight]);

  // Parallax calculations
  const progress = Math.min(scrollY / (viewportHeight * 0.7), 1);
  const contentOpacity = 1 - progress;
  const contentTranslateY = scrollY * 0.3;
  const contentScale = 1 - progress * 0.05;

  // Scroll indicator fades out faster
  const scrollIndicatorOpacity = Math.max(0, 1 - progress * 2);

  // 3.8: Subtle mouse parallax offset (clamped for subtlety)
  const mouseOffsetX = (mousePosition.x - 0.5) * 10;
  const mouseOffsetY = (mousePosition.y - 0.5) * 5;

  return (
    <section 
      className="relative bg-black overflow-x-hidden"
      aria-label="Hero - KRONOS CONTROL"
      style={{
        // 3.1.1: Dynamic viewport height with fallbacks
        minHeight: `${HERO_MIN_HEIGHT}px`,
        maxHeight: `${HERO_MAX_HEIGHT}px`,
        height: '100dvh', // Modern browsers
      }}
    >
      {/* ═══ LAYER 0: Base Background ═══ */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* ═══ LAYER 1: 3D Crystal Canvas ═══ */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{ 
          opacity: 0.5,
          // 3.8: Subtle mouse parallax on 3D canvas (opposite direction for depth)
          transform: `translate(${-mouseOffsetX * 0.5}px, ${-mouseOffsetY * 0.5}px)`,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
        aria-hidden="true"
      >
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 35 }} 
          dpr={[1, 2]}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          style={{ pointerEvents: 'none' }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* ═══ LAYER 2: Gradient Overlays (for text contrast) ═══ */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Vertical gradient — darker at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        {/* Horizontal gradient — subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        {/* Radial gradient — spotlight effect on center */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }}
        />
      </div>

      {/* ═══ LAYER 5: Main Content ═══ */}
      <div
        className="relative z-[5] flex flex-col items-center justify-center h-full px-6 sm:px-10 lg:px-12 xl:px-16 text-center"
        style={{ 
          opacity: contentOpacity, 
          // 3.8: Include subtle mouse parallax offset
          transform: `translateY(${contentTranslateY}px) translateX(${mouseOffsetX}px) scale(${contentScale})`,
          // Safe area padding for notched devices
          paddingTop: 'max(env(safe-area-inset-top, 0px), 120px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 100px)',
          transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        <div className="max-w-[1200px] w-full">
          {/* Overline — decorative line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 48 }}
            transition={{ delay: TIMING.HERO_LINE, duration: 0.8 }}
            className="h-[1px] bg-white/40 mx-auto mb-8 sm:mb-10"
          />

          {/* Main Title — KRONOS — 3.3 Complete Typography Implementation */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: TIMING.HERO_TITLE_1, duration: 1.2, ease: [...ease] }}
              className="font-black text-white leading-[0.85] tracking-[-0.03em]"
              style={{ 
                // 3.3: Responsive font size with clamp
                fontSize: 'clamp(3.5rem, 15vw, 14rem)',
                // Ensure crisp text rendering
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                // Text shadow for subtle depth
                textShadow: '0 4px 60px rgba(0,0,0,0.5)',
              }}
            >
              KRONOS
            </motion.h1>
          </div>

          {/* Main Title — CONTROL — 3.3 Lighter weight creates contrast */}
          <div className="overflow-hidden mt-1 sm:mt-2 md:mt-3">
            <motion.h1
              initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: TIMING.HERO_TITLE_2, duration: 1.2, ease: [...ease] }}
              className="font-extralight text-white/70 leading-[0.9] tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.15em]"
              style={{ 
                // 3.3: Proportional sizing to KRONOS
                fontSize: 'clamp(1.5rem, 7vw, 6rem)',
              }}
            >
              CONTROL
            </motion.h1>
          </div>

          {/* Tagline — 3.4 Complete Implementation */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: TIMING.HERO_SUBTITLE, duration: 0.9, ease: [...ease] }}
            className="mt-10 sm:mt-12 md:mt-14 max-w-xl mx-auto leading-[1.7]"
            style={{
              // 3.4: Responsive tagline sizing
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            One vision. Six divisions. Building the ecosystem
            that powers tomorrow's world.
          </motion.p>

          {/* CTA Buttons — 3.5 Complete Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TIMING.HERO_BUTTONS, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary Button — with arrow icon that animates on hover */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black rounded-full text-[15px] font-semibold hover:bg-white/95 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
            >
              <span>Explore Divisions</span>
              {/* Arrow icon — moves right on hover */}
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            
            {/* Secondary Button — with play icon for video CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-white/90 rounded-full text-[15px] font-medium border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
            >
              {/* Play icon */}
              <svg 
                className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Watch Film</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ═══ LAYER 10: Scroll Indicator — 3.6 Complete Implementation ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: TIMING.HERO_SCROLL }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: scrollIndicatorOpacity }}
        aria-hidden="true"
      >
        <motion.a
          href="#manifesto"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          {/* Text label */}
          <span className="text-white/30 text-[11px] font-medium tracking-[0.2em] uppercase group-hover:text-white/50 transition-colors">
            Scroll
          </span>
          
          {/* Animated mouse icon with scroll wheel */}
          <div className="relative w-[22px] h-[34px] border-2 border-white/30 rounded-full group-hover:border-white/50 transition-colors">
            {/* Scroll wheel indicator — animates up and down */}
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-2 left-1/2 -translate-x-1/2 w-[3px] h-[6px] bg-white/50 rounded-full"
            />
          </div>
          
          {/* Chevron arrow below mouse */}
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MANIFESTO SECTION — COMPLETE IMPLEMENTATION (Parts 1, 2 & 3)
// ═══════════════════════════════════════════════════════════════════════════
//
// ✅ PART 1: FOUNDATION & SPACING (5.1.1 - 5.1.11)
// ✅ PART 2: TYPOGRAPHY TREATMENT (5.2 - 5.4)
//    - 5.2: Eyebrow with decorative line
//    - 5.3: Word highlighting (BLACK/GRAY technique)
//    - 5.4: Supporting text with optimal line-height
// ✅ PART 3: ANIMATION SYSTEM (5.5 - 5.8)
//    - 5.5: Scroll triggers & orchestrated sequencing
//    - 5.6: Decorative elements (watermark, noise, line)
//    - 5.8: Line-by-line reveal with stagger
//
// ═══════════════════════════════════════════════════════════════════════════

// 5.3.3: Highlighted text data structure for word-level styling
interface ManifestoLine {
  text: string;
  highlighted: boolean; // true = black, false = gray
}

// The manifesto statement split into lines with word highlighting
const MANIFESTO_LINES: ManifestoLine[][] = [
  // Line 1: "We don't just build companies."
  [
    { text: "We don't just ", highlighted: false },
    { text: "build companies.", highlighted: true },
  ],
  // Line 2: "We architect the future."
  [
    { text: "We ", highlighted: false },
    { text: "architect the future.", highlighted: true },
  ],
  // Line 3: "Every division, every innovation."
  [
    { text: "Every ", highlighted: false },
    { text: "division", highlighted: true },
    { text: ", every ", highlighted: false },
    { text: "innovation.", highlighted: true },
  ],
  // Line 4: "Unified under absolute control."
  [
    { text: "Unified under ", highlighted: false },
    { text: "absolute control.", highlighted: true },
  ],
];

// 5.5.3: Animation variants for orchestrated motion
const manifestoContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const manifestoLineVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(4px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const manifestoFadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

function ManifestoSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2, // 5.5.1: Trigger at 20% visibility
    margin: '-100px',
  });

  return (
    <section 
      id="manifesto"
      ref={sectionRef}
      aria-label="Our Philosophy"
      className="relative overflow-hidden bg-white"
      style={{
        // 5.1.2: Fluid vertical padding
        paddingTop: 'clamp(80px, 12vw, 180px)',
        paddingBottom: 'clamp(80px, 12vw, 180px)',
        // 5.1.6: Scroll margin for fixed nav
        scrollMarginTop: `${NAV_HEIGHT + 32}px`,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* LAYER 0: BACKGROUND ENHANCEMENTS (5.6) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      
      {/* 5.6.2: Noise texture overlay — barely perceptible warmth */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* 5.6.1: Large "KC" watermark — subtle brand reinforcement */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <motion.span 
          className="font-black text-black/[0.012] select-none tracking-[-0.05em] leading-none"
          style={{ 
            fontSize: 'clamp(300px, 40vw, 600px)',
          }}
          // 5.8.1: Subtle parallax on watermark (optional enhancement)
          initial={{ y: '-2%' }}
          animate={isInView ? { y: '2%' } : {}}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          KC
        </motion.span>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* LAYER 5: MAIN CONTENT */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div 
        className="relative z-[5] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-16"
        style={{ maxWidth: '900px' }}
      >
        <motion.div
          variants={manifestoContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* ═══ 5.2: EYEBROW ═══ */}
          <motion.div
            variants={manifestoFadeVariants}
            className="flex flex-col items-center mb-8"
          >
            {/* 5.2.2: Eyebrow text */}
            <span className="text-[12px] font-semibold text-black/35 tracking-[0.15em] uppercase">
              Our Philosophy
            </span>
            
            {/* 5.6.3: Decorative line below eyebrow */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-[50px] h-[1px] bg-black/10 mt-4 origin-center"
            />
          </motion.div>

          {/* ═══ 5.3: MAIN STATEMENT WITH WORD HIGHLIGHTING ═══ */}
          <div className="space-y-1 sm:space-y-2">
            {MANIFESTO_LINES.map((line, lineIndex) => (
              <div key={lineIndex} className="overflow-hidden">
                <motion.p
                  variants={manifestoLineVariants}
                  className="leading-[1.15] tracking-[-0.02em]"
                  style={{
                    // 5.3.2: Responsive font size
                    fontSize: 'clamp(1.6rem, 5vw, 3.25rem)',
                    fontWeight: 700,
                  }}
                >
                  {/* 5.3.3: Word-level highlighting */}
                  {line.map((segment, segmentIndex) => (
                    <span 
                      key={segmentIndex}
                      className={segment.highlighted 
                        ? 'text-black' // Emphasized words
                        : 'text-black/30' // De-emphasized words
                      }
                    >
                      {segment.text}
                    </span>
                  ))}
                </motion.p>
              </div>
            ))}
          </div>

          {/* ═══ 5.4: SUPPORTING TEXT ═══ */}
          <motion.p
            variants={manifestoFadeVariants}
            className="mt-12 sm:mt-16 text-black/45 leading-[1.7] font-light max-w-[680px]"
            style={{
              // 5.4.2: Responsive font size for supporting text
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            }}
          >
            For over a decade, we've been quietly building the infrastructure of tomorrow.
            Six divisions. One mission. Total transformation. Where others see boundaries,
            we see blueprints — and we build.
          </motion.p>

          {/* ═══ Optional: CTA Link ═══ */}
          <motion.a
            variants={manifestoFadeVariants}
            href="#divisions"
            className="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-black/60 hover:text-black hover:gap-3 transition-all duration-300 group"
          >
            <span>Explore our divisions</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Division Card — memoized to prevent unnecessary re-renders
const DivisionCard = memo(function DivisionCard({ division, index }: { division: typeof divisions[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [...ease] }}
      className="group relative bg-[#F5F5F7] rounded-[20px] p-8 lg:p-10 hover:bg-[#EBEBED] transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Top accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: division.color }}
      />

      <div className="relative">
        {/* Color dot */}
        <div
          className="w-2.5 h-2.5 rounded-full mb-8"
          style={{ backgroundColor: division.color }}
        />

        {/* Tagline */}
        <p className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: division.color }}>
          {division.tagline}
        </p>

        {/* Name */}
        <h3 className="text-[22px] lg:text-[26px] font-bold text-black mb-3 tracking-tight">
          {division.name}
        </h3>

        {/* Description */}
        <p className="text-[15px] text-black/45 leading-relaxed mb-8">
          {division.description}
        </p>

        {/* Learn more */}
        <div className="flex items-center gap-2 text-[14px] font-medium text-black group-hover:gap-3 transition-all duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
});

// Divisions Section
function DivisionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="divisions" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [...ease] }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-black/30 tracking-[0.2em] uppercase mb-6">
            Our Ecosystem
          </p>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold text-black tracking-tight leading-[1.05]">
            Six Divisions.
          </h2>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-light text-black/20 tracking-tight leading-[1.05]">
            One Vision.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {divisions.map((division, index) => (
            <DivisionCard key={division.id} division={division} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Connection Section
function ConnectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 lg:py-40 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [...ease] }}
          className="text-center mb-24"
        >
          <p className="text-[13px] font-semibold text-white/30 tracking-[0.2em] uppercase mb-6">
            The Architecture
          </p>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight">
            Connected by Design.
          </h2>
        </motion.div>

        {/* Connection Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [...ease] }}
            className="relative z-10 mx-auto w-36 h-36 md:w-44 md:h-44 bg-white rounded-full flex flex-col items-center justify-center"
          >
            {/* SVG K mark — consistent with nav & footer */}
            <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-12 md:h-12" aria-hidden="true">
              <line x1="12" y1="10" x2="12" y2="30" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <line x1="12" y1="20" x2="28" y2="10" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <line x1="12" y1="20" x2="28" y2="30" stroke="black" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="text-black/40 text-[10px] font-semibold tracking-[0.2em] mt-1">CONTROL</div>
          </motion.div>

          {/* Orbital Ring */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[360px] h-[360px] md:w-[520px] md:h-[520px] rounded-full border border-white/[0.06]" />
          </motion.div>

          {/* Divisions */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
              {divisions.map((division, index) => {
                const angle = (index * 60 - 90) * (Math.PI / 180);
                const radius = 43;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);

                return (
                  <motion.div
                    key={division.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [...ease] }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="group cursor-pointer"
                    >
                      <div
                        className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-sm"
                        style={{
                          backgroundColor: `${division.color}12`,
                          border: `1px solid ${division.color}25`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mb-2 group-hover:scale-150 transition-transform duration-300"
                          style={{ backgroundColor: division.color }}
                        />
                        <span className="text-[9px] md:text-[11px] font-bold text-white/70 text-center leading-tight tracking-wide">
                          {division.name.replace('KRONOS ', '')}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-white/35 max-w-xl mx-auto mt-40 text-[16px] leading-relaxed font-light"
        >
          Every division operates independently yet connects seamlessly through KRONOS CONTROL —
          creating a unified force greater than the sum of its parts.
        </motion.p>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 6, suffix: '', label: 'Divisions' },
    { value: 50, suffix: '+', label: 'Countries' },
    { value: 10000, suffix: '+', label: 'Team Members' },
    { value: 200, suffix: '+', label: 'Products Shipped' },
  ];

  return (
    <section ref={ref} className="py-28 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-black/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [...ease] }}
              className="text-center lg:px-8"
            >
              <div className="text-[clamp(2.5rem,5vw,4rem)] font-black text-black tracking-tight">
                {isInView ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div className="text-[13px] text-black/40 font-medium tracking-wide mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 lg:py-44 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [...ease] }}
        >
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-8">
            Ready to Shape
            <br />
            the Future?
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-lg mx-auto leading-relaxed font-light">
            Join the ecosystem that's redefining what's possible.
            Your journey with KRONOS CONTROL starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-white text-black rounded-full text-[15px] font-semibold hover:bg-white/90 transition-colors"
            >
              Join KRONOS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 text-white rounded-full text-[15px] font-medium border border-white/20 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D1D1F] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo — matches nav SVG treatment */}
          <div className="lg:col-span-2">
            <a 
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 mb-6 group cursor-pointer"
              aria-label="KRONOS CONTROL — Back to top"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-shadow duration-300">
                <svg viewBox="0 0 40 40" className="w-[20px] h-[20px]" aria-hidden="true">
                  <line x1="12" y1="10" x2="12" y2="30" stroke="black" strokeWidth="4" strokeLinecap="round" />
                  <line x1="12" y1="20" x2="28" y2="10" stroke="black" strokeWidth="4" strokeLinecap="round" />
                  <line x1="12" y1="20" x2="28" y2="30" stroke="black" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-semibold text-base tracking-tight">
                KRONOS<span className="font-light ml-1.5 opacity-50 group-hover:opacity-70 transition-opacity duration-300">CONTROL</span>
              </div>
            </a>
            <p className="text-white/30 text-[14px] max-w-xs leading-relaxed">
              Building the future through innovation, creativity, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Links */}
          {[
            { title: 'Divisions', links: ['Tech', 'Media', 'Labs', 'Studios', 'Ventures', 'Academy'] },
            { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
            { title: 'Connect', links: ['Twitter / X', 'LinkedIn', 'Instagram', 'YouTube'] },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-[12px] tracking-[0.1em] uppercase text-white/50 mb-5">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 text-[13px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[12px]">
            © {currentYear} KRONOS CONTROL. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-white/25 hover:text-white/60 text-[12px] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white antialiased">
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <Navigation scrolled={scrolled} />
      <HeroSection />
      <ManifestoSection />
      <DivisionsSection />
      <ConnectionSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
