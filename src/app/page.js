import { hookPropertyMap } from "next/dist/server/require-hook";
import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import('../app/components/Map'),
  { ssr: false }
)

export default function Home() {
  return (
    <MapComponent></MapComponent>
  )
}
