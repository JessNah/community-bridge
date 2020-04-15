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
import {Requirements} from '../models';
import {RequirementsRepository} from '../repositories';

export class RequirementsController {
  constructor(
    @repository(RequirementsRepository)
    public requirementsRepository : RequirementsRepository,
  ) {}

  @post('/requirements', {
    responses: {
      '200': {
        description: 'Requirements model instance',
        content: {'application/json': {schema: getModelSchemaRef(Requirements)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Requirements, {
            title: 'NewRequirements',
            
          }),
        },
      },
    })
    requirements: Requirements,
  ): Promise<Requirements> {
    return this.requirementsRepository.create(requirements);
  }

  @get('/requirements/count', {
    responses: {
      '200': {
        description: 'Requirements model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Requirements) where?: Where<Requirements>,
  ): Promise<Count> {
    return this.requirementsRepository.count(where);
  }

  @get('/requirements', {
    responses: {
      '200': {
        description: 'Array of Requirements model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Requirements, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Requirements) filter?: Filter<Requirements>,
  ): Promise<Requirements[]> {
    return this.requirementsRepository.find(filter);
  }

  @patch('/requirements', {
    responses: {
      '200': {
        description: 'Requirements PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Requirements, {partial: true}),
        },
      },
    })
    requirements: Requirements,
    @param.where(Requirements) where?: Where<Requirements>,
  ): Promise<Count> {
    return this.requirementsRepository.updateAll(requirements, where);
  }

  @get('/requirements/{id}', {
    responses: {
      '200': {
        description: 'Requirements model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Requirements, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Requirements, {exclude: 'where'}) filter?: FilterExcludingWhere<Requirements>
  ): Promise<Requirements> {
    return this.requirementsRepository.findById(id, filter);
  }

  @patch('/requirements/{id}', {
    responses: {
      '204': {
        description: 'Requirements PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Requirements, {partial: true}),
        },
      },
    })
    requirements: Requirements,
  ): Promise<void> {
    await this.requirementsRepository.updateById(id, requirements);
  }

  @put('/requirements/{id}', {
    responses: {
      '204': {
        description: 'Requirements PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() requirements: Requirements,
  ): Promise<void> {
    await this.requirementsRepository.replaceById(id, requirements);
  }

  @del('/requirements/{id}', {
    responses: {
      '204': {
        description: 'Requirements DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.requirementsRepository.deleteById(id);
  }
}
