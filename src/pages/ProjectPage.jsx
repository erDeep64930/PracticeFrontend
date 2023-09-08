import GlowingATMcard from "../components/ProjectSection/GlowingATMcard"
import { GlowingGradientButton } from "../components/ProjectSection/GlowingGradientButton"
import ResponsiveCard from "../components/ProjectSection/ResponsiveCard"


export const ProjectPage = () => {
  return (
    <div className="flex flex-col my-2 px-4 -z-10">
      <GlowingGradientButton />
      <GlowingATMcard />
      <ResponsiveCard />
    </div>
  )
}
