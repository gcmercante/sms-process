import { InteractionVars } from './Variables.interface';

export interface Contact {
  smsmailingId: number;
  batchId: number;
  batchQuantity: number;
  batchStartDate: Date;
  batchEndDate: Date;
  mailingTotalsValid: number;
  mailingCategory: string;
  clientId: number;
  accountId: number;
  seeds: Array<string>;
  percentQuantity: number;
  cpf?: string;
  interactionVars: InteractionVars;
  pointerName?: string;
  number: string;
  message: string;
  billFactor: number;
  status: number;
  carrierId: number;
  priority: number;
  priorityMessage: number;
  categoryId: number;
  sendTypeId: number;
  productId: number;
  coreRoute: number;
  clientSlug: string;
  flash: number;
  queueStatus: number;
}
