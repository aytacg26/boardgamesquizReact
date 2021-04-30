import React, { Fragment } from 'react';

import CheckBox from '../../UI/CheckBox/CheckBox';
import Radio from '../../UI/Radio/Radio';

const Choices = ({ answers, qType, onChange }) => {
  console.log('choices...');

  switch (qType) {
    case 'multiplechoice-single':
      return answers.map((answer) => (
        <Radio
          key={answer.a_id}
          label={answer.caption}
          id={answer.a_id}
          value={answer.a_id}
          name={qType}
          onChange={onChange}
        />
      ));

    case 'truefalse':
      return (
        <Fragment>
          <Radio
            label='True'
            id='100'
            value={true}
            name={qType}
            onChange={onChange}
          />
          <Radio
            label='False'
            id='110'
            value={false}
            name={qType}
            onChange={onChange}
          />
        </Fragment>
      );

    case 'multiplechoice-multiple':
      return answers.map((answer) => (
        <CheckBox
          key={answer.a_id}
          label={answer.caption}
          id={answer.a_id}
          value={answer.a_id}
          name={qType}
          onChange={onChange}
        />
      ));

    default:
      return <Fragment>{null}</Fragment>;
  }
};

export default Choices;
