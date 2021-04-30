import React from 'react';

import classes from './Modal.module.css';
import { getClassByType, Icon, icons } from '../../../utils/utils';

const ModalOverlay = ({ type, show, title, children, icon, onClick }) => {
  const headerClass = classes.Header + getClassByType(classes, type);

  return (
    <div className={show ? `${classes.Modal} ${classes.Show}` : classes.Modal}>
      <div className={headerClass}>
        <span>
          <Icon name={icon} style={{ fontSize: 25 }} />
        </span>
        <span>{title}</span>
        {onClick && (
          <span onClick={onClick} className={classes.CloseModal}>
            <Icon name={icons.close} />
          </span>
        )}
      </div>
      <div className={classes.Content}>{children}</div>
    </div>
  );
};

export default ModalOverlay;
