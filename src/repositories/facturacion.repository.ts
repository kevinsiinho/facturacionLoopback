import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Facturacion, FacturacionRelations} from '../models';

export class FacturacionRepository extends DefaultCrudRepository<
  Facturacion,
  typeof Facturacion.prototype.id,
  FacturacionRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Facturacion, dataSource);
  }
}
