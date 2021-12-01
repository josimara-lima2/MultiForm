import * as C from './styles'
import { Theme } from '../../components/theme'
import { useNavigate,Link } from 'react-router-dom';
import {  useEffect } from 'react';
import { FormActions, useForm } from '../../contexts/FormContext';
import { SelectOption } from '../../components/SelectOption';
export const FormStep2 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload:2
            })
        }
      
    }, [])

    const handleNextStep = () => {
    if(state.name !== ''){
        navigate('/step3')
    }else{
        alert("preencha os dados")
    }
    }

    const setLevel = (level:number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }
   
    return (
        <Theme>
            <C.Container>
            <p>Passo 2/3</p>
            <h1>{state.name}, O que melhor define voce</h1>
            <p>Escolha a opção que melhor descreve seu momento profissionalmente.</p>
            <hr/>
            <SelectOption
                title="Sou iniciante"
                description="Comecei a programar a menos de 2 anos"
                icon="🥳"
                selected={state.level=== 0}
                onClick ={() => setLevel(0)}
            />
             <SelectOption
                title="Sou programador"
                description="Ja programo há  2 anos ou mais"
                icon="🤓"
                selected={state.level=== 1}
                onClick ={() => setLevel(1)}
            />
            <Link className="backButton" to="/">Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
        </Theme>
    )
}