import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider.jsx";

const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        // inputRef.current - объект по типу возвращаемого объекта getElementById в ванильном JS
        console.log(inputRef.current);
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-4"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary mx-2"
                onClick={handleClickWidth}
            >
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
