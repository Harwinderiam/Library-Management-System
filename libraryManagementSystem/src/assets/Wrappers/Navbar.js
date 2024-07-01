import styled from 'styled-components';

const Wrapper = {
  NavbarContainer: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
  `,
  NavbarBrand: styled.div`
    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
    }
  `,
  NavbarLinks: styled.ul`
    list-style: none;
    display: flex;
  `,
  NavbarLink: styled.li`
    margin: 0 1rem;

    a {
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `,
};

export default Wrapper;