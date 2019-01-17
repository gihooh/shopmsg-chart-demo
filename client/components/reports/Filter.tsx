import React from 'react';
import { connect } from 'react-redux';
import { Layout, DatePicker, Switch } from 'antd';
import { fetchOptins, fetchRecipients } from '../../store/actions/reports';

const { Content } = Layout;

interface FilterProps {
  fetchOptins: Function,
  fetchRecipients: Function,
  onDisplayChange: Function,
  recipientsVisible: boolean,
  optinsVisible: boolean
}

class Filter extends React.PureComponent<FilterProps> {
  onChangeHandler = (e) => {
    let [start, end] = e;
    start = start.format('YYYY-MM-DD');
    end = end.format('YYYY-MM-DD');


    this.props.fetchOptins({start, end});
    this.props.fetchRecipients({start, end});
  }

  render() {
    return (
      <Layout>
        <Content style={{display: 'flex', flexDirection: 'column'}}>
          <Layout style={{width: '500px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            Date Range: <DatePicker.RangePicker onChange={this.onChangeHandler}/>
          </Layout>
          <Layout style={{width: '200px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            Show Optins: <Switch onChange={(e) => this.props.onDisplayChange({isOptinsVisible: e})} checked={this.props.optinsVisible}/>
          </Layout>
          <Layout style={{width: '200px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          Show Recipients: <Switch onChange={(e) => this.props.onDisplayChange({isRecipientsVisible: e})} checked={this.props.recipientsVisible} />
          </Layout>
        </Content>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOptins: dateRange => dispatch(fetchOptins(dateRange)),
  fetchRecipients: dateRange => dispatch(fetchRecipients(dateRange))
})

export default connect(null, mapDispatchToProps)(Filter);
