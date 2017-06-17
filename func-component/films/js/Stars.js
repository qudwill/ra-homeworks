'use strict';

function Stars({count}) {
  const starsOutput = [];

  for (let i = 0; i < count; i++) {
    starsOutput.push(<Star key={i} />);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      { starsOutput }
    </ul>
  );
}
