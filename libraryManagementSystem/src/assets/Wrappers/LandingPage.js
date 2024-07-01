import styled from 'styled-components';

const Wrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1200px;
  }

  .info {
    flex: 1;
    max-width: 600px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h1 span {
    color: #333;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-right: 1rem;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }

  .register-link {
    background-color: #4caf50;
    margin-right: 0;
  }

  .img {
    max-width: 600px;
    height: auto;
    border-radius: 8px;
  }

  .main-img {
    flex: 1;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .main-img {
      margin-top: 2rem;
      margin-left: 0;
    }
  }
`;

export default Wrapper;
