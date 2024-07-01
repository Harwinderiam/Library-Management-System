import styled from 'styled-components';

const Wrapper = {
    FormContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      max-width: 400px;
      margin: 2rem auto;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `,
    Form: styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
    `,
    Input: styled.input`
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    `,
    Button: styled.button`
      padding: 0.5rem;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
  
      &:hover {
        background-color: #555;
      }
    `,
    ToggleButton: styled.button`
      margin-top: 1rem;
      background: none;
      border: none;
      color: blue;
      cursor: pointer;
  
      &:hover {
        text-decoration: underline;
      }
    `,
    Error: styled.div`
      color: red;
      margin-bottom: 1rem;
    `,
  };

export default Wrapper;