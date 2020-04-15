import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Donations} from '../models';
import {DonationsRepository} from '../repositories';

export class DonationsController {
  constructor(
    @repository(DonationsRepository)
    public donationsRepository : DonationsRepository,
  ) {}

  @post('/donations', {
    responses: {
      '200': {
        description: 'Donations model instance',
        content: {'application/json': {schema: getModelSchemaRef(Donations)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Donations, {
            title: 'NewDonations',
            
          }),
        },
      },
    })
    donations: Donations,
  ): Promise<Donations> {
    return this.donationsRepository.create(donations);
  }

  @get('/donations/count', {
    responses: {
      '200': {
        description: 'Donations model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Donations) where?: Where<Donations>,
  ): Promise<Count> {
    return this.donationsRepository.count(where);
  }

  @get('/donations', {
    responses: {
      '200': {
        description: 'Array of Donations model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Donations, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Donations) filter?: Filter<Donations>,
  ): Promise<Donations[]> {
    return this.donationsRepository.find(filter);
  }

  @patch('/donations', {
    responses: {
      '200': {
        description: 'Donations PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Donations, {partial: true}),
        },
      },
    })
    donations: Donations,
    @param.where(Donations) where?: Where<Donations>,
  ): Promise<Count> {
    return this.donationsRepository.updateAll(donations, where);
  }

  @get('/donations/{id}', {
    responses: {
      '200': {
        description: 'Donations model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Donations, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Donations, {exclude: 'where'}) filter?: FilterExcludingWhere<Donations>
  ): Promise<Donations> {
    return this.donationsRepository.findById(id, filter);
  }

  @patch('/donations/{id}', {
    responses: {
      '204': {
        description: 'Donations PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Donations, {partial: true}),
        },
      },
    })
    donations: Donations,
  ): Promise<void> {
    await this.donationsRepository.updateById(id, donations);
  }

  @put('/donations/{id}', {
    responses: {
      '204': {
        description: 'Donations PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() donations: Donations,
  ): Promise<void> {
    await this.donationsRepository.replaceById(id, donations);
  }

  @del('/donations/{id}', {
    responses: {
      '204': {
        description: 'Donations DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.donationsRepository.deleteById(id);
  }
}
