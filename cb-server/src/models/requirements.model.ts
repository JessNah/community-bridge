import {Entity, model, property} from '@loopback/repository';

@model()
export class Requirements extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  creation_date: string;

  @property({
    type: 'string',
  })
  volunteer_username?: string;

  @property({
    type: 'date',
  })
  required_date?: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  requirement_creator_username: string;

  @property({
    type: 'any',
  })
  requirement_location?: any;

  @property({
    type: 'string',
    required: true,
    default: 'active',
  })
  status: string;


  constructor(data?: Partial<Requirements>) {
    super(data);
  }
}

export interface RequirementsRelations {
  // describe navigational properties here
}

export type RequirementsWithRelations = Requirements & RequirementsRelations;
