import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Box = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  width: 1000px;
  margin: 1rem 1rem;
  background-color: #eee;
  overflow: auto;
`;

export const HeadBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  width: 1000px;
  margin: 1rem 1rem;
  background-color: #ddd;
`;

export const AddBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  max-width: 500px;
  margin: 1rem auto;
  background-color: #ddd;
`;

export const HeadText = styled.h1`
  font-size: 2rem;
  width: max-content;
  margin: 20px auto;
`;

export const SubText = styled.h2`
  font-size: 1.5rem;
  width: max-content;
  margin: 20px auto;
`;

export const NavBar = styled.nav`
  text-align: center;
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
`;

export const NavLink = styled(Link)`
  padding: 0;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    color: #295e96;
  }
`;

export const Title = styled.p`
  font-size: 1.2rem;
  color: #000;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: max-content;
  margin: 0 auto;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: max-content;
  margin: 0 auto;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`


export const Button = styled.button`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100px;
  margin: 1rem auto;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`