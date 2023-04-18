import React, { useState } from 'react'
import './page1.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page1(props) {

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function changeCpf(value) {
    const regex = /[^0-9]/g;
    setCpf(value.replace(regex, ''))
  }


  function validarCPF(strCPF) {
    let Soma = 0;
    let Resto;
    let stringCPF = strCPF.replace(/[^\d]+/g, '');
    if (stringCPF === '00000000000') return false;
    for (let i = 1; i <= 9; i++) {
      Soma += parseInt(stringCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) {
      Resto = 0;
    }
    if (Resto !== parseInt(stringCPF.substring(9, 10))) {
      return false;
    }
    Soma = 0;
    for (let i = 1; i <= 10; i++) {
      Soma += parseInt(stringCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) {
      Resto = 0;
    }
    if (Resto !== parseInt(stringCPF.substring(10, 11))) {
      return false;
    }
    return stringCPF;
  }

  function nextPage(event) {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("As senhas precisam ser iguais", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored"
      });
    } else if (!validarCPF(cpf)) {
      toast.error("CPF inválido", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored"
      });
    } else {
      const updateData = props.data;
      updateData['cpf'] = cpf;
      updateData['password'] = password;
      props.setData(updateData);
      props.setPageAtual(2);
    }
  }
  


  return (
    <section className='col-md-4 col-md-offset-4 '>

      <div className='page-content' >
        <div style={{ borderBottom: '3px solid' }}>
          <h3>
            [Digite de CPF e uma Senha]

          </h3>
          <div className='step-title' >
            <strong>
              PASSO 1 DE 3
            </strong>
          </div>
        </div>

        <form onSubmit={nextPage}>
          <div className='d-flex flex-column mb-3 mt-3' >
            <label style={{ fontWeight: '700' }}>
              CPF (Somente Numeros)
            </label>
            <input placeholder='47902828050' className='input-control' maxLength={11} value={cpf} onChange={(e) => changeCpf(e.target.value)} />
          </div>
          <div className='d-flex flex-column mb-3'>
            <label style={{ fontWeight: '700' }}>
              Senha
            </label>
            <input placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} minLength={5} type="password" className='input-control' />
          </div>
          <div className='d-flex flex-column mb-3'>
            <label style={{ fontWeight: '700' }}>
              Confirme sua Senha
            </label>
            <input placeholder='Confirme a Senha' value={confirmPassword} minLength={5} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className='input-control' />
          </div>
          <div style={{ lineHeight: '1.5' }} className='mb-3'>
            Ao criar uma conta, você concorda com os{' '}
            <a href='https://rbvideo.com.br/licenca-uso.asp'>
              Termos de Contrato de uso
            </a>{' '}
            Rural Business.
          </div>
          <button className='btn-next' >
            Escolha seu plano >>
          </button>
        </form>

      </div>
      <ToastContainer />
    </section>
  )
}

export default Page1