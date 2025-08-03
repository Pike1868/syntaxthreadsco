import { Outlet } from "react-router-dom"
import { Header, Navbar, Footer } from "@/components"

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Navbar/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
