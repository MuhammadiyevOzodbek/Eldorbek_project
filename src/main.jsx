import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { applyThemeToDocument, getInitialTheme } from "./context/themeUtils"
import { ThemeProvider } from "./context/ThemeContext"
import App from "./App.jsx"

applyThemeToDocument(getInitialTheme())

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
