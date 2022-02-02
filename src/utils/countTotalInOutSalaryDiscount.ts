export const countTotalInOutSalaryDiscount = (
  discountArray: [],
  salary: number
) => {
  const totalDaysOfMonth = 30;
  const totalPercentage = discountArray.reduce((acc: number, curr: any) => {
    return acc + curr.discount;
  }, 0);
  return Math.round((salary / totalDaysOfMonth / 100) * totalPercentage);
};

export const calculateAbcenseDiscount = (numberOfDayes: number) => {
  return numberOfDayes * 6;
};
