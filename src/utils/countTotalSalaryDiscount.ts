export const countTotalSalaryDiscount = (discountArray: [], salary: number) => {
  const totalDaysOfMonth = 30;
  const totalPercentage = discountArray.reduce((acc: number, curr: any) => {
    return acc + curr.discount;
  }, 0);
  return (salary / totalDaysOfMonth / 100) * totalPercentage;
};
