import * as C from './styles'
import {useNavigate} from 'react-router-dom'
import { Theme } from '../../components/theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent,useEffect } from 'react'

export const FormStep1 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        dispatch({
            type:FormActions.setCurrentStep,
            payload:1
        })
    }, [])

    const handleNextStep = () => {
    if(state.name !== ''){
        navigate('/step2')
    }else{
        alert("preencha os dados")
    }
    }

    const handleNamechange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }
    return (
       <Theme>
        <C.Container>
            <p>Passo 1/4</p>
            <h1>Vamos começar com o seu nome</h1>
            <p>Preencha o campo abaixo com o seu nome completo.</p>
            <hr/>
            <label>
                Seu nome completo
                <input
                    type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleNamechange}
                />
            </label>
            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
       </Theme>
    )
}