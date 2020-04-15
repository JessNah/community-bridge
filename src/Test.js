import React from 'react';
import { baseUrl } from './config';

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      totalNumberOfDonation: 0,
      totalDonationValue: 0
    }
  }

  async componentDidMount() {
    const [ totalNumberOfDonations, totalDonationValue ] = await Promise.all([
      fetch(`${baseUrl}/donations/count`).then(res => res.json()).catch(err => err),
      fetch(`${baseUrl}/donations`).then(res => res.json()).catch(err => err)
    ]);

    this.setState({ 
      totalNumberOfDonations: totalNumberOfDonations.count || 0,
      totalDonationValue: Array.isArray(totalDonationValue) ? 
      totalDonationValue.reduce((sum, curr) => sum + curr.total, 0) : 0,
    });
  }



  render() {
    return (
    <div>
      <h3>Total Number Of Sales</h3>
        { this.state.totalNumberOfDonation }
      <h3>Total Number Of Sales</h3>
        { this.state.totalDonationValue }
    </div>
    );
  }
}
export default Test;