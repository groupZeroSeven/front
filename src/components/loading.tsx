/* eslint-disable @next/next/no-img-element */

import { StyledLoading } from '../styles/loading';

export const Loading = () => {
  return (
    <StyledLoading>
      <img src="/image/loading.gif" alt="Loading" />
    </StyledLoading>
  );
};
