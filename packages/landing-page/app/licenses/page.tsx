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

      <Title mb="lg">Licenses</Title>

      <Text c="dimmed" component="div">
        <p>In a nutshell: Build unlimited projects</p>
        <p>
          This License Agreement ("Agreement") is entered into between YOUR_NAME, whose contact
          information is help@your-website.com, and you, the user ("Licensee"), regarding the use of
          the YOUR_PRODUCT (the "Product") available at https://your-website.com/ (the "Website").
          By downloading, accessing, or using the Product, Licensee agrees to be bound by the terms
          and conditions of this Agreement.
        </p>
        <p>
          <strong>1. Grant of License</strong>
          <br />
          <strong>1.1 Personal License</strong>
          <br />
          Subject to the terms and conditions of this Agreement, YOUR_NAME grants Licensee a
          non-exclusive, non-transferable, and non-sublicensable Personal License to use the
          YOUR_PRODUCT for the following purposes:
          <br />
          - Create unlimited projects.
          <br />- Build and develop applications or websites for personal use or commercial use by
          the individual Licensee.
        </p>
        <p>
          <strong>1.2 Team License</strong>
          <br />
          Subject to the terms and conditions of this Agreement, YOUR_NAME grants Licensee a
          non-exclusive, non-transferable, and non-sublicensable Team License to use the YOUR_APP
          coding for the following purposes:
          <br />
          - Create unlimited projects.
          <br />
          - Build and develop applications or websites as part of a team.
          <br />- Share the code with other members of the team.
        </p>
        <p>
          <strong>2. Restrictions</strong>
          <br />
          Licensee shall not:
          <br />
          - Modify, adapt, reverse engineer, decompile, disassemble, or create derivative works
          based on the YOUR_APP.
          <br />
          - Remove, alter, or obscure any copyright, trademark, or other proprietary notices from
          the YOUR_APP.
          <br />
          - Use the YOUR_APP in any way that violates applicable laws, regulations, or third-party
          rights.
          <br />- Sub-license, rent, lease, or transfer the YOUR_APP or any rights granted under
          this Agreement.
        </p>
        <p>
          <strong>3. Ownership and Intellectual Property</strong>
          <br />
          YOUR_NAME retains all ownership and intellectual property rights in and to the YOUR_APP.
          This Agreement does not grant Licensee any ownership rights in the YOUR_APP.
        </p>
        <p>
          <strong>4. Warranty and Disclaimer</strong>
          <br />
          THE YOUR_APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED,
          INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, OR NONINFRINGEMENT. THIS DISCLAIMER DOES NOT AFFECT ANY STATUTORY
          RIGHTS THAT MAY NOT BE WAIVED UNDER APPLICABLE LAW.
        </p>
        <p>
          <strong>5. Limitation of Liability</strong>
          <br />
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOUR_APP SHALL NOT BE LIABLE FOR ANY
          DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF
          OR RELATING TO THE USE OR INABILITY TO USE THE YOUR_APP , EVEN IF YOUR_APP HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          <strong>6. Governing Law and Jurisdiction</strong>
          <br />
          This Agreement shall be governed by and construed in accordance with the laws of Germany,
          without regard to its conflict of law principles. Any dispute arising out of or in
          connection with this Agreement shall be subject to the exclusive jurisdiction of the
          courts located in Germany.
        </p>
        <p>
          <strong>7. Termination</strong>
          <br />
          This Agreement is effective until terminated. YOUR_NAME may terminate this Agreement at
          any time if Licensee breaches any of its terms. Upon termination, Licensee shall cease all
          use of the YOUR_APP and delete all copies.
        </p>
        <p>
          <strong>8. Data Protection</strong>
          <br />
          Any personal data collected in connection with this Agreement will be processed in
          accordance with applicable data protection laws, including the GDPR. For more details,
          please refer to our Privacy Policy available on the Website.
        </p>
        <p>
          <strong>9. Entire Agreement</strong>
          <br />
          This Agreement constitutes the entire agreement between Licensee and YOUR_NAME concerning
          the subject matter herein and supersedes all prior or contemporaneous agreements,
          representations, warranties, and understandings.
        </p>
        <p>
          Last updated: 2024-07-27
          <br />
          YOUR_NAME Contact Information: help@your-website.com
        </p>
      </Text>
    </Container>
  );
}
