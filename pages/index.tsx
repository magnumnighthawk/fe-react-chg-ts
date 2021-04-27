import { Link, ListItem } from '@material-ui/core';
import { NextPage } from 'next';
import { CenteredSection, StyledList } from 'lib/global-styles';

const HomePage: NextPage = () => {
  const lenders = [
    { name: 'Bank of Azeroth', slug: 'bank-of-azeroth' },
    { name: 'Middle Earth Bank', slug: 'middle-earth-bank' },
    { name: 'Naboo Bank', slug: 'naboo-bank' },
  ];

  return (
    <CenteredSection>
      <h1>Choose a bank</h1>
      <StyledList>
        {lenders.map((lender) => (
          <ListItem key={lender.name}>
            <Link data-testid={lender.slug} href={`/${lender.slug}`}>
              {lender.name}
            </Link>
          </ListItem>
        ))}
      </StyledList>
    </CenteredSection>
  );
};

export default HomePage;
