import { withAuthenticator } from '@aws-amplify/ui-react';

export const withAuth = (handler) => {
  return withAuthenticator(handler);
};