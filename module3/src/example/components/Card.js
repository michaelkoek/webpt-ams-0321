import React from "react";
import styled from "styled-components";

const Card = ({ priority = 0, date, description, reporter }) => {
  const prioList = [
    {
      title: "low",
      color: `green`,
    },
    {
      title: "medium",
      color: `orange`,
    },
    {
      title: "high",
      color: `tomato`,
    },
  ];

  return (
    <CardContainer>
      <Top>
        <Prio prioType={prioList[priority].color}>
          {prioList[priority].title}
        </Prio>
        <span>{date}date</span>
      </Top>
      <Reporter>report: {reporter}reporter</Reporter>
      <Description>{description}description</Description>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  border-radius: 5px;
  padding: 0.8rem;
  background-color: #f90;
  border: 1px solid black;
  width: 100%;
  box-shadow: 0px 2px 3px 1px #5149496e;
  transition: transform 0.15s ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Prio = styled.span`
  position: relative;
  padding-left: 25px;
  &::before {
    content: "";
    border: 1px solid black;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background-color: green;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    box-shadow: 0px 2px 3px 1px #5149496e;
  }
`;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }
`;

const Reporter = styled.span`
  display: block;
`;

const Description = styled.p`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
`;

export default Card;
