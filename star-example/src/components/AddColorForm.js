import React, { useRef, useState } from "react";
import { useInput } from "../customHook/useInput";
import { useColors } from "../customHook/color-hooks";

export default function AddColorForm({ onNewColor = (f) => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = (e) => {
        console.log({ ...titleProps });
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);

        resetTitle("");
        resetColor("#000000");
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    );
}
