import ExportStatus from './WaitingPage/ExportStatus';
import UploadPage from './UploadPage';
import './App.css';
import WaitingPage from './WaitingPage';
import ExportVideo from './ExportVideo';
import VideoPage from './VideoPage';
import Audio from './Audio';
import Progress from './Components/Progress/Progress';
import PersonalPage from './PersonalPage/PersonalPage';
import VideoAudit from './VideoAuditPage';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from './LoadingPage/LoadingPage';
function App() {
  return (< HashRouter >  
  < Switch >
  < Route path="/uploadpage" component={UploadPage} />  
  < Route path="/loadingpage" component={LoadingPage}/>
  < Route path="/videopage" component={VideoPage} /> 
   < Route path="/personalpage" component={PersonalPage} /> 
   < Route path="/videoaudit" component={VideoAudit} />
    </Switch > 
     </HashRouter >
  );
}
export default App;
