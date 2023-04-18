import React, { useState } from 'react'
import './page2.css'
function Page2(props) {

    const [typePlan, setTypePlan] = useState(null)
    function nextPage() {
        const updateData = props.data;
        updateData['plan'] = typePlan;
        props.setData(updateData);
        props.setPageAtual(3)
    }
    const handleRadioChange = (e) => {
        setTypePlan(e);
    }
    const [typesPayment, setTypesPayment] = useState(
        [
            { title: 'PLANO BÁSICO', subtitle: 'CARTÃO DE CRÉDITO', description: 'Acesso a informações de somente 1 mercado (Soja, Milho, Gado e Proteína Animal ou Leite)', new: false, products: ['Soja', 'Milho', 'Gado e Proteína Animal', 'Leite'], values: [{ value: '9,90', type: 'Mensal' }, { value: '59,40', type: 'Semestral' }, { value: '118,80', type: 'Anual' }] },
            { title: 'PLANO TOP', subtitle: 'CARTÃO DE CRÉDITO', description: 'Acesso completo aos 3 mercados disponíveis (Soja, Milho,Gado e Proteína Animal)', new: false, values: [{ value: '9,90', type: 'Mensal' }, { value: '59,40', type: 'Semestral' }, { value: '118,80', type: 'Anual' }] },
            { title: 'PLANO TOP LEITE', subtitle: 'CARTÃO DE CRÉDITO', description: 'Acesso completo aos 3 mercados disponíveis (Soja, Milho,Gado e Proteína Animal)', new: true, values: [{ value: '29,90', type: 'Mensal' }, { value: '179,40', type: 'Semestral' }, { value: '358,80', type: 'Anual' }] },
        ]
    )
    const [typesBoleto, setTypesBoleto] = useState(
        [
            { title: 'PLANO TOP 3 MESES', new: false, value: { valor: '65,00', subtitle: 'BOL TOP 3 MESES' } },
            { title: 'PLANO TOP + LEITE 3 MESES', new: true, value: { valor: '90,00', subtitle: 'BOL LEITE 3 MESES' } },
            { title: 'PLANO TOP 6 MESES', new: false, value: { valor: '125,00', subtitle: 'BOL TOP 6 MESES' } },
            { title: 'PLANO TOP + LEITE 6 MESES', new: true, value: { valor: '180,00', subtitle: 'BOL LEITE 6 MESES' } },
            { title: 'PLANO TOP 1 ANO', new: false, value: { valor: '245,00', subtitle: 'BOL TOP 1 ANO' } },
            { title: 'PLANO TOP + LEITE 1 ANO', new: false, value: { valor: '355,00', subtitle: 'BOL LEITE 1 ANO' } },
        ]
    )

    return (
        <section className='col-md-6 col-md-offset-3 '>

            <div className='page-content' >
                <div className='d-flex align-items-center gap-2' style={{ borderBottom: '3px solid' }}>
                    <h3>
                        [Escolha seu plano]
                    </h3>
                    <div className='step-title' >
                        <strong>
                            PASSO 2 DE 3
                        </strong>
                    </div>
                </div>
                <table className='table table-striped'>
                    <tbody >
                        <tr>
                            <td>
                                <span>
                                    Planos mensais
                                    <br />
                                    <strong>
                                        CARTÃO DE CREDITO
                                    </strong>
                                </span>
                                <br />
                                <small>
                                    <i>
                                        Libera na hora*, é cobrado todo período selecionado direto na fatura do seu cartão e pode ser cancelar quando quiser
                                    </i>
                                </small>
                            </td>
                            <td></td>


                        </tr>
                        {typesPayment.map((item, index) => (
                            <tr>
                                <td>
                                    <div className='d-flex gap-1'>
                                        <b>{item.title}</b>
                                        <div >{item.subtitle}</div>
                                        {item.new &&
                                            <span className='label label-warning d-flex align-items-center'>
                                                NOVO!
                                            </span>
                                        }
                                    </div>
                                    <div>
                                        {item.description}
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex gap-1'>
                                        <div>
                                            {item.values?.map((itemContent, index) => (
                                                <div className='d-flex gap-2'>
                                                    <input type='radio' name='plano' value={index} onClick={(e)=>handleRadioChange('plan_normal'+e.target.value)}/>
                                                    <strong> {itemContent.value}</strong>
                                                    <small style={{ fontWeight: '700' }}> {itemContent.type}</small>
                                                </div>
                                            ))}
                                            {item.products &&
                                                <label>
                                                    <select className='input-control' style={{ fontWeight: '700' }}>
                                                        {item.products.map((itemContent, index) => (
                                                            <option >
                                                                {itemContent}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </label>

                                            }

                                        </div>
                                    </div>

                                </td>

                            </tr>
                        ))}
                        <tr>
                            <td colspan="4">
                                <span>Planos por período
                                    <br />
                                    <strong>PLANO TOP BOLETO</strong>
                                </span>
                                <p>
                                    <small>
                                        <i>Liberação mediante baixa bancaria, periodo de assinatura pré-definido mínimo de 3 meses</i>
                                    </small>
                                </p>
                                <table className='table table-striped'>
                                    <tbody>
                                        {typesBoleto.map((item, index) => (
                                            <tr>
                                                <td>
                                                    <div className='d-flex gap-1'>
                                                        <b>{item.title}</b>
                                                        <div >{item.subtitle}</div>
                                                        {item.new &&
                                                            <span className='label label-warning d-flex align-items-center'>
                                                                NOVO!
                                                            </span>
                                                        }
                                                    </div>
                                                    <div>
                                                        {item.description}
                                                    </div>


                                                </td>
                                                <td>
                                                    <div className='d-flex gap-1'>
                                                        <input type='radio' name='plano' onChange={(e) => handleRadioChange('plan_boleto'+index)} />
                                                        <b>{item.value.valor}</b>
                                                        <div >{item.value.subtitle}</div>
                                                    </div>
                                                    <div>
                                                        {item.description}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <button className='btn-next' onClick={() => nextPage()}>
                Cadastro >>
                        </button>
                    </tbody>
                </table>


            </div>
        </section>
    )
}

export default Page2