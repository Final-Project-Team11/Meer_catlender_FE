import styled from 'styled-components';
import { UlStyleProps } from './interfaces';

const StContainer = styled.div``;

const StLiBlock = styled.li`
  padding: 5px 0 5px 5px;
  display: flex;
  gap: 10px;

  &:hover {
    background-color: #3595f6;
    color: white;
  }
`;

const StProfileBlock = styled.div`
  display: flex;
  gap: 5px;
`;
const StImageBlock = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: tomato;
`;

const StTagBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  margin: 5px 0 5px 5px;
  border-radius: 5px;
  padding: 0.3em 0.5em;
  font-weight: bold;
  gap: 10px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    background-color: #d3e2e2;
  }
`;

const StDeleteBlock = styled.div`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #f17272;
  }
`;

const StInputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  line-height: 20px;
  min-width: 600px;
  max-width: 700px;
  border: 1px solid #ddd;
`;

const StTeamMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 5px 0;
  background-color: #00ce8d;
  width: 70px;
  height: 25px;
  font-size: 0.9em;
  font-weight: 600;
  font-style: italic;
  color: white;
`;

const StInput = styled.input`
  flex-grow: 1;
  font-size: 20px;
  outline: none;
  border: none;
  box-sizing: border-box;

  &:disabled {
    background-color: white;
  }
`;

const StUlBlock = styled.ul<UlStyleProps>`
  position: absolute;
  z-index: 100;
  background-color: white;
  border: 1px solid black;
  border-top: none;
  ${({ pos }) =>
    `top : ${pos.top + pos.height}px; left :${pos.left}px; width:${pos.width - 1}px;`}
`;

export {
  StContainer,
  StLiBlock,
  StProfileBlock,
  StImageBlock,
  StTagBlock,
  StDeleteBlock,
  StInputBlock,
  StTeamMark,
  StInput,
  StUlBlock,
};
