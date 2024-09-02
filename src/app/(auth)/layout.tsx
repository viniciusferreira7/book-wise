import { SideBar } from './components/sidebar'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen">
      <SideBar />
      {children}
    </div>
  )
}
