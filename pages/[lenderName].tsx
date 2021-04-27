import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Form from 'components/form';
import { LenderGetResponse } from 'lib/types';
import { postSubmission } from 'lib/request';
import LendersData from './api/lenders';
import {
  ApplicationStatusDescription,
  CenteredSection,
  Heading,
  StyledImage,
} from 'lib/global-styles';

type Props = {
  details: LenderGetResponse;
};

const LenderNamePage = ({ details }: Props) => {
  const [applicationStatus, setApplicationStatus] = useState<string>('');
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString() || '';

  const submitApplication = async (formValues: any) => {
    const status = await postSubmission(lenderSlug, formValues);
    if (status) {
      setApplicationStatus(status?.decision);
    }
  };

  const renderSuccessState = () => (
    <>
      <h1 role="alert">Congrats! Your application has been accepted</h1>
      <StyledImage src="success.png" alt="Application accepted icon" />
      <ApplicationStatusDescription>
        It will take us 3-5 working days to act on your application. Kindly
        contact our branch office or support services for more information
      </ApplicationStatusDescription>
    </>
  );

  const renderRejectedState = () => (
    <>
      <h1 role="alert">Oops! Your application has been declined</h1>
      <StyledImage src="no.png" alt="Application declined icon" />
      <ApplicationStatusDescription>
        We could not process your application at this time. Kindly contact our
        branch office or support services for more information
      </ApplicationStatusDescription>
    </>
  );

  return (
    <CenteredSection>
      {applicationStatus.length === 0 && (
        <>
          <Heading>{lenderSlug.replace(/-/g, ' ')}</Heading>
          <Form fields={details?.fields} onSubmit={submitApplication} />
        </>
      )}
      {applicationStatus === 'accepted' && renderSuccessState()}
      {applicationStatus === 'declined' && renderRejectedState()}
    </CenteredSection>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const lenderName = context.params?.lenderName;
  const details = LendersData(lenderName);
  return {
    props: {
      details,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { lenderName: 'bank-of-azeroth' } },
      { params: { lenderName: 'middle-earth-bank' } },
      { params: { lenderName: 'naboo-bank' } },
    ],
    fallback: false,
  };
};

export default LenderNamePage;
