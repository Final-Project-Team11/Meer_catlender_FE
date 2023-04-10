import styled from 'styled-components';
import { TodoBoxStProps } from './interfaces';

export const StTodoBlock = styled.div`
  width: 100%;
  height: 30px;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StTodoAreaBlock = styled.div<TodoBoxStProps>`
  display: flex;
  align-items: center;

  font-size: 15px;
  color: ${({ isDone }) => (isDone ? 'green' : 'red')};
`;

export const StTodoInput = styled.input`
  border: 0.5px solid green;
  font-size: 16px;
`;
