import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { Resource } from "sst";

export type SendEmailArgs = {
  to: string;
  subject: string;
  body: string;
  from?: string;
};

/**
 * @description
 * Sends an email using Amazon Simple Email Service (SES).
 *
 * AWS SES is a cloud-based email sending service that provides a scalable and cost-effective way to send emails.
 */
export const sendEmail = async (args: SendEmailArgs) => {
  const client = new SESv2Client();

  const from =
    args.from ||
    `${Resource.TRANSACTIONAL_MAIL_LOCAL_PART.value}@${Resource.TransactionalEmailIdentity.sender}`;

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [args.to],
    },

    Content: {
      Simple: {
        Subject: {
          Data: args.subject,
        },
        Body: {
          Html: {
            Data: args.body,
          },
        },
      },
    },

    FromEmailAddress: from,
  });

  try {
    const response = await client.send(command);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
