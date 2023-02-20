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
  response,
} from '@loopback/rest';
import {Facturacion} from '../models';
import {FacturacionRepository} from '../repositories';

export class FacturacionController {
  constructor(
    @repository(FacturacionRepository)
    public facturacionRepository : FacturacionRepository,
  ) {}

  @post('/facturacions')
  @response(200, {
    description: 'Facturacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Facturacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturacion, {
            title: 'NewFacturacion',
            
          }),
        },
      },
    })
    facturacion: Facturacion,
  ): Promise<Facturacion> {
    return this.facturacionRepository.create(facturacion);
  }

  @get('/facturacions/count')
  @response(200, {
    description: 'Facturacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Facturacion) where?: Where<Facturacion>,
  ): Promise<Count> {
    return this.facturacionRepository.count(where);
  }

  @get('/facturacions')
  @response(200, {
    description: 'Array of Facturacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Facturacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Facturacion) filter?: Filter<Facturacion>,
  ): Promise<Facturacion[]> {
    return this.facturacionRepository.find(filter);
  }

  @patch('/facturacions')
  @response(200, {
    description: 'Facturacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturacion, {partial: true}),
        },
      },
    })
    facturacion: Facturacion,
    @param.where(Facturacion) where?: Where<Facturacion>,
  ): Promise<Count> {
    return this.facturacionRepository.updateAll(facturacion, where);
  }

  @get('/facturacions/{id}')
  @response(200, {
    description: 'Facturacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Facturacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Facturacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Facturacion>
  ): Promise<Facturacion> {
    return this.facturacionRepository.findById(id, filter);
  }

  @patch('/facturacions/{id}')
  @response(204, {
    description: 'Facturacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturacion, {partial: true}),
        },
      },
    })
    facturacion: Facturacion,
  ): Promise<void> {
    await this.facturacionRepository.updateById(id, facturacion);
  }

  @put('/facturacions/{id}')
  @response(204, {
    description: 'Facturacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() facturacion: Facturacion,
  ): Promise<void> {
    await this.facturacionRepository.replaceById(id, facturacion);
  }

  @del('/facturacions/{id}')
  @response(204, {
    description: 'Facturacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturacionRepository.deleteById(id);
  }
}
