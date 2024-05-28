// Components
import MainSectionIntro from '../main-section-intro/MainSectionIntro';
import MainSectionFeatures from '../main-section-features/MainSectionFeatures';
import MainSectionExtensions from '../main-section-extensions/MainSectionExtensions';
import MainSectionFaqs from '../main-section-faqs/MainSectionFaqs';
import MainSectionContact from '../main-section-contact/MainSectionContact';

// Styles
import './main.css';

function Main() {
  return (
    <main>
        <MainSectionIntro />
        <MainSectionFeatures />
        <MainSectionExtensions />
        <MainSectionFaqs />
        <MainSectionContact />
    </main>
  );
}

export default Main;