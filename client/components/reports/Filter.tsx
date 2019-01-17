import React, { Children } from 'react';
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

const Field = (props: {label: String, children: Object}) => {
  return (
    <Layout style={{width: '500px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px'}}>
      <div style={{width: '100%', display: 'flex', flexDirection: 'row'}} >
        <div style={{width: '25%', textAlign: 'right', paddingRight: '10px'}}>
          {props.label}
        </div>
        <div style={{width: '75%'}}>
          {props.children}
        </div>
      </div>
    </Layout>
  )
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
          <Field label='Date Range: '>
            <DatePicker.RangePicker onChange={this.onChangeHandler}/>
          </Field>
          <Field label='Show Optins: '>
            <Switch onChange={(e) => this.props.onDisplayChange({isOptinsVisible: e})} checked={this.props.optinsVisible}/>
          </Field>
          <Field label='Show Recipients: '>
            <Switch onChange={(e) => this.props.onDisplayChange({isRecipientsVisible: e})} checked={this.props.recipientsVisible} />
          </Field>
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
