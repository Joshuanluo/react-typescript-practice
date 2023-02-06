import ReactDOM from "react-dom/client";
import EventComponent from "./events/EventComponents";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";

const App = () => {
	return (
		<div>
			<EventComponent />
		</div>
	);
};

const root = document.querySelector("#root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
