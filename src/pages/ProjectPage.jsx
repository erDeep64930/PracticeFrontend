import GlowingATMcard from "../components/ProjectSection/GlowingATMcard"
import { GlowingGradientButton } from "../components/ProjectSection/GlowingGradientButton"
import ResponsiveCard from "../components/ProjectSection/ResponsiveCard"


export const ProjectPage = () => {
  return (
    <div className="grid grid-cols-1 my-2 px-4 -z-10">
      <GlowingGradientButton />
      <GlowingATMcard />
      <ResponsiveCard />
    </div>
  )
}
