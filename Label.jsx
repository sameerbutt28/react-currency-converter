import PropTypes from 'prop-types';

function Label({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions =[],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className=''
}) {
  return (
    <div>
      <h1> my name is {label} and my name is {amount} ali butt </h1>
    </div>
  );
}
Label.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.int,
  onAmountChange:PropTypes.int,
  onCurrencyChange:PropTypes.string,
  currencyOptions:PropTypes.Obj,
  selectedCurrency:PropTypes.string, 
  amountDisabled:PropTypes.bool,
  currencyDisabled:PropTypes.bool, 
  className:PropTypes.string,
  
};

export default Label;
