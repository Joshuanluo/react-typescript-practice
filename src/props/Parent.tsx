import { Child } from "./Child";

const Parent = () => {
	return <Child color="red" onClick={() => console.log("just clicked!!")} />;
};

export default Parent;
