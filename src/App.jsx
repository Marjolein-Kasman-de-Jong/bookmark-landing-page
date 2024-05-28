// Components
import PageHeader from './components/page-header/PageHeader';
import Main from './components/main/Main';
import PageFooter from './components/page-footer/PageFooter';

// Styles
import './App.css';

function App() {
  return (
    <div className='page-container'>
      <PageHeader />
      <Main />
      <PageFooter />
    </div>
  );
}

export default App;