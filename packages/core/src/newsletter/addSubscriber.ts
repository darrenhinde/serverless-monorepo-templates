/**
 * @description
 * Implement a call to a Newsletter service here
 */
export const addSubscriber = async ({
  email,
  name,
}: {
  email: string;
  name?: string;
}) => {
  return { name, email };
};
