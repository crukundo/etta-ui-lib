import styled from '@emotion/native';
import { StyleProps } from '@ettawallet/react-native-kit';
import { ArtBoardProps } from './ArtBoard';

export const StyledBoard = styled.View<ArtBoardProps & Partial<StyleProps>>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.miscellaneous.bodyColor};
  padding: ${({ theme }) => theme.spacing.centi};
  flex: 1;
`;
