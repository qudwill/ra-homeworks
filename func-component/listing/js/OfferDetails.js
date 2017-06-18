'use strict';

function OfferDetails({title, price, currencyCode, quantity}) {
  
  /*
   ** Подготавливаем вывод цены
   */

  let renderedPrice = null;

  (currencyCode === 'USD') ? (renderedPrice = '$' + price) :
  (currencyCode === 'EUR') ? (renderedPrice = '€' + price) :
  (currencyCode === 'GBP') ? (renderedPrice = price + ' ' + currencyCode) :
  (renderedPrice = currencyCode + ' ' + price);

  /*
   ** Подготавливаем класс для остатка товаров
   */

  let quantityClassName = 'item-quantity level-';

  (quantity <= 10) ? (quantityClassName += 'low') :
  (quantity <= 20) ? (quantityClassName += 'medium') :
  (quantity > 20) ? (quantityClassName += 'high') :
  (quantityClassName += 'low');

  return (
    <div className='item-details'>
      <p className='item-title'>{ (title.length > 50) ? ( title.substring(0, 50) + '...' ) : title }</p>
      <p className='item-price'>{ renderedPrice }</p>
      <p className={ quantityClassName }>{ quantity } left</p>
    </div>
  );
}