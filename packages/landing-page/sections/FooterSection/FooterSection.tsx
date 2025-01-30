import { Footer } from '@/components/Footer/Footer';
import { FOOTER_LINKS_DATA } from './data';
import { LinksGroup } from '@/components/Footer/LinksGroup';
import { Section } from '@/components/Section/Section';

export const FooterSection = () => {
  return (
    <Section id="footer" dividerProps={{ hiddenFrom: 'xs' }}>
      <Footer
        groups={FOOTER_LINKS_DATA.map((group) => (
          <LinksGroup key={group.title} {...group} />
        ))}
      />
    </Section>
  );
};
