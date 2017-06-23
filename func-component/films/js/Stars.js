'use strict';

function Stars({count}) {
  if ( (count < 1) || (count > 5) || !Number.isInteger(count) ) {
    return null;
  } else {
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(i + 1);
    }

    const starsOutput = arr.map(key => <Star key={key} />);

    return (
      <ul className="card-body-stars u-clearfix">
        { starsOutput }
      </ul>
    );
  }
}
