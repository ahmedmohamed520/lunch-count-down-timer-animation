import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Card = ({ value, title, prevValue }) => {
    const [flip, setFlip] = useState(value !== prevValue);

    useEffect(() => {
        setFlip(false);
        if (value !== prevValue) setFlip(true);
        else setFlip(false);
    }, [value, prevValue]);
    return (
        <Wrapper>
            <h2 className={`num ${flip && "flip"}`}>
                <div className="line"></div>
                <div className="circle-left"></div>
                <div className="circle-right"></div>

                <div className="top-half">
                    {value}
                    <div className="overlay"></div>
                </div>
                <div className="bottom-half">{value}</div>

                <div className="top-slide">
                    {value}
                    <div className="overlay"></div>
                </div>
                <div className="bottom-slide">{value}</div>
            </h2>
            <h3 className="text">{title}</h3>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    text-align: center;
    perspective: 500px;

    .num {
        position: relative;
        color: var(--clr-red);
        margin-bottom: 2rem;
        box-shadow: 0 10px 0 var(--clr-gray-4);
        font-size: 3rem;
        overflow: hidden;
        user-select: none;
        text-align: center;

        display: flex;
        flex-direction: column;
        width: 120px;
        border-radius: 8px;
    }
    .top-half,
    .bottom-half {
        position: relative;
        height: 0.75em;
        line-height: 1;
        padding: 0.5em;
        display: flex;
        overflow: hidden;
        color: var(--clr-red);

        background-color: var(--clr-gray-2);

        justify-content: center;
    }
    .top-half {
        border-bottom: 0.25px solid var(--clr-gray-4);
        border-radius: 8px 8px 0 0;
    }
    .bottom-half {
        align-items: flex-end;
        border-radius: 0 0 8px 8px;
    }
    .top-slide,
    .bottom-slide {
        position: absolute;
        width: 100%;
        height: 50%;
        overflow: hidden;
        line-height: 1;
        color: var(--clr-red);
        display: flex;
        justify-content: center;
    }

    //  Top
    .top-slide {
        align-items: flex-start;
        padding-top: 0.5em;
        transform: rotateX(0);
        transform-origin: bottom;
        background-color: var(--clr-gray-2);
        border-bottom: 1px solid var(--clr-gray-3);
        border-radius: 8px 8px 0 0;
    }

    .flip .top-slide {
        animation: flip-bottom 1s ease-in infinite;
    }

    // Bottom
    .bottom-slide {
        top: 50%;
        padding-bottom: 0.5em;
        align-items: flex-end;
        transform: rotateX(90deg);
        transform-origin: top;
        background-color: var(--clr-gray-2);
        border-top: 1px solid var(--clr-gray-3);
        border-radius: 0 0 8px 8px;
    }

    .flip .bottom-slide {
        animation: flip-top 1s ease-in 0.2s infinite;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.25;
        z-index: 15;
        background-color: var(--clr-gray-4);
    }
    // Decoration
    .circle-left,
    .circle-right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }

    .circle-left,
    .circle-right {
        width: 10px;
        height: 10px;
        background-color: var(--clr-gray-4);
        border-radius: 50%;
    }
    .circle-left {
        left: -5px;
    }
    .circle-right {
        right: -5px;
    }
    .text {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 0.75rem;
        color: var(--clr-gray-1);
    }

    @keyframes flip-bottom {
        20% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(90deg);
        }
    }
    @keyframes flip-top {
        20% {
            transform: rotateX(0);
        }
        100% {
            transform: rotateX(0);
        }
    }

    @media only screen and (max-width: 704px) {
        .num {
            width: 75.2px;
            font-size: 2.5rem;
        }
        .text {
            font-size: 0.5rem;
            letter-spacing: 2px;
        }
        .top-half,
        .bottom-half {
            padding: 0.25em;
        }
        .top-slide {
            padding-top: 0.25em;
        }
        .bottom-slide {
            padding-bottom: 0.25em;
        }
        //   Decoration
        .circle-left,
        .circle-right {
            width: 5px;
            height: 5px;
        }
        .circle-left {
            left: -2px;
        }
        .circle-right {
            right: -2px;
        }
    }
`;

export default Card;
