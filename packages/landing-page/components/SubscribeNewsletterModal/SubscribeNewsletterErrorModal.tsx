import { Button, Modal, ModalProps, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

export type SubscribeNewsletterErrorModalProps = ModalProps & {
  onTryAgain: () => void;
};

export const SubscribeNewsletterErrorModal = (props: SubscribeNewsletterErrorModalProps) => {
  return (
    <Modal {...props} title="Oops, that didn't work">
      <Title>Seems like I messed up</Title>

      <Text fz="sm" c="dimmed" mt={5}>
        It seems like I could not subscribe you to the mailing list for some reason. If you simply
        try again, it should hopefully work.
      </Text>

      <Button mt="lg" fullWidth onClick={props.onTryAgain} leftSection={<IconArrowLeft />}>
        Try again
      </Button>
    </Modal>
  );
};
