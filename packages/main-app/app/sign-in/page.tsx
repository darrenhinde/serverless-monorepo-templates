import { SignInCard } from "@/components/SignInCard/SignInCard";
import { Center, Flex } from "@mantine/core";
import { providers as SigninProviders } from "@/auth/auth-providers";
import { ReactNode } from "react";
import {
  IconBrandMeta,
  IconBrandReddit,
  IconBrandX,
} from "@tabler/icons-react";

const providers = SigninProviders.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

const oAuthProviders = providers
  .filter((provider) => provider.id !== "http-email")
  .map(({ id, name }) => {
    let icon: ReactNode = null;
    let imgSource;
    let label = `Sign up with ${name}`;

    switch (id) {
      case "google": {
        label = "Sign In with Google";
        imgSource = "/google_sign_in_button.webp";
        break;
      }
      case "slack": {
        label = "Continue with Slack";
        imgSource = "/slack_logo.png";
        break;
      }
      case "facebook": {
        icon = <IconBrandMeta size={20} color='#1877F2' />;
        label = "Continue with Facebook";
        break;
      }
      case "linkedin": {
        imgSource = "/linkedin_logo.webp";
        label = "Sign in with LinkedIn";
        break;
      }
      case "twitter": {
        icon = <IconBrandX size={20} color='#fff' />;
        label = "Log in with X";
        break;
      }
      case "reddit": {
        icon = <IconBrandReddit size={20} color='#FC4401' />;
        label = "Sign in with Reddit";
        break;
      }
    }

    return { id, name, icon, label, imgSource };
  });

const magicLinkProvider = providers.find(
  (provider) => provider.id === "http-email"
);

export default function SignIn() {
  return (
    <Center h='100vh'>
      <Flex gap='sm' direction='column' align='center'>
        <SignInCard
          oAuthProviders={oAuthProviders}
          magicLinkProvider={magicLinkProvider}
        />
      </Flex>
    </Center>
  );
}
