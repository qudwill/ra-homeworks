'use strict';

function OfferImage({url, image}) {
  return (
    <div className='item-image'>
      <a href={url}>
        <img src={image} />
      </a>
    </div>
  );
}