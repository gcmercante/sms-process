import { Injectable } from '@nestjs/common';
import { GetMessageDataRepository } from '../interfaces/GetMessageDataRepository.interface';
import { Message } from '../interfaces/Message.interface';

@Injectable()
export class BuildMessageService {
  constructor(
    private readonly getMessageDataRepository: GetMessageDataRepository,
  ) {}

  async execute(): Promise<Message> {
    const messageData = await this.getMessageDataRepository.getMessageData();
    const message: Message = {
      variables: {},
      number: messageData.number,
      scheduled_at: new Date(messageData.batchStartDate),
      smsmailing_id: messageData.smsmailingId,
      client_id: messageData.clientId,
      smsbatch_id: messageData.batchId,
      account_id: messageData.accountId,
      type: messageData.mailingCategory,
      message: messageData.message,
      core_status: 0,
      bill_factor: messageData.billFactor,
      created_at: new Date(),
      status: messageData.status,
      carrier_id: messageData.carrierId,
      priority: messageData.priority,
      priority_message: messageData.priorityMessage,
      category_id: messageData.categoryId,
      send_type_id: messageData.sendTypeId,
      product_id: messageData.productId,
      core_route: messageData.coreRoute,
      client_slug: messageData.clientSlug,
      flash: messageData.flash,
      queue_status: messageData.queueStatus,
    };

    return message;
  }
}
