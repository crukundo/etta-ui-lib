import styled from '@emotion/native';
import { RFValueStr, StyleProps } from '@ettawallet/react-core';
import { ListItemProps } from './ListItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const backgroundStyles = ({ selected }: StyleProps & ListItemProps) =>
  selected ? `${({ theme }) => theme.color.primary.neutral1}` : 'transparent';

export const ListItem = styled.View<ListItemProps & Partial<StyleProps>>`
  background: ${backgroundStyles};
  min-height: ${RFValueStr('48px')};
`;
