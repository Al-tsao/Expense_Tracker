function amountTotal(eachValue) {
  var total = 0
  eachValue.forEach((value) => {
    total += Number(value.amount)
  });
  return total
}
module.exports = amountTotal
// amountTotal()