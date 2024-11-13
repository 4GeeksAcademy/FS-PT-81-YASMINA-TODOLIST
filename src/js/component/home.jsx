import React, { useState } from "react";

import { ImCross } from "react-icons/im";

//create your first component
const Home = () => {
	const [tool, setTool] = useState('');
	const [toolList, setToolList] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		if (tool.trim()) {
			setToolList([...toolList, { label: tool }]);
			setTool("");
		}
	};

	const handleChange = e => setTool(e.target.value)

	const handleDelete = (index) => {
		setToolList(toolList.filter((_, i) => i !== index))
	}
	return (
		<div className="container">
			<div className="flower-headding">
				<h1 className="tools" >TOOLS</h1>
				<img className="flower" src="https://img.freepik.com/fotos-premium/primer-plano-flores-rosadas-contra-fondo-blanco_1048944-20536012.jpg?w=1380" alt="flores" />

				<div className="wrapper">
					<form onSubmit={handleSubmit}>
						<input className="placetool" type="text" value={tool} onChange={handleChange} placeholder="Add a new tool" />
					</form>
					<ul>
						{toolList.length > 0 ? (
							toolList.map((tool, i) => (<li className="text-item" key={i}>{tool.label} <span className="imcross" onClick={() => handleDelete(i)}><ImCross /></span> </li>))
						)
							: (<h5 className="h5">Add some Tools</h5>)}
					</ul>
					<p className="item"> {toolList.length} {toolList.length === 1 ? "item" : "items"} </p>
				</div>

			</div>
		</div>
	);
};

export default Home;
