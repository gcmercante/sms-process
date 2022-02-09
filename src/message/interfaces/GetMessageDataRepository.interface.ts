import { Contact } from './Contact.interface';
import { InteractionVars } from './Variables.interface';

export interface GetMessageDataRepository {
  getMessageData: () => Promise<Contact>;
  getMessageVariables: () => Promise<InteractionVars>;
}
