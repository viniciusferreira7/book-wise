import { Sidebar } from './components/sidebar'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen gap-24">
      <Sidebar />
      {children}
    </div>
  )
}
