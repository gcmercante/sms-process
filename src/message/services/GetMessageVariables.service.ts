import { Injectable } from '@nestjs/common';
import { GetMessageDataRepository } from '../interfaces/GetMessageDataRepository.interface';
import { InteractionVars, Variables } from '../interfaces/Variables.interface';

@Injectable()
export class GetMessageVariablesService {
  constructor(
    private readonly getMessageDataRepository: GetMessageDataRepository,
  ) {}

  async execute(): Promise<Variables> {
    const contactVariables: InteractionVars =
      await this.getMessageDataRepository.getMessageVariables();
    const messageVariables: Variables = {};

    Object.entries(contactVariables).forEach(([key, value]) => {
      messageVariables[key] = value;
    });

    return messageVariables;
  }
}
