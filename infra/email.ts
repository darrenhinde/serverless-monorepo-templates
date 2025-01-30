/**
 * This file is responsible for setting up email sending capabilities for the application.
 *
 * We are using AWS Simple Email Service (SES) for that, which provides an extremely reliable cost-effective and scalable email sending service.
 * This will save us tons of money compared to using a third-party email service like Mailgun or Sendgrid in the long-run.
 *
 * Below we create a so-called SES email identity and an SES domain identity, and add DNS records for SES domain identity verification.
 */

import { DOMAIN } from "./secrets";

// Add a stage suffix to the domain and email address to allow for multi-environment deployments
const stageDomain = DOMAIN.value.apply((domain) => {
  if ($app.stage === "production") return domain;
  return `${$app.stage}.${domain}`;
});

/**
 * This allows us to send emails from our own domain using AWS SES
 */
export const emailIdentity = new sst.aws.Email("TransactionalEmailIdentity", {
  sender: stageDomain,
  dns: sst.aws.dns(),
  dmarc: "v=DMARC1; p=quarantine; adkim=r; aspf=r;",
});

// BELOW IS AN EXAMPLE IMPLEMENTATION OF CONNECTING TO AN EMAIL NEWSLETTER SERVICE AND AN EMAIL FORWARDING SERVICE

/**
 * Find or creates a "hosted zone" on your domain that will be used for sending emails
 * A hosted zone is a container for DNS records in AWS Route 53
 * It's needed to manage DNS settings for your domain, including SES verification records
 *
 * Make sure you have already purchased a domain on Route53 so  it will be passed in here.
 */
// const hostedZone = DOMAIN.value.apply((domain) =>
//   aws.route53
//     .getZone({ name: domain })
//     .then((zone) => zone.id)
//     .catch(() => new aws.route53.Zone("HostedZone", { name: domain }).id)
// );

/**
 * Add Records to allow mail to be forwarded by ForwardEmail to the specified email address
 */
// $resolve([
//   stageDomain,
//   FORWARD_EMAIL_MX_1.value,
//   FORWARD_EMAIL_MX_2.value,
//   hostedZone,
// ]).apply(([domain, mx1, mx2, zoneId]) => {
//   new aws.route53.Record("ForwardEmailMXRecords", {
//     zoneId,
//     name: domain,
//     type: "MX",
//     ttl: 1800,
//     records: [`10 ${mx1}`, `10 ${mx2}`],
//   });
// });

/**
 * Add necessary TXT and CNAME records for forwardemail.net as well as MailerLite
 */
// $resolve([
//   stageDomain,
//   FORWARD_EMAIL_TO.value,
//   MAILERLITE_TXT_VALUE.value,
//   hostedZone,
// ]).apply(
//   ([domain, email, mailerliteTxtValue, zoneId]) =>
//     new aws.route53.Record("EmailTXTRecord", {
//       zoneId,
//       name: domain,
//       type: "TXT",
//       ttl: 3600,
//       records: [
//         `forward-email=${email}`,
//         mailerliteTxtValue,
//         "v=spf1 include:amazonses.com ~all",
//         `stage=${$app.stage}`,
//       ],
//     })
// );

// $resolve([
//   stageDomain,
//   MAILERLITE_CNAME_HOST.value,
//   MAILERLITE_CNAME_VALUE.value,
//   hostedZone,
// ]).apply(
//   ([domain, host, value, zoneId]) =>
//     new aws.route53.Record("MailerliteCNAMERecord", {
//       zoneId,
//       name: `${host}.${domain}`,
//       type: "CNAME",
//       ttl: 1800,
//       records: [value],
//     })
// );
