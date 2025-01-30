import { Text, List, ListItem } from '@mantine/core';

export const faqItems = [
  {
    value: 'question-1',
    question: 'Come up with an obvious question',
    answer: (
      <>
        <Text c="dimmed">
          And then explain it thorougly here
          <br />
        </Text>
        <List spacing="sm" c="dimmed" mt="xs">
          <ListItem>
            <Text c="inherit">Please keep using bullet points.</Text>
          </ListItem>
          <ListItem>
            <Text c="inherit">No one likes long texts.</Text>
          </ListItem>
        </List>
      </>
    ),
  },
  {
    value: 'question-2',
    question: 'Come up with another obvious question',
    answer: (
      <>
        <Text c="dimmed">
          And then explain it thorougly here
          <br />
        </Text>
        <List spacing="sm" c="dimmed" mt="xs">
          <ListItem>
            <Text c="inherit">Please keep using bullet points.</Text>
          </ListItem>
          <ListItem>
            <Text c="inherit">No one likes long texts.</Text>
          </ListItem>
        </List>
      </>
    ),
  },
  {
    value: 'question-3',
    question: 'You know how many people love questioning you',
    answer: (
      <>
        <Text c="dimmed">
          And then explain it thorougly here
          <br />
        </Text>
        <List spacing="sm" c="dimmed" mt="xs">
          <ListItem>
            <Text c="inherit">Please keep using bullet points.</Text>
          </ListItem>
          <ListItem>
            <Text c="inherit">No one likes long texts.</Text>
          </ListItem>
        </List>
      </>
    ),
  },
  {
    value: 'question-4',
    question: 'So please add the most relevant questions here',
    answer: (
      <>
        <Text c="dimmed">
          And then explain it thorougly here
          <br />
        </Text>
        <List spacing="sm" c="dimmed" mt="xs">
          <ListItem>
            <Text c="inherit">Please keep using bullet points.</Text>
          </ListItem>
          <ListItem>
            <Text c="inherit">No one likes long texts.</Text>
          </ListItem>
        </List>
      </>
    ),
  },
];
