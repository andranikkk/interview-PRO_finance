import { ToolsCard } from "./components/tools card"

import { MainPart } from "./components/main part"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <ToolsCard />

      <div className="w-full">
        <MainPart />
      </div>
    </div>
  )
}

export default App
