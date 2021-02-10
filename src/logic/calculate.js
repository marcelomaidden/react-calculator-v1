import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case '+/-':
      return { total: total * -1, next: next * -1, operation };
    case '%':
      return { total, next: next / 100, operation };
    default:
      return operate(total, next, buttonName);
  }
};

export default calculate;
