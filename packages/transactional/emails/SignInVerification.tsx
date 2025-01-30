import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Button } from "@react-email/button";
import { Preview } from "@react-email/preview";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import * as React from "react";

interface SignInVerificationProps {
  url: string;
}
export const SignInVerification = ({ url }: SignInVerificationProps) => {
  return (
    <Html>
      <Head />
      <Preview>Sign in to Product!</Preview>
      <Body
        style={{
          backgroundColor: "white",
          margin: "auto",
          fontFamily: "sans-serif",
          padding: "0 8px",
        }}
      >
        <Container
          style={{
            border: "1px solid #eaeaea",
            borderRadius: "4px",
            margin: "40px auto",
            padding: "20px",
            maxWidth: "465px",
          }}
        >
          <Section style={{ marginTop: "32px" }}>
            <Img
              src={`https://maxim-nextsystems-bucketsta-publicassetsbucketa0ca71-srpsvamoyrez.s3.eu-central-1.amazonaws.com/logo_text_black.png`}
              alt="Logo"
              width="200"
              style={{ margin: "0 auto" }}
            />
          </Section>

          <Heading
            style={{
              color: "black",
              fontSize: "24px",
              fontWeight: "normal",
              textAlign: "center",
              padding: 0,
              margin: "30px 0",
            }}
          >
            Sign in to Product!
          </Heading>

          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            Please click the button below to proceed with your sign in.
          </Text>

          <Button
            href={url}
            style={{
              backgroundColor: "#f2ff02",
              borderRadius: "3px",
              fontWeight: "600",
              color: "black",
              fontSize: "15px",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              padding: "11px 23px",
              margin: "0 auto",
            }}
          >
            Sign in
          </Button>

          <Text
            style={{
              textAlign: "center",
              color: "#888888",
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            Note that this link will expire in 24 hours.
          </Text>
        </Container>

        <Container style={{ marginTop: "80px" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#888888",
              marginBottom: "45px",
            }}
          >
            If you did not request this email you can safely ignore it.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default SignInVerification;
