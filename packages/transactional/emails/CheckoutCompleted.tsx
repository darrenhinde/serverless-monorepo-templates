import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Img,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface CheckoutCompletedProps {
  customerName: string;
}

export const CheckoutCompleted = ({ customerName }: CheckoutCompletedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to YOUR PRODUCT!</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://maxim-nextsystems-bucketsta-publicassetsbucketa0ca71-srpsvamoyrez.s3.eu-central-1.amazonaws.com/logo_text_black.png`}
                alt="YOUR_PRODUCT Logo"
                width="200px"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to YOUR_PRODUCT!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {customerName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for purchasing YOUR PRODUCT: Your product description
              <br />
              <br />
              Your payment has been successfully processed and everything is set
              to finally get started with your SaaS!
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Next Steps:</strong>

              <ol>
                <li className="text-black text-[14px] leading-[24px] mb-3">
                  Describe the next steps your customer should take here.
                  Likeley you want to send them to your app or a thank you page.
                </li>
              </ol>
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section className="text-center mt-45">
              <a
                className="my-0 mx-auto"
                href="https://discord.gg/your_discord_invite"
                style={{
                  color: "#5865F2",
                  textDecoration: "none",
                  padding: "12px 18px",
                  display: "block",
                }}
              >
                Help me build a Discord community
              </a>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">
              If you have any questions or something is not working, feel free
              to contact me at your@email.com
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CheckoutCompleted;
