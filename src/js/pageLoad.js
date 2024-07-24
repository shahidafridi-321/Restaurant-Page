import { createContentSections, putsContentInWelcomeSection, putsContentDescriptionSection, createCards } from "./modules";
import { cardsData, contentSections } from "./data"
import '../css/commomStyle.css';
import '../css/home.css';

export function initialPageLoad() {
  createContentSections(contentSections,'content');
  putsContentInWelcomeSection();
  putsContentDescriptionSection();
  createCards(cardsData);
}