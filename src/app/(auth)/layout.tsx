import { SideBar } from './components/side-bar'

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
