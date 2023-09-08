import GlowingATMcard from "../components/ProjectSection/GlowingATMcard"
import { GlowingGradientButton } from "../components/ProjectSection/GlowingGradientButton"


export const ProjectPage = () => {
  return (
    <div className="flex flex-col my-2 px-4">
      <GlowingGradientButton />
      <GlowingATMcard />
    </div>
  )
}
