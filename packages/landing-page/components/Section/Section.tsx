import { Container, ContainerProps, DividerProps } from '@mantine/core';
import { GhostDivider } from '../GhostDivider/GhostDivider';

export type SectionProps = {
  id?: string;
  ariaLabel?: string;
  children: React.ReactNode;
  dividerProps?: DividerProps;
  containerProps?: ContainerProps;
  noDivider?: boolean;
};

export const Section = (props: SectionProps) => {
  return (
    <Container
      maw="80rem"
      pt={{ base: 0, sm: 'xl' }}
      pb={{ base: 0, sm: 'xl' }}
      component="section"
      id={props.id}
      aria-label={props.ariaLabel}
      {...props.containerProps}
    >
      {!props.noDivider ? (
        <GhostDivider
          dividerProps={{
            my: props.dividerProps?.my || { base: 100, md: 'xl' },
            ...props.dividerProps,
          }}
        />
      ) : null}
      {props.children}
    </Container>
  );
};
