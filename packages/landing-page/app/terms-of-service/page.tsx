import { Button, Container, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function Licenses() {
  return (
    <Container size="40rem" p="xl">
      <Button
        mb="xl"
        p={0}
        variant="transparent"
        component={Link}
        href="/"
        leftSection={<IconArrowLeft />}
      >
        Go back
      </Button>

      <Title mb="lg">Terms of Service</Title>

      <Text c="dimmed" component="div">
        <p>
          <strong>1. Introduction</strong>
          <br />
          By using YOUR_PRODUCT you confirm your acceptance of, and agree to be bound by, these
          terms and conditions.
        </p>
        <p>
          <strong>2. Agreement to Terms and Conditions</strong>
          <br />
          This Agreement takes effect on the date on which you first use the YOUR_PRODUCT
          application.
        </p>
        <p>
          <strong>3. Unlimited Access Software License with Termination Rights</strong>
          <br />
          The YOUR_PRODUCT Software License facilitates the acquisition of YOUR_PRODUCT software
          through a single purchase, granting users unrestricted and perpetual access to its
          comprehensive functionalities. Tailored for independent creators, entrepreneurs, and small
          businesses, YOUR_PRODUCT empowers users to create compelling web pages and online
          portfolios.
          <br />
          This license entails a straightforward and flexible arrangement, exempting users from
          recurring fees or subscriptions. However, it is important to acknowledge that the licensor
          retains the right to terminate the license without conditions or prerequisites. This
          termination provision enables the licensor to exercise control over software distribution
          and utilization.
          <br />
          Opting for the YOUR_PRODUCT Software License enables users to enjoy the benefits of the
          software while recognizing the licensor's unrestricted termination rights, which provide
          adaptability and address potential unforeseen circumstances.
        </p>
        <p>
          <strong>4. Refunds</strong>
          <br />
          Due to the nature of digital products, the YOUR_PRODUCT boilerplate cannot be refunded or
          exchanged once access is granted, unless required by EU consumer protection laws.
        </p>
        <p>
          <strong>5. Disclaimer</strong>
          <br />
          It is not warranted that YOUR_PRODUCT will meet your requirements or that its operation
          will be uninterrupted or error-free. All express and implied warranties or conditions not
          stated in this Agreement (including without limitation, loss of profits, loss or
          corruption of data, business interruption, or loss of contracts), so far as such exclusion
          or disclaimer is permitted under applicable law, are excluded and expressly disclaimed.
          This Agreement does not affect your statutory rights.
        </p>
        <p>
          <strong>6. Warranties and Limitation of Liability</strong>
          <br />
          YOUR_PRODUCT does not give any warranty, guarantee, or other term as to the quality,
          fitness for purpose, or otherwise of the software. YOUR_PRODUCT shall not be liable to you
          by reason of any representation (unless fraudulent), or any implied warranty, condition,
          or other term, or any duty at common law, for any loss of profit or any indirect, special,
          or consequential loss, damage, costs, expenses, or other claims (whether caused by
          YOUR_PRODUCT's negligence or the negligence of its servants or agents or otherwise) which
          arise out of or in connection with the provision of any goods or services by YOUR_PRODUCT.
          YOUR_PRODUCT shall not be liable or deemed to be in breach of contract by reason of any
          delay in performing, or failure to perform, any of its obligations if the delay or failure
          was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in
          this Agreement, in the event that YOUR_PRODUCT is deemed liable to you for breach of this
          Agreement, you agree that YOUR_PRODUCT's liability is limited to the amount actually paid
          by you for your services or software, which amount is calculated in reliance upon this
          clause. You hereby release YOUR_PRODUCT from any and all obligations, liabilities, and
          claims in excess of this limitation.
        </p>
        <p>
          <strong>7. Responsibilities</strong>
          <br />
          YOUR_PRODUCT is not responsible for what the user does with the user-generated content.
        </p>
        <p>
          <strong>8. Price Adjustments</strong>
          <br />
          As we continue to improve YOUR_PRODUCT and expand our offerings, the price may increase.
          The discount is provided to help customers secure the current price without being
          surprised by future increases.
        </p>
        <p>
          <strong>9. General Terms and Law</strong>
          <br />
          This Agreement is governed by the laws of Germany. You acknowledge that no joint venture,
          partnership, employment, or agency relationship exists between you and YOUR_PRODUCT as a
          result of your use of these services. You agree not to hold yourself out as a
          representative, agent, or employee of YOUR_PRODUCT. You agree that YOUR_PRODUCT will not
          be liable by reason of any representation, act, or omission to act by you.
        </p>
        <p>Last updated: 2024-07-27</p>
      </Text>
    </Container>
  );
}
