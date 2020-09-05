import React, { FunctionComponent } from 'react'
import styled from 'styled-components'


type TextInputProps = {
    id: string,
    value: string,
    error?: string,
    label?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Field = styled.div`
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
`;

const Input = styled.input`
    color: #555;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    outline:none;
`;


const TextInput: FunctionComponent<TextInputProps> = ({ id, value, error, label, onChange }) =>
    (

        <Field>
            <Input
                id={id}
                type="text"
                value={value}
                placeholder={label}
                onChange={onChange}
            />
        </Field>
    )


export default TextInput