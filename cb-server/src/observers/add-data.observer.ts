import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver, // The interface
} from '@loopback/core';
//import the repository decorator
import {repository} from '@loopback/repository';

//import from LB app
import {RequirementsRepository} from '../repositories';
import {Requirements} from '../models';
import {MembersRepository} from '../repositories';
import {Members} from '../models';
import {DonationsRepository} from '../repositories';
import {Donations} from '../models';


/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('AddDataGroup')
export class AddDataObserver implements LifeCycleObserver {
  /*
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
  ) {}
  */
 constructor(
    @repository('RequirementsRepository') private requirementsRepo: RequirementsRepository,
    @repository('MembersRepository') private membersRepo: MembersRepository,
    @repository('DonationsRepository') private donationsRepo: DonationsRepository,
  ) {}
  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
    //seed the repository
    let count: number = (await this.requirementsRepo.count()).count;
    if (count !== 0) return;
  
    //create an instance of Requirement to be inserted into the database
    let requirementsData = new Requirements({
      creation_date: '2020-04-14',
      required_date: '2020-04-20',
      description: 'need groceries delivered',
      requirement_creator_username: 'Mary',
      requirement_location: '230-7324 Pebble Avenue, Markham, ON, L3K 47S Canada',
    });
    this.requirementsRepo.create(requirementsData);

    //create a member to have a requirement
    let member1Data = new Members({
      about: 'Grandmother living alone with 2 cats, loves to bake, recently lost my husband of 52 years and finding living alone hard, especially with the situation in the country',
      name: 'Mary',
      address: '230-7324 Pebble Avenue, Markham, ON, L3K 47S Canada',
      mobile: '555-583-1956',
      email: 'knittedmary@gmail.com',
      username: 'mary38'
    });
    this.membersRepo.create(member1Data);

    //create a volunteer member
    let member2Data = new Members({
      about: 'Single Writer, out of work due to the pandemic. Looking to spend my time giving back, I promise to keep my distance, wear a mask, and smile with my eyes!',
      name: 'Alice',
      address: '111-4326 Nugget Road, Markham, ON, L4K 87S Canada',
      mobile: '543-777-1923',
      email: 'alice93@gmail.com',
      username: 'alicex'
    });
    this.membersRepo.create(member2Data);

    //create donator member
    let member3Data = new Members({
      about: 'IBM Software Developer',
      name: 'Joe',
      username: 'joecodes'
    });
    this.membersRepo.create(member3Data);

    //create donation entries
    let donationsArray = [
      { amount: 100, user: 'Jeff' },
      { amount: 200, user: 'Joe' },
      { amount: 3000, user: 'David', location: 'Mississauga' },
      { amount: 500, user: 'Bryan Smith' },
      { amount: 10, user: 'Greg Oconnor', location: 'Markham' },
      { amount: 10, user: 'Anonymous' },
      { amount: 50, user: 'Anonymous', location: 'Toronto' },
      { amount: 25, user: 'Lisa Jones' }
    ];
    donationsArray.forEach(donation => {
      this.donationsRepo.create(new Donations({ amount: donation.amount, donator_username: donation.user, location: donation.location }));
    });
    this.donationsRepo.create(new Donations({ amount: 200, donator_username: "Alex", location: "Toronto" }));

  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
