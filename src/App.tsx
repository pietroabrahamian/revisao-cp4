import { Content } from './components/content'
import { Header } from "./components/header"

function App() {

return (
    <>
      <Header />
      <Content 
      title='Aula de Front'
      content='aula de revisão do checkpoint'/>
      <Content 
      title='Aula de Pyhon'
      content='aula de dicionarios no python'/>
    </>
  )
}

export default App
