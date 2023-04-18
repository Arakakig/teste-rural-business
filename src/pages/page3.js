import React, { useRef, useState } from 'react'
import './page3.css'

function Page3(props) {
    const formRef = useRef(null);
    const estados = [
        { value: 'Todos', label: 'Todos' },
        { value: 'AC', label: 'Acre' },
        { value: 'AL', label: 'Alagoas' },
        { value: 'AP', label: 'Amapá' },
        { value: 'AM', label: 'Amazonas' },
        { value: 'BA', label: 'Bahia' },
        { value: 'CE', label: 'Ceará' },
        { value: 'DF', label: 'Distrito Federal' },
        { value: 'ES', label: 'Espírito Santo' },
        { value: 'GO', label: 'Goiás' },
        { value: 'MA', label: 'Maranhão' },
        { value: 'MT', label: 'Mato Grosso' },
        { value: 'MS', label: 'Mato Grosso do Sul' },
        { value: 'MG', label: 'Minas Gerais' },
        { value: 'PA', label: 'Pará' },
        { value: 'PB', label: 'Paraíba' },
        { value: 'PR', label: 'Paraná' },
        { value: 'PE', label: 'Pernambuco' },
        { value: 'PI', label: 'Piauí' },
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'RN', label: 'Rio Grande do Norte' },
        { value: 'RS', label: 'Rio Grande do Sul' },
        { value: 'RO', label: 'Rondônia' },
        { value: 'RR', label: 'Roraima' },
        { value: 'SC', label: 'Santa Catarina' },
        { value: 'SP', label: 'São Paulo' },
        { value: 'SE', label: 'Sergipe' },
        { value: 'TO', label: 'Tocantins' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const updateData = props.data;
        updateData['dados']['nome'] = formRef.current.nome?.value;
        updateData['dados']['sobrenome'] = formRef.current.sobrenome?.value;
        updateData['dados']['celular'] = formRef.current.celular?.value;
        updateData['dados']['atividade'] = formRef.current.atividade?.value;
        updateData['dados']['email'] = formRef.current.email?.value;
        updateData['endereço']['cep'] = formRef.current.cep?.value;
        updateData['endereço']['endereço'] = formRef.current.endereço?.value;
        updateData['endereço']['numero'] = formRef.current.numero?.value;
        updateData['endereço']['complemento'] = formRef.current.complemento?.value;
        updateData['endereço']['bairro'] = formRef.current.bairro?.value;
        updateData['endereço']['cidade'] = formRef.current.cidade?.value;
        updateData['endereço']['estado'] = formRef.current.estado?.value;
        updateData['endereço']['complemento'] = formRef.current.complemento?.value;
        updateData['endereço']['bairro'] = formRef.current.bairro?.value;
        updateData['endereço']['cidade'] = formRef.current.cidade?.value;
        updateData['cartao']['bandeira'] = formRef.current.bandeira_cartao?.value;
        updateData['cartao']['nome_impresso'] = formRef.current.nome_cartao?.value;
        updateData['cartao']['numero'] = formRef.current.numero_cartao?.value;
        updateData['cartao']['cod'] = formRef.current.codigo_cartao?.value;
        updateData['cartao']['val_mes'] = formRef.current.mes_cartao?.value;
        updateData['cartao']['val_ano'] = formRef.current.val_ano?.value;
        props.setData(updateData);
        alert("Olhe o console para ver os dados do elemento")
        console.log(props.data)
    };
    return (
        <section className='last-page'>
            <div className='container'>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div style={{ borderBottom: '3px solid' }}>
                                <h3>
                                    [Finalize seu cadastro]
                                </h3>
                                <div className='step-title' >
                                    <strong>
                                        PASSO 3 DE 3
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='client'>
                                <div className='row'>
                                    <div className='col-md-6 '>
                                        <div className="form-group">
                                            <label>Nome </label>
                                            <input id="nome" type="text" className="input-control" name="nome" placeholder="Nome" minlength="3" maxlength="20" required=""></input>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Sobrenome </label>
                                            <input id="Sobrenome" type="text" className="input-control" name="sobrenome" placeholder="Sobrenome" minlength="3" maxlength="20" required=""></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Celular </label>
                                    <input id="Celular" type="text" className="input-control" name="celular" placeholder="(00) 00000-0000" minlength="15" maxlength="15" required=""></input>
                                </div>
                                <div className="form-group">
                                    <label>Atividade Principal</label>
                                    <select id="atividade" className="input-control" name="atividade">
                                        <option value="1">Agricultura</option>
                                        <option value="2">Pecuaria</option>
                                        <option value="3">As duas</option>
                                    </select></div>
                                <div className="form-group">
                                    <label>Email </label>
                                    <input id="Email" type="email" className="input-control" name="email" placeholder="Email" minlength="3" maxlength="20" required=""></input>
                                </div>
                                <div className="form-group">
                                    <label>Cep </label>
                                    <input id="Cep" type="text" className="input-control" name="cep" placeholder="Cep" minlength="3" maxlength="20" required=""></input>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='client'>
                                <div className='form-group'>
                                    <label>Endereço</label>
                                    <input id='endereço' type='text' className='input-control' name='endereço' placeholder='100' minLength='5' maxLength='30' />
                                </div>
                                <div className='form-group'>
                                    <label>Número</label>
                                    <input id='numero' type='text' className='input-control' name='numero' placeholder='1000' maxLength='10' />
                                </div>
                                <div className='form-group'>
                                    <label>Complemento</label>
                                    <input id='complemento' type='text' className='input-control' name='complemento' placeholder='Esquina com a Rua Bahia' minLength='5' maxLength='30' />
                                </div>
                                <div className='form-group'>
                                    <label>Bairro</label>
                                    <input id='bairro' type='text' className='input-control' name='bairro' placeholder='Centro' minLength='15' maxLength='15' />
                                </div>
                                <div className='form-group'>
                                    <label>Estado</label>
                                    <select id="estado" name="estado" className="input-control">
                                        {estados.map((estado) => (
                                            <option value={estado.value}>{estado.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label>Cidade</label>
                                    <input id='cidade' type='text' className='input-control' name='cidade' placeholder='(00) 00000-0000' minLength='15' maxLength='15' required='' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                        <div className='col-md-12 well well-sm'>
                            <strong>DADOS DO CARTÃO</strong>
                            <hr />
                            <div className='dados-cartao'>
                                <div className='col-bandeira'>
                                    <label >Bandeira</label>
                                    <select name="bandeira_cartao" className="input-control">
                                        <option value="Visa">Visa </option>
                                        <option value="Master">Master Card</option>
                                        <option value="Amex">Amex</option>
                                        <option value="Elo">Elo </option>
                                        <option value="Aura">Aura </option>
                                        <option value="JCB">JCB </option>
                                        <option value="Diners">Diners</option>
                                        <option value="Discover">Discover</option>
                                        <option value="Hipercard">Hipercard</option>
                                    </select>
                                </div>
                                <div className="col-nome">
                                    <label >Nome Impresso no Cartão</label>
                                    <input type="text" className="input-control" id="nome_cartao" name="nome_cartao" placeholder="Nome Impresso no Cartão" maxlength="35" />
                                </div>
                                <div className="col-numero">
                                    <label>Numero do cartão</label>
                                    <input type="number" className="input-control" id="numero_cartao" name="numero_cartao" 
                                       onInput={(e) => {
                                        if (e.target.value.length > 19) {
                                            e.target.value = e.target.value.slice(0, 19);
                                        }
                                    }}
                                    placeholder="Numero do Cartão" maxlength="19" />
                                </div>
                                <div className="col-codigo">
                                    <label >Cod. Segurança</label>
                                    <input type="number" className="input-control" id="codigo_cartao" name="codigo_cartao" placeholder="Cod. Seg"
                                        onInput={(e) => {
                                            if (e.target.value.length > 3) {
                                                e.target.value = e.target.value.slice(0, 3);
                                            }
                                        }} />
                                </div>
                                <div className="col-mes">
                                    <label >Val. Mês</label>
                                    <select name="mes_cartao" className="input-control">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col-ano">
                                    <label>Val. Ano</label>
                                    <select name="ano_cartao" className="input-control">

                                        <option value="2023">2023</option>

                                        <option value="2024">2024</option>

                                        <option value="2025">2025</option>

                                        <option value="2026">2026</option>

                                        <option value="2027">2027</option>

                                        <option value="2028">2028</option>

                                        <option value="2029">2029</option>

                                        <option value="2030">2030</option>

                                        <option value="2031">2031</option>

                                        <option value="2032">2032</option>

                                        <option value="2033">2033</option>

                                        <option value="2034">2034</option>

                                        <option value="2035">2035</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <i>Ao clicar em FINALIZAR informe seus dados de pagamento e não se preocupe você só será cobrado ao final do primeiro mês e você pode cancelar quando quiser. <br />
                        Caso queira trocar de plano ou revisar seu cadastro <a href="#" onclick={() => props.setPageAtual(1)}>clique aqui</a></i>
                    <hr />
                    <button className='btn-next' >
                            Finalizar >>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Page3
