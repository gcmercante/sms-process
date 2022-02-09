import { GetMessageDataRepository } from '../interfaces/GetMessageDataRepository.interface';
import { Contact } from '../interfaces/Contact.interface';
import { InteractionVars } from '../interfaces/Variables.interface';
import { Message } from '../interfaces/Message.interface';

export class GetMessageDataRepositoryMock implements GetMessageDataRepository {
  messageDataObj: Contact;
  async getMessageData(): Promise<Contact> {
    return this.messageDataObj;
  }

  async mockData(): Promise<void> {
    this.messageDataObj = {
      smsmailingId: 1234,
      batchId: 1234,
      batchQuantity: 5,
      batchStartDate: new Date(),
      batchEndDate: new Date(new Date().getTime() + 10),
      mailingTotalsValid: 5,
      mailingCategory: 'abc',
      clientId: 1,
      accountId: 1,
      seeds: [],
      percentQuantity: 2,
      interactionVars: {
        cpf: 'alooooooo',
        name: 'AAAAAAAAAA',
        vars: {
          idNumberControl: 'aloooooo',
          teste: 1,
          teste2: 2,
        },
      },
      number: 'a',
      message: 'a',
      billFactor: 1,
      status: 1,
      carrierId: 1,
      priority: 1,
      priorityMessage: 1,
      categoryId: 1,
      sendTypeId: 1,
      productId: 1,
      coreRoute: 1,
      clientSlug: 'alo',
      flash: 1,
      queueStatus: 1,
    };
  }

  async getMessageObj(): Promise<Message> {
    return {
      variables: {},
      number: '',
      scheduled_at: new Date(),
      smsmailing_id: 1,
      client_id: 1,
      smsbatch_id: 1,
      account_id: 1,
      type: '',
      message: '',
      core_status: 1,
      bill_factor: 1,
      created_at: new Date(),
      status: 1,
      carrier_id: 1,
      priority: 1,
      priority_message: 1,
      category_id: 1,
      send_type_id: 1,
      product_id: 1,
      core_route: 1,
      client_slug: '',
      flash: 1,
      queue_status: 1,
    };
  }

  async getMessageVariables(): Promise<InteractionVars> {
    return this.messageDataObj.interactionVars;
  }
}
