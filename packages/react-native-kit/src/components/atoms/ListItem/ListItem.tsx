import React, { ReactElement } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { TouchableRipple, TouchableRippleProps } from '@ettawallet/react-core';
import { ListItem as ListItemComponent } from './styles';

export type ListItemFeedback = 'ripple' | 'selection';

export interface ListItemProps {
  /**
   * The children list item elements
   */
  children: ReactElement;
  /**
   * Controls the element feedback type `ripple` | `selection`
   * @Default ripple
   */
  feedback?: ListItemFeedback;
  /**
   * Controls the element selected styles when feedback type is `selection`
   * @Default false
   */
  selected?: boolean;
  /**
   * onPress event handler
   */
  onPress?(): void;
}

type ListWrapper = TouchableRippleProps & Pick<ListItemProps, 'feedback'>;

const ListWrapper = ({
  onPress,
  children,
  feedback,
  ...props
}: ListWrapper) => {
  if (!onPress) {
    return <View>{children}</View>;
  }

  if (feedback === 'ripple') {
    return (
      <TouchableRipple onPress={onPress} {...props}>
        {children}
      </TouchableRipple>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export const ListItem = ({
  children,
  onPress,
  feedback = 'ripple',
  ...rest
}: ListItemProps) => (
  <ListWrapper
    color="highlight"
    hideOverflow
    onPress={onPress}
    feedback={feedback}
  >
    <ListItemComponent onPress={onPress} {...rest}>
      {children}
    </ListItemComponent>
  </ListWrapper>
);

export default ListItem;
