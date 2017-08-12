function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const Charts = ({data, labels, colors, max, type}) => (
  <div className={type === 'horizontal' ? 'Charts horizontal' : 'Charts'}>
    {
      data.map((serie, serieIndex) => {
        let sortedSerie = serie.slice(0);
        let sum;

        sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <ChartsSerie
            serie={serie}
            serieIndex={serieIndex}
            labels={labels}
            colors={colors}
            max={max}
            type={type}
            sum={sum}
            sortedSerie={sortedSerie}
            key={serieIndex}
          />     
        );
      })
    }
  </div>
);

const ChartsSerie = ({serie, serieIndex, labels, colors, max, type, sum, sortedSerie}) => (
  <div className={`Charts--serie ${type}`} style={type === 'horizontal' ? {height: 'auto'} : {height: 250}}>
    <label>{ labels[serieIndex] }</label>
    {
      serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        let size;

        let style = {
          backgroundColor: color,
          zIndex: item
        };

        switch (type) {
          case 'default':
            size = item / (max) * 100;
            style['opacity'] = item / max + .05;
            style['height'] = size + '%';

            break;

          case 'stacked':
            size = item / sum * 100;
            style['opacity'] = 1;
            style['height'] = size + '%';

            break;

          case 'layered':
            size = item / (max) * 100;
            style['opacity'] = item / max + .05;
            style['height'] = size + '%';
            style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';

            break;

          case 'horizontal':
            size = item / (max) * 100;
            style['opacity'] = item / max + .05;
            style['width'] = size + '%';
        }

        return (
          <ChartItem style={style} color={color} item={item} type={type} key={itemIndex} />
        );
      })
    }
  </div>
);

const ChartItem = ({style, color, item, type}) => (
  <div className={`Charts--item ${type}`} style={style}>
    <b style={{ color: color }}>{ item }</b>
  </div>
);

const Legend = ({labels, colors}) => (
  <div className="Legend">
    {
      labels.map((label, labelIndex) => {
        return (
          <div>
            <span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}} />
            <span className="Legend--label">{label}</span>
          </div>
        );
      })
    }
  </div>
);

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

		return (
			<section>
        <Charts data={data} labels={labels} colors={colors} max={max} type='default' />
        <Charts data={data} labels={labels} colors={colors} max={max} type='stacked' />
        <Charts data={data} labels={labels} colors={colors} max={max} type='layered' />
        <Charts data={data} labels={labels} colors={colors} max={max} type='horizontal' />
        <Legend labels={labels} colors={colors} />
			</section>
		);
	}
}
