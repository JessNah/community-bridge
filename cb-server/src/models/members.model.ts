import {Entity, model, property} from '@loopback/repository';

@model()
export class Members extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  mobile?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  geo_location_address?: string;

  @property({
    type: 'string',
  })
  about?: string;


  constructor(data?: Partial<Members>) {
    super(data);
  }
}

export interface MembersRelations {
  // describe navigational properties here
}

export type MembersWithRelations = Members & MembersRelations;
