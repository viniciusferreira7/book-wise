import { Button } from '@/components/ui/button'

import { GoogleSVG } from '../../../components/svg/google-svg'

export function SignInGoogle() {
  return (
    <Button
      className="w-full justify-start gap-5 rounded-lg bg-foreground px-6 py-5 text-lg font-semibold"
      size="auto"
    >
      <GoogleSVG width={32} height={32} />
      <span>Entrar com Google</span>
    </Button>
  )
}
