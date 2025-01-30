import { NextPage } from 'next';

type StructuredDataProps = {
  data: Record<string, any>;
};

const StructuredData: NextPage<StructuredDataProps> = ({ data }) => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
};

export default StructuredData;
