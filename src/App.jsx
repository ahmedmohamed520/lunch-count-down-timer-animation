import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "./Card";
import { timer } from "./utils";

const App = () => {
    const [remindTime, setRemindTime] = useState(timer());

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer()[0].value >= 0) setRemindTime(timer());
        }, 1000);
    }, []);
    return (
        <Wrapper>
            <h1 className="title">We're launching soon</h1>
            {remindTime[0].value >= 0 ? (
                <div className="container">
                    {remindTime.map((obj) => {
                        return <Card key={obj.id} {...obj} />;
                    })}
                </div>
            ) : (
                <h1 className="done">We're here</h1>
            )}
            <div className="footer">
                <a href="/" className="footer-link">
                    <img src="images/icon-facebook.svg" alt="facebook" />
                </a>
                <a href="/" className="footer-link">
                    <img src="images/icon-pinterest.svg" alt="facebook" />
                </a>
                <a href="/" className="footer-link">
                    <img src="images/icon-instagram.svg" alt="facebook" />
                </a>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 600px;
    max-width: 90%;
    margin: 60px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 60px);
    .title {
        letter-spacing: 5px;
        text-transform: uppercase;
        margin-bottom: 4rem;
        color: #fff;
        font-size: 1.5rem;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }
    .done {
        text-align: center;
        font-size: 2rem;
        letter-spacing: 4px;
        color: #fff;
    }
    .footer {
        display: flex;
        align-items: center;
        margin-top: auto;
        padding: 2rem;
    }
    .footer-link {
        transition: 0.2s all;
        display: inline-block;
        padding: 0.5rem 1rem;
    }
    .footer-link:hover {
        filter: brightness(0) saturate(100%) invert(58%) sepia(21%) saturate(4335%) hue-rotate(308deg)
            brightness(97%) contrast(104%);
    }

    @media only screen and (max-width: 704px) {
        .container {
            gap: 1rem;
        }
    }
`;
export default App;
