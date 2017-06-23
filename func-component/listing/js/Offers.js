'use strict';

function Offers({source}) {
  const request = new XMLHttpRequest();

  let output = null;

  /*
   ** Пытался исполнить получение через fetch() либо асинхронно XMLHttpRequest,
   ** но что-то безуспешно, react не хочет ждать, хочет получить мгновенный return
   ** Поэтому пока только синхронное получение, хоть оно и Deprecated.
   */
  request.open('GET', source, false);
  request.send(null);

  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    
    output = data.map(offer => 
      <Offer
        key={offer.listing_id}
        url={offer.url}
        mainImage={offer.MainImage}
        title={offer.title}
        currencyCode={offer.currency_code}
        price={offer.price}
        quantity={offer.quantity}
      />
    );
  }

  return (
    <div className='item-list'>
      { output }
    </div>
  );
}