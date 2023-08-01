import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import {Button, BtnList, BtnItem} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options)
    return (
        <>
            <BtnList>
                {options.map(option => {
                    return (
                        <BtnItem key={option}>
                            <Button
                                type="button"
                                name={option}
                                onClick={() => onLeaveFeedback(option)}
                                >
                                {(option.toUpperCase())}
                            </Button>
                        </BtnItem>
                    )
                })}
            </BtnList>    
        </>
    );
};

FeedbackOptions.propTypes = {
    options: arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };