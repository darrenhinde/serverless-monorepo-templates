"use client";

import {
  Card,
  Button,
  CardSection,
  Center,
  Title,
  Flex,
  Divider,
  TextInput,
  Group,
} from "@mantine/core";
import classes from "./SignInCard.module.css";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { signIn } from "next-auth/react";
import { zodResolver } from "mantine-form-zod-resolver";
import { useForm } from "@mantine/form";
import { SignInSchema } from "@nextsystems/schemas/SignInSchema";

export function SignInCard(props: {
  oAuthProviders: {
    id: string;
    name: string;
    icon: ReactNode;
    label: string;
    imgSource?: string;
  }[];
  magicLinkProvider?: any;
}) {
  const [loading, setLoading] = useState<string | null>(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: zodResolver(SignInSchema),
  });

  return (
    <Card
      maw="24rem"
      miw="24rem"
      withBorder
      radius="md"
      p="md"
      shadow="xl"
      className={classes.card}
    >
      <CardSection p="md">
        <Center>
          <Image
            src="/logo_text_white.png"
            alt="logo"
            height={50}
            width={170}
          />
        </Center>
      </CardSection>

      <CardSection>
        <Title c="dimmed" order={2} fz="xl" fw={500} ta="center">
          Sign In to Product
        </Title>
      </CardSection>

      <CardSection className={classes.section} mt="lg">
        <Flex gap="md" direction="column">
          {props.oAuthProviders.map((provider) => (
            <Button
              key={provider.id}
              loading={loading === provider.id}
              onClick={async () => {
                try {
                  setLoading(provider.id);
                  await signIn(provider.id, {
                    redirectTo: "/dashboard",
                    redirect: true,
                    callbackUrl: "/dashboard",
                  });
                } catch (err) {
                  console.error(err);
                } finally {
                  setLoading(null);
                }
              }}
              size="md"
              variant="outline"
              color="gray.4"
              fw={500}
              fullWidth
              leftSection={
                provider.imgSource ? (
                  <Image
                    src={provider.imgSource}
                    alt={provider.label}
                    width={20}
                    height={20}
                  />
                ) : (
                  provider.icon
                )
              }
            >
              {provider.label}
            </Button>
          ))}

          {props.magicLinkProvider ? (
            <form
              key={props.magicLinkProvider.id}
              onSubmit={form.onSubmit(async (data) => {
                try {
                  setLoading("http-email");
                  await signIn("http-email", {
                    email: data.email,
                    redirect: true,
                    redirectTo: "/sign-in-email-sent",
                    callbackUrl: "/dashboard",
                  });
                } catch (err) {
                  console.error(err);
                } finally {
                  setLoading(null);
                }
              })}
            >
              <Divider label="or" />

              <TextInput
                size="md"
                name="email"
                label="Email"
                placeholder="your@email.com"
                type="email"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />

              <Group mt="lg">
                <Button
                  loading={loading === "http-email"}
                  size="md"
                  type="submit"
                  radius="md"
                  style={{ flex: 1 }}
                >
                  Send sign in mail
                </Button>
              </Group>
            </form>
          ) : null}
        </Flex>
      </CardSection>
    </Card>
  );
}
