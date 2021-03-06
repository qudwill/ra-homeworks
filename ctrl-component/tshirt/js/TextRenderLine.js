const TextRenderLine = ({value, onChange}) => {
	return (
		<div className="type-text">
			<textarea
				name="text"
				id="font-text"
				cols="30"
				rows="2"
				placeholder="Введите текст для футболки"
				value={value}
				onChange={(evt) => onChange(evt.currentTarget.value.toLowerCase().replace(/[^a-z]/gi,''))}
			/>
		</div>
	);
};
