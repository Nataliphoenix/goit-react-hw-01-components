import PropTypes from 'prop-types';
import {StatisticsInfo, StatisticsItem, StatisticsLabel, StatisticsPercentage} from './StatisticsList.styled';

export const StatisticsList =({stats}) => {
     return (
     <StatisticsInfo>
      {stats.map(({ id, label, percentage }) =>(
        <StatisticsItem key={id}>
        <StatisticsLabel>{label}</StatisticsLabel>
        <StatisticsPercentage>{percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </StatisticsInfo>
   )
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
    ),
  };