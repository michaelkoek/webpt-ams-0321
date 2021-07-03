import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  transition-delay: 0.5s;
  transition: bottom 0.45s ease-in-out;
  left: 0;
  right: 0;
  top: 0;
  color: white;
  /* background-color: ${(props) =>
    props.type === "succes" ? "#26a526" : "#db5a42"}; */
  background-color: ${({ type }) =>
    type === "success" ? "#26a526" : "#db5a42"};
`;

const CloseBtn = styled.div`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 25px;
    width: 25px;
    position: relative;
    font-size: 0;

    &::after,
    &::before {
        content: "";
        height: 100%;
        width: 2px;
        background-color: white;
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
    }

    &::after {
        transform: rotate(45deg);
    }
    &::before {
        transform: rotate(-45deg);
    }
  }
`;

const Toaster = ({ type, onClick, children }) => {
  return (
    <Container type={type}>
      <CloseBtn>close</CloseBtn>
      {children} 🍪
    </Container>
  );
};

export default Toaster;
