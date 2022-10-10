import {StatisticsContainer,TitleWrapper} from './Statistics.styled';

export const Statistics = ({title, children})=>{
 return (
    <StatisticsContainer>
        {title && <TitleWrapper>{title}</TitleWrapper>}
        {children}
    </StatisticsContainer>
 )
}

