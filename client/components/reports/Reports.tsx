import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb, Card } from 'antd';

import Filter from './Filter';
import Chart from './Chart';
import { fetchOptins, fetchRecipients } from '../../store/actions/reports';

const { Header, Content, Footer } = Layout;

interface ReportsProp {
  optins: Array<Object>,
  recipients: Array<Object>,
  fetchOptins: Function,
  fetchRecipients: Function,
}

class Reports extends React.PureComponent<ReportsProp> {
  state = {
    isOptinsVisible: true,
    isRecipientsVisible: true,
  }

  componentDidMount() {
    this.props.fetchOptins({start: '2018-01-01', end: '2018-01-07'})
    this.props.fetchRecipients({start: '2018-01-01', end: '2018-01-07'})
  }

  onDisplayChangeHandler = (visibilityUpdate) => {
    this.setState(prev => ({
      ...prev,
      ...visibilityUpdate
    }))
  }

  render() {
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0, fontSize: '20px', fontWeight: 'bold', paddingLeft: '10px' }} >Reports</Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
            <Breadcrumb.Item>Message Receipts & Optins</Breadcrumb.Item>
          </Breadcrumb>
          <Filter onDisplayChange={this.onDisplayChangeHandler}
           optinsVisible={this.state.isOptinsVisible} recipientsVisible={this.state.isRecipientsVisible}/>
          <Chart optins={this.props.optins} recipients={this.props.recipients} 
           optinsVisible={this.state.isOptinsVisible} recipientsVisible={this.state.isRecipientsVisible}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ShopMessage ©2018</Footer>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  optins: state.reports.optins,
  recipients: state.reports.recipients,
});

const mapDispatchToProps = dispatch => ({
  fetchOptins: dateRange => dispatch(fetchOptins(dateRange)),
  fetchRecipients: dateRange => dispatch(fetchRecipients(dateRange))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
