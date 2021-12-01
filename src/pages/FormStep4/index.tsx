import * as C from './styles'
import { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme'
export const FormStep4 = () => {
    const {state,dispatch} = useForm()
    const navigate = useNavigate()

    useEffect(()=>{
        if(state.name== ''){
            navigate('/')

        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload:4
            })
        }
    },[])

    const level = state.level === 0 ? 'iniciante' : 'programador'
    return(
        <Theme>
            <C.Container>
            <p>Passo 4/4</p>
            <h1>Legal {state.name}, seu cadastro foi realizado com sucesso.</h1>
            <p>Confira os seus dados</p>
            <hr/>
            <h1>Seu nome: {state.name}</h1>
            <p>Seu nivel: {level}</p>
            <p>Contatos:<br/> {state.email} <br/> {state.github}</p>
            
             </C.Container>
        </Theme>
    )
}