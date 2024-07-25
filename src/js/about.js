import '../css/commomStyle.css';
import '../css/about.css';

import { aboutSections } from './data';
import { createContentSections,putContentInAboutSection,putContentInMissionSection,putContentInHistorySection,putContentInTeamSection} from './modules';

export function generateAboutPage (){
  createContentSections(aboutSections,'content');
  putContentInAboutSection();
  putContentInMissionSection();
  putContentInHistorySection();
  putContentInTeamSection();
}


