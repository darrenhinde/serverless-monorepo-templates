import { Button, Container, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function Imprint() {
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

      <Title mb="lg">Privacy Policy</Title>

      <Text c="dimmed" component="div">
        <p>
          <strong>1. Introduction</strong>
          <br />
          In the following, I provide information about the collection of personal data when using:
          <br />
          - my website your-website.com
          <br />
          - my profiles in social media.
          <br />
          Personal data is any data that can be related to a specific natural person, such as their
          name or IP address.
        </p>
        <p>
          <strong>1.1. Contact Details</strong>
          <br />
          The controller within the meaning of Art. 4 para. 7 EU General Data Protection Regulation
          (GDPR) is YOUR_NAME, YOUR_ADDRESS, YOUR_COUNTRY, email:{' '}
          <a href="mailto:help@your-website.com">help@your-website.com</a>.
        </p>
        <p>
          <strong>1.2. Scope of Data Processing, Processing Purposes, and Legal Bases</strong>
          <br />
          I detail the scope of data processing, processing purposes, and legal bases below. In
          principle, the following come into consideration as the legal basis for data processing:
          <br />
          - Art. 6 para. 1 s. 1 lit. a GDPR serves as my legal basis for processing operations for
          which I obtain consent.
          <br />
          - Art. 6 para. 1 s. 1 lit. b GDPR is the legal basis insofar as the processing of personal
          data is necessary for the performance of a contract, e.g., if a site visitor purchases a
          product from us or I perform a service for them. This legal basis also applies to
          processing that is necessary for pre-contractual measures, such as in the case of
          inquiries about my products or services.
          <br />
          - Art. 6 para. 1 s. 1 lit. c GDPR applies if I fulfill a legal obligation by processing
          personal data, as may be the case, for example, in tax law.
          <br />- Art. 6 para. 1 s. 1 lit. f GDPR serves as the legal basis when I can rely on
          legitimate interests to process personal data, e.g., for cookies that are necessary for
          the technical operation of my website.
        </p>
        <p>
          <strong>1.3. Data Processing Outside the EEA</strong>
          <br />
          Insofar as I transfer data to service providers or other third parties outside the EEA,
          the security of the data during the transfer is guaranteed by adequacy decisions of the EU
          Commission, insofar as they exist (e.g., for Great Britain, Canada, and Israel) (Art. 45
          para. 3 GDPR).
          <br />
          If no adequacy decision exists (e.g., for the USA), the legal basis for the data transfer
          are usually, i.e., unless I indicate otherwise, standard contractual clauses. These are a
          set of rules adopted by the EU Commission and are part of the contract with the respective
          third party. According to Art. 46 para. 2 lit. b GDPR, they ensure the security of the
          data transfer. Many of the providers have given contractual guarantees that go beyond the
          standard contractual clauses to protect the data. These include, for example, guarantees
          regarding the encryption of data or regarding an obligation on the part of the third party
          to notify data subjects if law enforcement agencies wish to access the respective data.
        </p>
        <p>
          <strong>1.4. Storage Duration</strong>
          <br />
          Unless expressly stated in this privacy policy, the data stored by us will be deleted as
          soon as they are no longer required for their intended purpose and no legal obligations to
          retain data conflict with the deletion. If the data are not deleted because they are
          required for other and legally permissible purposes, their processing is restricted, i.e.,
          the data are blocked and not processed for other purposes. This applies, for example, to
          data that must be retained for commercial or tax law reasons.
        </p>
        <p>
          <strong>1.5. Rights of Data Subjects</strong>
          <br />
          Data subjects have the following rights against us with regard to their personal data:
          <br />
          - Right of access,
          <br />
          - Right to correction or deletion,
          <br />
          - Right to limit processing,
          <br />
          - Right to object to the processing,
          <br />
          - Right to data transferability,
          <br />
          - Right to revoke a given consent at any time.
          <br />
          Data subjects also have the right to complain to a data protection supervisory authority
          about the processing of their personal data. Contact details of the data protection
          supervisory authorities are available at{' '}
          <a href="https://www.bfdi.bund.de/EN/Service/Anschriften/Laender/Laender-node.html">
            https://www.bfdi.bund.de/EN/Service/Anschriften/Laender/Laender-node.html
          </a>
          .
        </p>
        <p>
          <strong>1.6. Obligation to Provide Data</strong>
          <br />
          Within the scope of the business or other relationship, customers, prospective customers,
          or third parties need to provide us with personal data that is necessary for the
          establishment, execution, and termination of a business or other relationship or that we
          are legally obliged to collect. Without this data, I will generally have to refuse to
          conclude the contract or to provide a service or will no longer be able to perform an
          existing contract or other relationship.
          <br />
          Mandatory data are marked as such.
        </p>
        <p>
          <strong>1.7. No Automatic Decision Making in Individual Cases</strong>
          <br />
          As a matter of principle, I do not use a fully automated decision-making process in
          accordance with article 22 GDPR to establish and implement the business or other
          relationship. Should I use these procedures in individual cases, I will inform of this
          separately if this is required by law.
        </p>
        <p>
          <strong>1.8. Making Contact</strong>
          <br />
          When contacting us, e.g., by e-mail or telephone, the data provided to us (e.g., names and
          e-mail addresses) will be stored by us in order to answer questions. The legal basis for
          the processing is my legitimate interest (Art. 6 para. 1 s. 1 lit. f GDPR) to answer
          inquiries directed to us. I delete the data accruing in this context after the storage is
          no longer necessary or restrict the processing if there are legal retention obligations.
        </p>
        <p>
          <strong>1.9. Customer Surveys</strong>
          <br />
          From time to time, I conduct customer surveys to get to know my customers and their wishes
          better. In doing so, I collect the data requested in each case. It is my legitimate
          interest to get to know my customers and their wishes better, so that the legal basis for
          the associated data processing is Art. 6 para. 1 s. 1 lit. f GDPR. I delete the data when
          the results of the surveys have been evaluated.
        </p>
        <p>
          {/* <strong>2. Newsletter</strong>
          <br />
          I reserve the right to inform customers who have already used services from us or
          purchased goods from time to time by e-mail or other means electronically about my offers
          if they have not objected to this. The legal basis for this data processing is Art. 6
          para. 1 s. 1 lit. f GDPR. My legitimate interest is to conduct direct advertising (recital
          47 GDPR). Customers can object to the use of their e-mail address for advertising purposes
          at any time without incurring additional costs, for example, via the link at the end of
          each e-mail or by sending an e-mail to my above-mentioned e-mail address.
          <br />
          Interested parties have the option to subscribe to a free newsletter. I process the data
          provided during registration exclusively for sending the newsletter. Subscription takes
          place by selecting the corresponding field on my website, by ticking the corresponding
          field in a paper document, or by another clear action, whereby interested parties declare
          their consent to the processing of their data, so that the legal basis is Art. 6 para. 1
          s. 1 lit. a GDPR. Consent can be revoked at any time, e.g., by clicking the corresponding
          link in the newsletter or notifying my e-mail address given above. The processing of the
          data until revocation remains lawful even in the event of revocation.
          <br />
          Based on the consent of the recipients (Art. 6 para. 1 s. 1 lit. a GDPR), I also measure
          the opening and click-through rate of my newsletters to understand what is relevant for my
          audience.
          <br />I send newsletters with the tool MailerLite of the provider MailerLite Limited,
          Ground Floor, 71 Lower Baggot Street, Dublin 2, D02 P593, Ireland (privacy policy:{' '}
          <a href="https://www.mailerlite.com/legal/privacy-policy">
            https://www.mailerlite.com/legal/privacy-policy
          </a>
          ). The provider processes content, usage, meta/communication data, and contact data in the
          EU. */}
          {/* I send newsletters with the tool Customer.io of the provider Peaberry Software, Inc.,
          P921 SW Washington Street Suite 820, Portland, OR 97205, USA (privacy policy:{' '}
          <a href="https://customer.io/legal/privacy-policy">
            https://customer.io/legal/privacy-policy
          </a>
          ). The provider processes content, usage, meta/communication data, and contact data in the
          EU.
          <br />
          I send newsletters with the tool HubSpot of the provider HubSpot, Inc., 25 1st Street
          Cambridge, MA 0214 , USA (privacy policy:{' '}
          <a href="https://legal.hubspot.com/privacy-policy">
            https://legal.hubspot.com/privacy-policy
          </a>
          ). The provider processes content, usage, meta/communication data, and contact data in the
          EU. */}
        </p>
        <p>
          <strong>3. Data Processing on My Website</strong>
          <br />
          <strong>3.1. Informative Use of My Website</strong>
          <br />
          During the informative use of the website, i.e., when site visitors do not separately
          transmit information to us, I collect the personal data that the browser transmits to my
          server in order to ensure the stability and security of my website. This is my legitimate
          interest, so that the legal basis is Art. 6 para. 1 s. 1 lit. f GDPR.
          <br />
          These data are:
          <br />
          - IP address
          <br />
          - Date and time of the request
          <br />
          - Time zone difference to Greenwich Mean Time (GMT)
          <br />
          - Content of the request (specific page)
          <br />
          - Access status/HTTP status code
          <br />
          - Amount of data transferred in each case
          <br />
          - Website from which the request comes
          <br />
          - Browser
          <br />
          - Operating system and its interface
          <br />
          - Language and version of the browser software.
          <br />
          This data is also stored in log files. They are deleted when their storage is no longer
          necessary, at the latest after 14 days.
        </p>
        <p>
          <strong>3.2. Web Hosting and Provision of the Website</strong>
          <br />
          <p>
            My website is hosted by Amazon Web Services (AWS) and uses Amazon Route 53 for DNS
            services. The provider is Amazon Web Services, Inc., P.O. Box 81226, Seattle, WA
            98108-1226, USA. The provider processes the personal data transmitted via the website,
            e.g., content, usage, meta/communication data, or contact data, in the USA. Further
            information can be found in the provider's privacy policy at{' '}
            <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.
            <br />
            It is my legitimate interest to provide a website, so the legal basis of the described
            data processing is Art. 6 para. 1 s. 1 lit. f GDPR.
            <br />
            The security of the data transferred to a country outside the EEA is guaranteed by
            standard data protection clauses (Art. 46 para. 2 lit. c GDPR) adopted by the EU
            Commission in accordance with the examination procedure under Art. 93 para. 2 of the
            GDPR, which I have agreed to with the provider.
          </p>
          I use the content delivery network Cloudfront (Amazon AWS) for my website. The provider is
          Amazon Web Services, Inc., P.O. Box 81226 Seattle, WA 98108-1226 USA. The provider thereby
          processes the personal data transmitted via the website, e.g., content, usage,
          meta/communication data, or contact data in the USA. Further information can be found in
          the provider's privacy policy at{' '}
          <a href="https://aws.amazon.com/privacy/?nc1=f_pr">
            https://aws.amazon.com/privacy/?nc1=f_pr
          </a>
          <br />
          I have a legitimate interest in using sufficient storage and delivery capacity to ensure
          optimal data throughput even during large peak loads. Therefore, the legal basis of the
          described data processing is Art. 6 para. 1 s. 1 lit. f GDPR.
          <br />
          Legal basis of the transfer to a country outside the EEA are standard contractual clauses.
          The security of the data transferred to the third country (i.e., a country outside the
          EEA) is guaranteed by standard data protection clauses (Art. 46 para. 2 lit. c GDPR)
          adopted by the EU Commission in accordance with the examination procedure under Art. 93
          para. 2 of the GDPR, which I have agreed to with the provider.
          <br />
          {/* 
           I use the content delivery network Fastly for my website. The provider is Fastly, Inc.,
          PO Box 78266, San Francisco, CA 94107, USA. The provider thereby processes the personal
          data transmitted via the website, e.g., content, usage, meta/communication data, or
          contact data in the USA. Further information can be found in the provider's privacy policy
          at <a href="https://www.fastly.com/de/privacy/">https://www.fastly.com/de/privacy/</a>.
          <br />
          I have a legitimate interest in using sufficient storage and delivery capacity to ensure
          optimal data throughput even during large peak loads. Therefore, the legal basis of the
          described data processing is Art. 6 para. 1 s. 1 lit. f GDPR.
          <br />
          Legal basis of the transfer to a country outside the EEA are standard contractual clauses.
          The security of the data transferred to the third country (i.e., a country outside the
          EEA) is guaranteed by standard data protection clauses (Art. 46 para. 2 lit. c GDPR)
          adopted by the EU Commission in accordance with the examination procedure under Art. 93
          para. 2 of the GDPR, which I have agreed to with the provider. */}
        </p>
        <p>
          <strong>3.3. Contact Form</strong>
          <br />
          When contacting us via the contact form on my website, I store the data requested there
          and the content of the message.
          <br />
          The legal basis for the processing is my legitimate interest in answering inquiries
          directed to us. The legal basis for the processing is therefore Art. 6 para. 1 s. 1 lit. f
          GDPR.
          <br />I delete the data accruing in this context after the storage is no longer necessary
          or restrict the processing if there are legal retention obligations.
        </p>
        {/* <p>
          <strong>3.4. Vacant Positions</strong>
          <br />
          I publish positions that are vacant in my company on my website, on pages linked to the
          website, or on third-party websites.
          <br />
          The processing of the data provided as part of the application is carried out for the
          purpose of implementing the application process. Insofar as this is necessary for my
          decision to establish an employment relationship, the legal basis is Art. 88 para. GDPR in
          conjunction with Sec. 26 para. 1 of the German Data Protection Act
          (Bundesdatenschutzgesetz). I have marked the data required to carry out the application
          process accordingly or refer to them. If applicants do not provide this data, I cannot
          process the application.
          <br />
          Further data is voluntary and not required for an application. If applicants provide
          further information, the basis is their consent (Art. 6 para. 1 s. 1 lit. a GDPR).
          <br />
          I ask applicants to refrain from providing information on political opinions, religious
          beliefs, and similarly sensitive data in their CV and cover letter. They are not required
          for an application. If applicants nevertheless provide such information, I cannot prevent
          their processing as part of the processing of the resume or cover letter. Their processing
          is then also based on the consent of the applicants (Art. 9 para. 2 lit. a GDPR).
          <br />
          Finally, I process the applicants' data for further application procedures if they have
          given us their consent to do so. In this case, the legal basis is Art. 6 para. 1 s. 1 lit.
          a GDPR.
          <br />
          I pass on the applicants' data to the responsible employees in the HR department, to my
          data processors in the area of recruiting, and to the employees otherwise involved in the
          application process.
          <br />
          If I enter into an employment relationship with the applicant following the application
          process, I delete the data only after the employment relationship has ended. Otherwise,
          I delete the data no later than six months after rejecting an applicant.
          <br />
          If applicants have given us their consent to use their data for further application
          procedures as well, I will not delete their data until one year after receiving the
          application.
        </p> */}
        {/* <p>
          <strong>3.5. Booking of Appointments</strong>
          <br />
          Site visitors can book appointments with us on my website. For this purpose, I process
          metadata or communication data in addition to the data entered. I have a legitimate
          interest in offering interested parties a user-friendly option for making appointments.
          Therefore, the legal basis for data processing is Art. 6 para. 1 s. 1 lit. f GDPR. Insofar
          as I use a third-party tool for the agreement, the information on this can be found under
          "Third parties".
        </p> */}
        {/* <p>
          <strong>3.6. Single Sign-On Procedure (Google)</strong>
          <br />
          Site visitors can log in to my website using a single sign-on procedure. In doing so,
          they use the login data already created for another provider. The prerequisite is that the
          site visitor is already registered with the respective provider. When a site visitor logs
          in using a single sign-on procedure, I receive information from the provider that the
          site visitor is logged in with the provider and the provider receives information that the
          site visitor is using the single sign-on procedure on my website. Depending on the
          settings of the site visitor in their account on the provider's site, additional
          information may be provided to us by the provider. The legal basis of this agreement is
          the consent of the site visitor who logs in to my site with the account (Art. 6 para. 1
          s. 1 lit. a GDPR). The provider of the procedure is Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Ireland (privacy policy:{' '}
          <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>).
        </p> */}
        <p>
          <strong>3.7. Payment Processors</strong>
          <br />
          For the processing of payments, I use payment processors who are themselves data
          controllers within the meaning of Art. 4 No. 7 GDPR. Insofar as they receive data and
          payment data entered by us in the ordering process, I thereby fulfill the contract
          concluded with my customers (Art. 6 para. 1 s. 1 lit. b GDPR).
          <br />
          These payment processors are:
          <br />- Stripe Payments Europe, Ltd., Ireland
          <br />
          <br />
          We offer the option to process payments through the payment service provider Stripe, ℅
          Legal Process, 510 Townsend St., San Francisco, CA 94103 (Stripe). This corresponds to our
          legitimate interest in offering an efficient and secure payment method (Art. 6 para. 1
          lit. f GDPR). In this context, we transfer the following data to Stripe, as far as it is
          necessary for the fulfillment of the contract (Art. 6 para. 1 lit. b GDPR):
          <br />
          <br />
          - Cardholder's name
          <br />- Email address
          <br />- Customer number
          <br />- Order number
          <br />- Bank details
          <br />- Credit card data
          <br />- Credit card expiration date
          <br />- Credit card verification number (CVC)
          <br />- Date and time of transaction
          <br />- Transaction amount
          <br />- Provider's name
          <br />- Location
          <br />
          <br />
          The processing of the data specified in this section is neither legally nor contractually
          required. Without the transmission of your personal data, we cannot process a payment via
          Stripe. [You have the option to choose a different payment method.]
          <br />
          <br />
          Stripe assumes a dual role as both a controller and a processor in data processing
          activities. As a controller, Stripe uses your transmitted data to fulfill regulatory
          obligations. This corresponds to Stripe's legitimate interest (according to Art. 6 para. 1
          lit. f GDPR) and serves to fulfill the contract (according to Art. 6 para. 1 lit. b GDPR).
          We have no influence on this process.
          <br />
          <br />
          As a processor, Stripe functions to complete transactions within payment networks. Within
          the scope of the processing relationship, Stripe acts exclusively according to our
          instructions and has been contractually obligated to comply with data protection
          regulations in accordance with Art. 28 GDPR.
          <br />
          <br />
          Stripe has implemented compliance measures for international data transfers. These apply
          to all global activities where Stripe processes personal data of individuals in the EU.
          These measures are based on the EU Standard Contractual Clauses (SCCs).
          <br />
          <br />
          For more information on objection and removal options regarding Stripe, please visit:
          https://stripe.com/privacy-center/legal
          <br />
          <br />
          We store your data until the completion of the payment processing. This includes the
          period necessary for processing refunds, claims management, and fraud prevention. [For us,
          according to [§ 147 AO / § 257 HGB], there is a legal retention period of [X] years for
          the following documents: [ ]]
          <br />
          <br />
          Legal notices
          <br />
          Address
          <br />
          Stripe Payments Europe Limited 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02
          H210, Ireland Attention: Stripe Legal
        </p>
        <p>
          <strong>3.2. Web Hosting and Provision of the Website</strong>
          <br />
          <p>
            My website is hosted by Amazon Web Services (AWS) and uses Amazon Route 53 for DNS
            services. The provider is Amazon Web Services, Inc., P.O. Box 81226, Seattle, WA
            98108-1226, USA. The provider processes the personal data transmitted via the website,
            e.g., content, usage, meta/communication data, or contact data, in the USA. Further
            information can be found in the provider's privacy policy at{' '}
            <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.
            <br />
            It is my legitimate interest to provide a website, so the legal basis of the described
            data processing is Art. 6 para. 1 s. 1 lit. f GDPR.
            <br />
            The security of the data transferred to a country outside the EEA is guaranteed by
            standard data protection clauses (Art. 46 para. 2 lit. c GDPR) adopted by the EU
            Commission in accordance with the examination procedure under Art. 93 para. 2 of the
            GDPR, which I have agreed to with the provider.
          </p>

          <p>
            We use the Content Delivery Network (CDN) Amazon CloudFront from Amazon Web Services
            EMEA SARL, 38 avenue John F. Kennedy, L-1855 Luxembourg (AWS) to increase the security
            and delivery speed of our website. This corresponds to our legitimate interest (Art. 6
            para. 1 lit. f GDPR). A CDN is a network of [globally] distributed servers that can
            optimally deliver content to website users. For this purpose, personal data may be
            processed in AWS server log files. Please refer to the information under "Hosting".
            [Additionally, we retain [anonymized] log files to ensure [optimize] the stability and
            security of our website.] AWS is the recipient of your personal data and acts as a
            processor for us. This corresponds to our legitimate interest within the meaning of Art.
            6 para. 1 s. 1 lit. f GDPR in not operating our own content delivery network. You have
            the right to object to the processing. Whether the objection is successful must be
            determined as part of a balancing of interests. The processing of the data specified in
            this section is neither legally nor contractually required. The functionality of the
            website is not guaranteed without the processing. Your personal data will be stored by
            AWS for as long as necessary for the purposes described. [We delete the stored log files
            after [ ]]. For more information about objection and removal options regarding AWS,
            please visit:
            https://d1.awsstatic.com/legal/privacypolicy/AWS_Privacy_Notice__German_Translation.pdf
            AWS has implemented compliance measures for international data transfers. These apply to
            all global activities where AWS processes personal data of individuals in the EU. These
            measures are based on the EU Standard Contractual Clauses (SCCs). For more information,
            please visit: https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf
          </p>
        </p>
        <p>
          <strong>3.8. Technically Necessary Cookies</strong>
          <br />
          My website sets cookies. Cookies are small text files that are stored in the web browser
          on the end device of a site visitor. Cookies help to make the offer more user-friendly,
          effective, and secure. Insofar as these cookies are necessary for the operation of my
          website or its functions (hereinafter "Technically Necessary Cookies"), the legal basis
          for the associated data processing is Art. 6 para. 1 s. 1 lit. f GDPR. I have a legitimate
          interest in providing customers and other site visitors with a functional website.
          <br />
          Specifically, I set technically necessary cookies for the following purpose or purposes:
          <br />- Cookies that store language settings, login data, and payment provider data for
          payment processing without analyzing user behavior.
        </p>

        <p>
          <strong>3.9. Third Parties</strong>
          <br />
          <strong>3.9.1. PostHog</strong>
          <br />
          I use PostHog for product analytics. The provider is PostHog, Inc., 965 Mission St, San
          Francisco, CA 94103, USA. The provider processes usage data (e.g., web pages visited,
          interest in content, access times), content data (e.g., entries in online forms), and
          meta/communication data (e.g., device information, IP addresses) in the EU.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. f GDPR. I have a legitimate
          interest in understanding user behavior to improve my services.
          <br />
          The data will be deleted when the purpose for which it was collected no longer applies and
          there is no obligation to retain it. Further information is available in the provider's
          privacy policy at <a href="https://posthog.com/privacy">https://posthog.com/privacy</a>.
        </p>

        {/* <p>
          <strong>3.9. Third Parties</strong>
          <br />
          <strong>3.9.1. HubSpot</strong>
          <br />
          I use HubSpot for customer relationship management. The provider is HubSpot, Inc., 25 1st
          Street Cambridge, MA 0214, USA. The provider processes usage data (e.g., web pages
          visited, interest in content, access times), content data (e.g., entries in online forms),
          and meta/communication data (e.g., device information, IP addresses) in the EU.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. f GDPR. I have a
          legitimate interest in managing data in a simple and inexpensive way.
          <br />
          The data will be deleted when the purpose for which it was collected no longer applies and
          there is no obligation to retain it. Further information is available in the provider's
          privacy policy at{' '}
          <a href="https://legal.hubspot.com/de/privacy-policy">
            https://legal.hubspot.com/de/privacy-policy
          </a>
          .
        </p> */}

        {/* <p>
          <strong>3.9.2. Hotjar</strong>
          <br />
          I use Hotjar for analytics. The provider is Hotjar Ltd., Dragonara Business Centre, 5th
          Floor, Dragonara Road, Paceville St Julian's, STJ 3141, Malta. The provider processes
          usage data (e.g., web pages visited, interest in content, access times) and
          meta/communication data (e.g., device information, IP addresses) in the EU.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. a GDPR. The processing is
          based on consent. Data subjects may revoke their consent at any time by contacting us, for
          example, using the contact details provided in my privacy policy. The revocation does not
          affect the lawfulness of the processing until the revocation.
          <br />
          The data will be deleted when the purpose for which it was collected no longer applies and
          there is no obligation to retain it. Further information is available in the provider's
          privacy policy at{' '}
          <a href="https://www.hotjar.com/legal/policies/privacy/">
            https://www.hotjar.com/legal/policies/privacy/
          </a>
          .
        </p> */}

        {/* <p>
          <strong>3.9.3. Weglot</strong>
          <br />
          I use Weglot for translations. The provider is Weglot, 138, rue Pierre Joigneaux in
          BOIS-COLOMBES (92270), France. The provider processes meta/communication data (e.g.,
          device information, IP addresses) in the EU.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. a GDPR. The processing is
          based on consent. Data subjects may revoke their consent at any time by contacting us, for
          example, using the contact details provided in my privacy policy. The revocation does not
          affect the lawfulness of the processing until the revocation.
          <br />
          The data will be deleted when the purpose for which it was collected no longer applies and
          there is no obligation to retain it. Further information is available in the provider's
          privacy policy at{' '}
          <a href="https://weglot.com/de/privacy/">https://weglot.com/de/privacy/</a>.
        </p> */}

        {/* <p>
          <strong>3.9.4. Google Tag Manager</strong>
          <br />
          I use Google Tag Manager for analytics and for advertisement. The provider is Google
          Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. The provider processes
          usage data (e.g., web pages visited, interest in content, access times) in the USA.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. a GDPR. The processing is
          based on consent. Data subjects may revoke their consent at any time by contacting us, for
          example, using the contact details provided in my privacy policy. The revocation does not
          affect the lawfulness of the processing until the revocation.
          <br />
          The legal basis for the transfer to a country outside the EEA are standard contractual
          clauses. The security of the data transferred to the third country (i.e., a country
          outside the EEA) is guaranteed by standard data protection clauses (Art. 46 para. 2 lit. c
          GDPR) adopted by the EU Commission in accordance with the examination procedure under Art.
          93 para. 2 of the GDPR, which I have agreed to with the provider.
          <br />
          I delete the data when the purpose for which it was collected no longer applies. Further
          information is available in the provider's privacy policy at{' '}
          <a href="https://policies.google.com/privacy?hl=en-US">
            https://policies.google.com/privacy?hl=en-US
          </a>
          .
        </p> */}

        {/* <p>
          <strong>3.9.5. Webflow</strong>
          <br />
          I use Webflow to create websites. The provider is Webflow, Inc., 398 11th St., Floor 2,
          San Francisco, CA 94103, USA. The provider processes usage data (e.g., web pages visited,
          interest in content, access times) and meta/communication data (e.g., device information,
          IP addresses) in the USA.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. f GDPR. I have a
          legitimate interest in setting up and maintaining a website and thus presenting myselves
          to the outside world.
          <br />
          The legal basis for the transfer to a country outside the EEA are standard contractual
          clauses. The security of the data transferred to the third country (i.e., a country
          outside the EEA) is guaranteed by standard data protection clauses (Art. 46 para. 2 lit. c
          GDPR) adopted by the EU Commission in accordance with the examination procedure under Art.
          93 para. 2 of the GDPR, which I have agreed to with the provider.
          <br />
          I delete the data when the purpose for which it was collected no longer applies. Further
          information is available in the provider's privacy policy at{' '}
          <a href="https://webflow.com/legal/eu-privacy-policy">
            https://webflow.com/legal/eu-privacy-policy
          </a>
          .
        </p> */}

        {/* <p>
          <strong>3.9.6. Google Analytics</strong>
          <br />
          I use Google Analytics for analytics. The provider is Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Dublin, Ireland. The provider processes usage data (e.g.,
          web pages visited, interest in content, access times) and meta/communication data (e.g.,
          device information, IP addresses) in the USA.
          <br />
          The legal basis for the processing is Art. 6 para. 1 s. 1 lit. a GDPR. The processing is
          based on consent. Data subjects may revoke their consent at any time by contacting us, for
          example, using the contact details provided in my privacy policy. The revocation does not
          affect the lawfulness of the processing until the revocation.
          <br />
          The legal basis for the transfer to a country outside the EEA are standard contractual
          clauses. The security of the data transferred to the third country (i.e., a country
          outside the EEA) is guaranteed by standard data protection clauses (Art. 46 para. 2 lit. c
          GDPR) adopted by the EU Commission in accordance with the examination procedure under Art.
          93 para. 2 of the GDPR, which I have agreed to with the provider.
          <br />
          The data will be deleted when the purpose for which it was collected no longer applies and
          there is no obligation to retain it. Further information is available in the provider's
          privacy policy at{' '}
          <a href="https://policies.google.com/privacy?hl=en-US">
            https://policies.google.com/privacy?hl=en-US
          </a>
          .
        </p> */}

        <p>
          <strong>4. Data Processing on Social Media Platforms</strong>
          <br />
          I are represented in social media networks in order to present my organization and my
          services there. The operators of these networks regularly process their users' data for
          advertising purposes. Among other things, they create user profiles from their online
          behavior, which are used, for example, to show advertising on the pages of the networks
          and elsewhere on the Internet that corresponds to the interests of the users. To this end,
          the operators of the networks store information on user behavior in cookies on the users'
          computers. Furthermore, it cannot be ruled out that the operators merge this information
          with other data. Users can obtain further information and instructions on how to object to
          processing by the site operators in the data protection declarations of the respective
          operators listed below. It is also possible that the operators or their servers are
          located in non-EU countries, so that they process data there. This may result in risks for
          users, e.g., because it is more difficult to enforce their rights or because government
          agencies access the data.
          <br />
          If users of the networks contact us via my profiles, I process the data provided to us in
          order to respond to the inquiries. This is my legitimate interest, so that the legal basis
          is Art. 6 para. 1 s. 1 lit. f GDPR.
        </p>

        {/* <p>
          <strong>4.1. Facebook</strong>
          <br />
          I maintain a profile on Facebook. The operator is Facebook Ireland Ltd, 4 Grand Canal
          Square, Grand Canal Harbmy, Dublin 2, Ireland. The privacy policy is available here:{' '}
          <a href="https://www.facebook.com/policy.php">https://www.facebook.com/policy.php</a>. A
          possibility to object to data processing arises via settings for advertisements:{' '}
          <a href="https://www.facebook.com/settings?tab=ads">
            https://www.facebook.com/settings?tab=ads
          </a>
          .
          <br />
          I are joint controllers for processing the data of visitors to my profile on the basis
          of an agreement within the meaning of Art. 26 GDPR with Facebook. Facebook explains
          exactly what data is processed at{' '}
          <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data">
            https://www.facebook.com/legal/terms/information_about_page_insights_data
          </a>
          . Data subjects can exercise their rights both against us and against Facebook. However,
          according to my agreement with Facebook, I are obliged to forward requests to Facebook.
          Data subjects will therefore receive a faster response if they contact Facebook directly.
        </p> */}

        {/* <p>
          <strong>4.2. Instagram</strong>
          <br />
          I maintain a profile on Instagram. The operator is Facebook Ireland Ltd, 4 Grand Canal
          Square, Grand Canal Harbmy, Dublin 2, Ireland. The privacy policy is available here:{' '}
          <a href="https://help.instagram.com/519522125107875">
            https://help.instagram.com/519522125107875
          </a>
          .
        </p> */}

        {/* <p>
          <strong>4.3. TikTok</strong>
          <br />
          I maintain a profile on TikTok. The operator is musical.ly Inc, 10351 Santa Monica Blvd
          #310, Los Angeles, CA 90025 USA. The privacy policy is available here:{' '}
          <a href="https://www.tiktok.com/de/privacy-policy">
            https://www.tiktok.com/de/privacy-policy
          </a>
          .
        </p> */}

        {/* <p>
          <strong>4.4. YouTube</strong>
          <br />
          I maintain a profile on YouTube. The operator is Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Ireland. The privacy policy is available here:{' '}
          <a href="https://policies.google.com/privacy?hl=de">
            https://policies.google.com/privacy?hl=de
          </a>
          .
        </p> */}

        {/* <p>
          <strong>4.5. X</strong>
          <br />I maintain a profile on X. The operator is X Inc, 1355 Market Street, Suite 900, San
          Francisco, CA 94103, USA. The privacy policy is available here:{' '}
          <a href="https://x.com/de/privacy">https://x.com/de/privacy</a>. One way to object to data
          processing is via the settings for advertisements:{' '}
          <a href="https://x.com/personalization">https://x.com/personalization</a>.
        </p> */}

       {/*  <p>
          <strong>4.6. LinkedIn</strong>
          <br />I maintain a profile on LinkedIn. The operator is LinkedIn Ireland Unlimited
          Company, Wilton Place, Dublin 2, Ireland. The privacy policy is available here:{' '}
          <a href="https://www.linkedin.com/legal/privacy-policy?_l=de_DE">
            https://www.linkedin.com/legal/privacy-policy?_l=de_DE
          </a>
          . One way to object to data processing is via the settings for advertisements:{' '}
          <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out">
            https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
          </a>
          .
        </p> */}

        <p>
          <strong>5. Changes to This Privacy Policy</strong>
          <br />I reserve the right to change this privacy policy with effect for the future. A
          current version is always available here.
        </p>

        <p>
          <strong>6. Questions and Comments</strong>
          <br />
          If you have any questions or comments regarding this privacy policy, please feel free to
          contact us using the contact information provided above.
        </p>

        <p>Last updated: 2024-08-05</p>
      </Text>
    </Container>
  );
}
