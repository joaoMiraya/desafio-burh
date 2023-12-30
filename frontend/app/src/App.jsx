import './style/index.css'
import 'react-tooltip/dist/react-tooltip.css'

import Primeiro from './components/rows/Primeiro'
import Terceiro from './components/rows/Terceiro'
import Segundo from './components/rows/Segundo'
import Quarto from './components/rows/Quarto'

function App() {



  return (
    <>
      <div className='px-6 py-12  md:py-16 flex flex-col min-h-screen bg-[#0F0F0F]'>

        <section >
          <Primeiro />
        </section>

        <section >
          <Segundo />
        </section>

        <section>
          <Terceiro />
        </section>

        <section>
          <Quarto />
        </section>

      </div>

    </>
  )
}

export default App
