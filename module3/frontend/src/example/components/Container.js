import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0
    ${({ horizontalPadding }) => horizontalPadding && horizontalPadding};
`;

const Container = ({
  verticalPadding,
  horizontalPadding = "2rem",
  type = "section",
  children,
}) => {
  return (
    <Wrapper
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      as={type} // what kind element? Default is 'section'
    >
      {children}
    </Wrapper>
  );
};

export default Container;
