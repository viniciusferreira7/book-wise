import { GitHubSVG } from '@/components/svg/github-svg'
import { Button } from '@/components/ui/button'

export function SignInGitHub() {
  return (
    <Button
      className="w-full justify-start gap-5 rounded-lg bg-foreground px-6 py-5 text-lg font-semibold"
      size="auto"
    >
      <GitHubSVG width={32} height={32} />
      <span>Entrar com GitHub</span>
    </Button>
  )
}
