import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../../../pages/home/components/Footer';
import { Header } from '../../../../pages/home/components/Header';
import { SectionTypes } from '../../../../pages/home/helpers/contentManagement';
import { getContent } from '../../../../store/actions/contentManagement';
import { STATUS, STRINGS } from '../../../constants';
import { toast } from 'react-toastify';

export const WithHeaderFooter = ({ children }) => {
  const content = useSelector(
    (state) => state.contentManagementReducer?.homePageContent
  );
  const dispatch = useDispatch();
  const getContentData = (sectionType) => {
    return content?.[sectionType];
  };

  const getData = (payload = {}) => {
    dispatch(
      getContent(payload, (data, status) => {
        if (status === STATUS.ERROR) {
          toast.error(STRINGS.SOMETHING_WENT_WRONG)
        }
      })
    );
  }
  return (
    <>
      <Header
        content={getContentData(SectionTypes.HEADERS)}
        partnersContent={getContentData(SectionTypes.PARTNERS)}
        winnerPopup={getContentData(SectionTypes.WINNER_POPUP)}
        getData={getData}
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
