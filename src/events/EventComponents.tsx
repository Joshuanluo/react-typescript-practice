const EventComponent: React.FC = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	const handleDragStart = (event:React.DragEvent<HTMLDivElement>) => {
		console.log(event);
	};

	return (
		<div>
			<input onChange={handleChange} />
			<div draggable onDragStart={handleDragStart}>
				Drag Me!
			</div>
		</div>
	);
};

export default EventComponent;
