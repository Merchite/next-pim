import React from 'react';
import { styled } from "styled-components"

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    margin-bottom: 0.5rem;
  }
  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-color: #000;
    }
  }
`;

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <InputContainer>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder=" " 
      />
      <label 
        htmlFor={id} 
      >{label}</label>
    </InputContainer>
  )
}

export default Input;