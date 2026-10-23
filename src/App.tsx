import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Disclaimer from "./pages/Disclaimer"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import PortDetail from "./pages/PortDetail"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ports" element={<Navigate to="/" replace />} />
        <Route path="ports/:slug" element={<PortDetail />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
