import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { fetchConfig, selectConfig } from "./features/config/configSlice"
import { Counter } from "./features/counter/Counter"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()
  const config = useAppSelector(selectConfig)
  useEffect(() => {
    dispatch(fetchConfig())
  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header">
        {config?.appName}
        <Counter />
      </header>
    </div>
  )
}

export default App
