import { useSelector } from 'react-redux';
import { Footer } from '../../../../pages/home/components/Footer';
import { Header } from '../../../../pages/home/components/Header';
import { SectionTypes } from '../../../../pages/home/helpers/contentManagement';

export const WithHeaderFooter = ({ children }) => {
  const content = useSelector(
    (state) => state.contentManagementReducer?.homePageContent
  );
  const getContentData = (sectionType) => {
    return content?.[sectionType];
  };
  return (
    <>
      <Header
        content={getContentData(SectionTypes.HEADERS)}
        partnersContent={getContentData(SectionTypes.PARTNERS)}
        winnerPopup={getContentData(SectionTypes.WINNER_POPUP)}
      />
      {children}
      <Footer
        content={{
          ...getContentData(SectionTypes.FOOTERS),
          ...getContentData(SectionTypes.HEADERS),
        }}
        partnersContent={getContentData(SectionTypes.PARTNERS)}
      />
    </>
  );
};
