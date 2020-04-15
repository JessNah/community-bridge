import {DefaultCrudRepository} from '@loopback/repository';
import {Donations, DonationsRelations} from '../models';
import {BridgedbCloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DonationsRepository extends DefaultCrudRepository<
  Donations,
  typeof Donations.prototype.id,
  DonationsRelations
> {
  constructor(
    @inject('datasources.BridgedbCloudant') dataSource: BridgedbCloudantDataSource,
  ) {
    super(Donations, dataSource);
  }
}
