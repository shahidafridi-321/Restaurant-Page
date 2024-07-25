import { createContentSections,putContentInAppetizersSection,putContentInMainCursesSection,putContentInDessertsSection,putContentInBeveragesSection} from "./modules";
import {menuPageSetions}  from './data';
import '../css/commomStyle.css';
import '../css/menu.css';


export function generateMenuPage(){
  createContentSections(menuPageSetions,'content');
  putContentInAppetizersSection();
  putContentInMainCursesSection();
  putContentInDessertsSection();
  putContentInBeveragesSection();
}

