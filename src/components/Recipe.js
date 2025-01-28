import React from "react";
import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, " ")}>
            <h1>{name}</h1>
            <IngredientList list={ingredients}></IngredientList>
            <Instructions title="조리절차" steps={stpes} />
        </section>
    );
}
