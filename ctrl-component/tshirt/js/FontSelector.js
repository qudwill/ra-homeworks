const FontSelector = ({fonts, selectedFont, onSelect}) => {
  const demoText = 'abcd';

  return (
    <div className="font-picker">
      {fonts.map(({name, path}) => (
      	<div className="grid center font-item">
      		<input
      			type="radio"
      			name="font"
      			value={name}
      			data-path={path}
      			id={name}
      			onChange={(evt) => onSelect({
      				name: evt.currentTarget.value,
      				path: evt.currentTarget.attributes.getNamedItem('data-path').value
      			})}
      		/>
      		<label htmlFor={name} className="grid-1">
      			<PictureFont text={demoText} path={path}/>
      		</label>
      	</div>
      ))}
    </div>
  )
};