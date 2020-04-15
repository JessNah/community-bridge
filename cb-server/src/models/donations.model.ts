import {Entity, model, property} from '@loopback/repository';

@model()
export class Donations extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  amount: number;

  @property({
    type: 'string',
  })
  donator_username?: string;


  constructor(data?: Partial<Donations>) {
    super(data);
  }
}

export interface DonationsRelations {
  // describe navigational properties here
}

export type DonationsWithRelations = Donations & DonationsRelations;
