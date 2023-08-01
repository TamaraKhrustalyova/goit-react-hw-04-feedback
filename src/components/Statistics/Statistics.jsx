import PropTypes from 'prop-types';
import { normalizeText } from 'components/utils/NormalizeText';
import {StatItem} from './Statistics.styled'

export const Statistics = props => {
    // console.log(props)
    // console.log(Object.keys(props))
    return (
        <ul>
            {Object.keys(props).map(item => {
                // console.log(item)
                console.log(props[item])
                return (
                    <StatItem key={item}> 
                        {normalizeText(item)}: {props[item]}
                    </StatItem>  
                );
            })}
        </ul>
    );
};


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };