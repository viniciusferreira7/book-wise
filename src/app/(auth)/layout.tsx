import { Sidebar } from './components/sidebar'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="flex h-full gap-24 lg:ml-80">{children}</div>
    </div>
  )
}
