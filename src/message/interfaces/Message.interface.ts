import { Variables } from './Variables.interface';

export interface Message {
  cpf_cnpj?: string;
  variables: Variables;
  number: string;
  scheduled_at: Date;
  smsmailing_id: number;
  client_id: number;
  smsbatch_id: number;
  account_id: number;
  type: string;
  message: string;
  core_status: number;
  bill_factor: number;
  created_at: Date;
  status: number;
  carrier_id: number;
  priority: number;
  priority_message: number;
  category_id: number;
  send_type_id: number;
  product_id: number;
  core_route: number;
  client_slug: string;
  flash: number;
  queue_status: number;
}
