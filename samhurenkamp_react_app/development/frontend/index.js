import React from "react";
import ReactDOM from "react-dom/client";
import './styles/stylesheet.scss'

class Builder extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}


const element = <Builder name="Sam" />;

ReactDOM.createRoot(document.getElementById("main")).render(element);
