import * as C from './styles'
import {Link, useNavigate} from 'react-router-dom'
import { Theme } from '../../components/theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent,useEffect } from 'react'

export const FormStep3 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload:3
            })
        }
    }, [])

    const handleNextStep = () => {
       if(state.email !== '' && state.github !== ''){
        console.log(state)
       }else{
           alert('preencha os dados')
       }
    }

    const handleEmailchange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGitHubchange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        })
    }

    return (
       <Theme>
        <C.Container>
            <p>Passo 3/3</p>
            <h1>Legal {state.name}, onde te achamos?</h1>
            <p>Preencha os campos para conseguirmos entrar em contato.</p>
            <hr/>
            <label>
                Informe o seu email
                <input
                    type="text"
                    value={state.email}
                    onChange={handleEmailchange}
                />
            </label>
            <label>
               Informe o seu GitHub
                <input
                    type="url"
                    
                    value={state.github}
                    onChange={handleGitHubchange}
                />
            </label>
            <Link className="backButton" to="/step2">Voltar</Link>
            <button onClick={handleNextStep}>Finalizar</button>
        </C.Container>
       </Theme>
    )
}