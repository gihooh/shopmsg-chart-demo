import React from 'react';
import { Chart, Axis, Tooltip, Geom, Legend } from 'bizcharts';

const cols = {
  count: { min: 0 },
  date: { range: [0, 1] },
};

interface ReportsChartProp {
  optins: Object[],
  recipients: Object[],
  recipientsVisible: Boolean,
  optinsVisible: Boolean
}

class ReportsChart extends React.Component<ReportsChartProp> {
  render() {
    const {recipientsVisible, optinsVisible} = this.props;
    let data: Object[] = []
    if (recipientsVisible) {
      data = [...data, ...this.props.optins]
    }
    if (optinsVisible) {
      data = [...data, ...this.props.recipients]
    }

    return (
      <Chart
        height={400}
        data={data}
        scale={cols}
        forceFit
      >
        <Axis name="date" />
        <Axis name="count" />
        <Legend />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom type="line" position="optinsDate*optinsCount" size={1} color="red" />
        <Geom type="line" position="recipientsDate*recipientsCount" size={1} color="blue" />
      </Chart>
    );
  }
}

export default ReportsChart;
