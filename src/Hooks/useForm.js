import React from 'react';


const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    },
    password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: 'A senha deve ter no mínimo oito caracteres, pelo menos uma letra e um número',
    }

}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function validate(value){
        if(type === false) return true;
        //verifica se o usuário clicou e não digitou nada

        if(value.length === 0) {
            setError('Preencha um valor.')
            return false;

        //verifico se existe o tipo que o usuário digitou, testa no regex e se o valor for false exibe setError
        }else if(types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;

        //caso não tenha nenhum dos erros anteriores retorna o else com o setError null e retorna true por não ter nenhum erro
        }else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        //verifica se tem um erro anterior para só depois exibir a mensagem de erro
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        //exportando como um metodo que vai ativar o validate e verificar o valor (value)
        validate: () => validate(value),

        //validar quando o usuário clica no campo de formulário e sai
        onBlur: () => validate(value)
    };
};

export default useForm;
