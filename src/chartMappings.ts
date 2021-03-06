import * as moment from 'moment'

export const axisChartMappings = {
  calls_per_day: {
    parse: function(options) {
      this.name = moment(this.name, 'YYYY-MM-DD').format(options.dateFormat);
    },
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'Answered',
        xAxis: false,
      },
      {
        key: 'Missed',
        xAxis: false,
      }
    ]
  },
  daily_call_distribution: {
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'Answered',
        xAxis: false,
      },
      {
        key: 'Missed',
        xAxis: false,
      }
    ]
  },
  call_length_distribution: {
    sort: false,
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'val',
        name: 'Calls',
        xAxis: false,
      }
    ]
  },
  calls_top_attributions: {
    columns: [
      {
        key: 'name',
        xAxis: true,
      },
      {
        key: 'val',
        name: 'Calls',
        xAxis: false,
      }
    ]
  }
};

export const listChartMappings = {
  top_customers_by_calls: {
    columns: [
      {
        key: 'name',
        name: true
      },
      {
        key: 'val',
        name: false
      }
    ]
  },
  geographic_origin: {
    columns: [
      {
        key: 'name',
        name: true
      },
      {
        key: 'val',
        name: false
      }
    ]
  }
};