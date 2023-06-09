import styled, { css } from 'styled-components';
import { COLOR } from '../../styles/colors';
import { TitleProps } from './interfaces';

export const StWrapperBlock = styled.div`
  width: 250px;
  height: 635px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 35px;
  box-sizing: border-box;

  box-shadow: rgba(236, 241, 248, 0.4) 4px 0px 9px -2px;
`;

export const StFeedBlock = styled.div`
  width: 100%;
  height: 600px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StFeedTitleBlock = styled.div`
  width: 100%;
  height: fit-content;

  box-sizing: border-box;

  display: flex;
  justify-content: center;

  gap: 127px;
`;

export const StPlusSpan = styled.span<TitleProps>`
  font-size: 20px;
  ${({ tab }) =>
    tab === false
      ? css`
          color: ${COLOR.SCHEDULE_BLUE};
        `
      : css`
          color: ${COLOR.VACATION_RED};
        `};
  cursor: pointer;
`;

export const StFeedTitleH1 = styled.h1<TitleProps>`
  font-size: 30px;
  font-weight: 900;
  color: ${COLOR.PAGE_BLUE};

  ${({ tab }) =>
    tab === false
      ? css`
          color: ${COLOR.SCHEDULE_BLUE};
        `
      : css`
          color: ${COLOR.VACATION_RED};
        `};
`;

export const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
