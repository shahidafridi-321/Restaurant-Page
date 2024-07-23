import { createContentSections ,putsContentInWelcomeSection , putsContentDescriptionSection ,createCards} from "./modules";
import {cardsData , contentSections} from "./data"
import './style.css';






createContentSections(contentSections);
putsContentInWelcomeSection();
putsContentDescriptionSection();
createCards(cardsData);


