'use strict';

function OfferDetails({title, price, currencyCode, quantity}) {
  
  /*
   ** Подготавливаем вывод цены
   */

  let renderedPrice = null;

  if (currencyCode === 'USD') {
    renderedPrice = '$' + price;
  } else if (currencyCode === 'EUR') {
    renderedPrice = '€' + price;
  } else {
    renderedPrice = price + ' ' + currencyCode
  }

  /*
   ** Подготавливаем класс для остатка товаров
   */

  let quantityClassName = 'item-quantity level-';

  if (quantity <= 10) {
    quantityClassName += 'low';
  } else if (quantity <= 20) {
    quantityClassName += 'medium';
  } else if (quantity > 20) {
    quantityClassName += 'high';
  } else {
    quantityClassName += 'low';
  }

  return (
    <div className='item-details'>
      <p className='item-title'>{ (title.length > 50) ? ( title.substring(0, 50) + '...' ) : title }</p>
      <p className='item-price'>{ renderedPrice }</p>
      <p className={ quantityClassName }>{ quantity } left</p>
    </div>
  );
}