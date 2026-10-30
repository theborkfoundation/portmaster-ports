import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
