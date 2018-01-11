const FontSelector = ({fonts, selectedFont, onSelect}) => {
  return (
    <div className="font-picker">
      {fonts.map(font => (
      	<div className="grid center font-item">
      		<input
      			type="radio"
      			name="font"
      			value={font.name}
      			data-path={font.path}
      			id={font.name}
      			onChange={(evt) => onSelect({
      				name: evt.currentTarget.value,
      				path: evt.currentTarget.attributes.getNamedItem('data-path').value
      			})}
      		/>
      		<label forHtml={font.name} className="grid-1">
      			<PictureFont text={font.name} path={font.path}/>
      		</label>
      	</div>
      ))}
    </div>
  )
};