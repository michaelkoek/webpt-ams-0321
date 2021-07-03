import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 ${({horizontalPadding}) => horizontalPadding && horizontalPadding};
`;

const Container = ({ verticalPadding, horizontalPadding, type = "section", children }) => {
  return <Wrapper verticalPadding={verticalPadding} horizontalPadding={horizontalPadding}>[XX] {children}</Wrapper>;
};

export default Container;
