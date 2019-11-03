const INC = 'INC';
const DEC = 'DEC';

const initialValues = {
  count: 0
}

export default (state = initialValues, action) => {
  switch (action.type) {
    case INC : 
      return { count: state.count + 1 };
    case DEC : 
      return { count: state.count - 1 };
    default :
      return state;
  };
};

export const increment = () => {
  return {
    type: INC
  }
};

export const decrement = () => {
  return {
    type: DEC
  }
};
