import {DefaultCrudRepository} from '@loopback/repository';
import {Requirements, RequirementsRelations} from '../models';
import {BridgedbCloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RequirementsRepository extends DefaultCrudRepository<
  Requirements,
  typeof Requirements.prototype.id,
  RequirementsRelations
> {
  constructor(
    @inject('datasources.BridgedbCloudant') dataSource: BridgedbCloudantDataSource,
  ) {
    super(Requirements, dataSource);
  }
}
