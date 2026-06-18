import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import SeedOfLife from './SeedOfLife'

export default function GradientOrb() {
  return (
    <div className="select-none">
      <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden border border-line bg-brand-plum pointer-events-none">
        <ShaderGradientCanvas
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          pixelDensity={1}
        >
          <ShaderGradient
            control="props"
            type="waterPlane"
            animate="on"
            uSpeed={0.3}
            uStrength={0.35}
            uDensity={1.4}
            uFrequency={5.5}
            color1="#E0552B"
            color2="#E79BC0"
            color3="#BE4480"
            bgColor1="#2A1C29"
            bgColor2="#2A1C29"
            lightType="3d"
            envPreset="dawn"
            brightness={1.1}
            reflection={0.1}
            cAzimuthAngle={180}
            cPolarAngle={90}
            cDistance={3.4}
            cameraZoom={1}
            positionX={0} positionY={0} positionZ={0}
            rotationX={0} rotationY={0} rotationZ={0}
            grain="off"
          />
        </ShaderGradientCanvas>
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
  <SeedOfLife className="w-3/5 max-w-[240px]" />
</div>
      </div>
    </div>
  )
}