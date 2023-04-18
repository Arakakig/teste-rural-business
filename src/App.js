import './App.css';
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Header from './components/header';
import { useState } from 'react';
import Safe from './assets/safe.png'


function App() {

  
  const [pageAtual, setPageAtual] = useState(1)
  const [data, setData] = useState(
    {
      cpf: '', password: '', plan: '', dados: {
        nome: '', sobrenome: '', celular: '', atividade: '', email: ''}, endereço: {
          cep: '', endereço: '', numero: '', complemento: '', bairro: '', estado: '', cidade: ''
        }, cartao: { bandeira: '', nome_impresso: '', numero: '', cod: '', val_mes: '', val_ano: '' }

    }
  )
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='title-app'>
        <h1>Faça sua assinatura em <strong>3 passos. </strong></h1>
      </div>
      <body className='d-flex w-100 justify-content-center'>
        <div className="App-content">
          <div className='d-flex  w-100 justify-content-center'>
            {pageAtual == 1 &&
              <Page1 setPageAtual={setPageAtual} setData={setData} data={data}/>
            }
            {pageAtual == 2 &&
              <Page2 setPageAtual={setPageAtual} setData={setData} data={data}/>
            }
            {pageAtual == 3 &&
              <Page3 setPageAtual={setPageAtual} setData={setData} data={data} />
            }
          </div>

          <div className='m-2 d-flex justify-content-center'>
            <a href='https://seal.starfieldtech.com/verifySeal?sealID=ph7FJsNt1XvwvkszixkwQJYv4EE97foEYAiBKCpLSyWC7SyUOpl8ZlRpo7wo' target='_blank'>
              <img src={Safe} style={{ maxWidth: '250px' }} />
            </a>
          </div>
        </div>

      </body>
      <footer>
        <span className="texto-branco"><strong>Rural Business - Copyright © 2018</strong><br />
          Todos os direitos reservados. Republicação ou redistribuição do conteúdo produzido pela Rural Business é expressamente proibido sem autorização prévia 			por escrito.<br/>
            <strong>Conforme estabelecido em contrato, erros, atrasos ou inexatidões, não poderão servir como base para reclamações ou ações judiciais.</strong></span><br/>
          <span className="texto-branco">Avenida Primeiro de Maio, 620 - Campo Grande (MS)</span><br />
      </footer>
    </div>
  );
}

export default App;
