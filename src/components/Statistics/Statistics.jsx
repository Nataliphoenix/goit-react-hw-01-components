import PropTypes from 'prop-types';
import {StatisticsContainer,TitleWrapper, StatisticsInfo, 
    StatisticsItem, StatisticsLabel, StatisticsPercentage} from './Statistics.styled';

export const Statistics = ({title, stats})=>{
 return (
    <StatisticsContainer>
        {title && <TitleWrapper>{title}</TitleWrapper>}

        <StatisticsInfo>
        {stats.map(({ id, label, percentage }) =>(
        <StatisticsItem key={id}>
        <StatisticsLabel>{label}</StatisticsLabel>
        <StatisticsPercentage>{percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </StatisticsInfo>
    
    </StatisticsContainer>
 )
}

Statistics.propTypes = {
  title:PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
      ),
    };