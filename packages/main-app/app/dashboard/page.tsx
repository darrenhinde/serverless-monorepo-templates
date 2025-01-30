import { auth } from "@/auth/auth";
import { ProgressCard } from "@/components/ProgressCard/ProgressCard";
import { RingCard } from "@/components/RingCard/RingCard";
import {
  Container,
  Grid,
  GridCol,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) return redirect("/sign-in");

  const { name, email } = session.user || {};

  return (
    <Container size='sm' pt='xl'>
      <Title>Welcome back {name || email}</Title>
      <Text c='dimmed'>
        This dashboard gives you a quick overview of your SaaS
      </Text>

      <SimpleGrid mt='md' cols={{ base: 1, sm: 1 }} spacing='md'>
        <ProgressCard
          label='Daily goal'
          progress={"$400 / $500"}
          withIndicator
          value={86}
          progressProps={{
            color: "gray.6",
            animated: true,
            striped: true,
          }}
        />

        <ProgressCard
          label='Monthly goal'
          progress={"$6.653 / $10.000"}
          value={66.53}
          delay={50}
          progressProps={{
            color: "gray.3",
          }}
        />

        <Grid gutter='md'>
          <GridCol span={6}>
            <RingCard
              label='Page views'
              stats='456,578'
              progress={90}
              delay={100}
              color='green'
              arrow='up'
            />
          </GridCol>
          <GridCol span={6}>
            <RingCard
              label='Revenue'
              stats='456,578'
              progress={65}
              delay={100}
              color='white'
              arrow='down'
            />
          </GridCol>
          <GridCol span={6}>
            <RingCard
              label='Conversion'
              stats='16.5%'
              progress={45}
              delay={200}
              color='white'
              arrow='up'
            />
          </GridCol>
          <GridCol span={6}>
            <RingCard
              label='Duration'
              stats='12.5s'
              progress={20}
              delay={200}
              color='red'
              arrow='down'
            />
          </GridCol>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
