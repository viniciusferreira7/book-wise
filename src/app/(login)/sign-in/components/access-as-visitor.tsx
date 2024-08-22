import { RocketSVG } from '@/components/svg/rocket-svg'
import { Button } from '@/components/ui/button'

export function AccessAsVisitor() {
  return (
    <Button
      className="w-full justify-start gap-5 rounded-lg bg-gray-800 px-6 py-5 text-lg font-semibold text-white hover:dark:bg-primary/50"
      size="auto"
    >
      <RocketSVG width={32} height={32} />
      <span>Acessar como visitante</span>
    </Button>
  )
}
