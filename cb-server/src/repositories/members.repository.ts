import {DefaultCrudRepository} from '@loopback/repository';
import {Members, MembersRelations} from '../models';
import {BridgedbCloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MembersRepository extends DefaultCrudRepository<
  Members,
  typeof Members.prototype.id,
  MembersRelations
> {
  constructor(
    @inject('datasources.BridgedbCloudant') dataSource: BridgedbCloudantDataSource,
  ) {
    super(Members, dataSource);
  }
}
