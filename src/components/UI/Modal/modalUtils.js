export const getClassByType = (classes, type = '') => {
  switch (type?.toLowerCase()) {
    case 'success':
      return ` ${classes.Success}`;

    case 'danger':
      return ` ${classes.Danger}`;

    case 'warning':
      return ` ${classes.Warning}`;

    default:
      return ` ${classes.Primary}`;
  }
};
