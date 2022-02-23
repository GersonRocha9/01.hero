import styled from "styled-components";

export const Menu = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  ul li a {
    padding: 0.7rem;
    margin: 0.7rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.875rem;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  ul li a:hover {
    color: #f9c851;
  }
`;
