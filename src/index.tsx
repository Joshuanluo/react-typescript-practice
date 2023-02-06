import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
	return (
		<div>
			<GuestList />
            <UserSearch />
		</div>
	);
};

const root = document.querySelector("#root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
