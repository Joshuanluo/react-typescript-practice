import { useState } from "react";

const users = [
	{ name: "Josh", age: 20 },
	{ name: "Tom", age: 25 },
	{ name: "Jerry", age: 30 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState("");
    const [user,setUser]=useState<{name:string,age:number}|undefined>()
	const handleClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});
		setUser(foundUser);
	};
	return (
		<div>
			<h3>User Search</h3>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleClick}>Search</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
		</div>
	); 
};

export default UserSearch;
