'use strict';

function Offer({key, url, mainImage, title, currencyCode, price, quantity}) {
  return (
    <div className='item' key={key}>
      <OfferImage url={url} image={mainImage.url_170x135} />
      <OfferDetails title={title} price={price} currencyCode={currencyCode} quantity={quantity} />
    </div>
  );
}