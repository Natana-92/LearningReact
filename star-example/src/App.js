import "./App.css";
import React, { useState } from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import Checkbox from "./components/Checkbox";

function App() {
    return (
        <>
            <Checkbox />
            <AddColorForm />
            <ColorList />
        </>
    );
}

export default App;
