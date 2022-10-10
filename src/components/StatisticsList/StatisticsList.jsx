import PropTypes from 'prop-types';
import {StatisticsInfo, StatisticsItem, StatisticsLabel, StatisticsPercentage} from './StatisticsList.styled';

export const StatisticsList =({stats}) => {
     return (
     <StatisticsInfo>
      {stats.map(data =>(
        <StatisticsItem key={data.id}>
        <StatisticsLabel>{data.label}</StatisticsLabel>
        <StatisticsPercentage>{data.percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </StatisticsInfo>
   )
};

StatisticsList.propTypes = {
  id:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  percentage:PropTypes.string.isRequired,
};