import "./App.css";
import React, { useState } from "react";
import ColorList from "./components/ColorList";
import colorData from "./data/colors.json";

function App() {
    const [colors] = useState(colorData.colors);

    return <ColorList colors={colors} />;
}

export default App;
