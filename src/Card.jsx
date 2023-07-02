import React from "react";
import { styled } from "styled-components";

const Card = ({ value, title }) => {
    return (
        <Wrapper>
            <h2 className="num flip">
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
    }
    .top-half,
    .bottom-half {
        position: relative;
        height: 0.75em;
        line-height: 1;
        padding: 0.25em;
        border-radius: 8px;
        display: flex;
        overflow: hidden;

        background-color: var(--clr-gray-2);

        justify-content: center;
    }
    .top-half {
        border-bottom: 0.25px solid var(--clr-gray-4);
    }
    .bottom-half {
        align-items: flex-end;
    }
    .flip .top-slide,
    .flip .bottom-slide {
        position: absolute;
        width: 100%;
        height: 50%;
        overflow: hidden;
        line-height: 1;
        color: var(--clr-red);
        display: flex;
        justify-content: center;
        border-radius: 8px;
    }

    //  Top
    .flip .top-slide {
        align-items: flex-start;
        padding-top: 0.25em;
        transform: rotateX(0);
        transform-origin: bottom;
        background-color: var(--clr-gray-2);
        border-bottom: 1px solid var(--clr-gray-3);
    }
    .flip:hover .top-slide {
        animation: flip-bottom 0.2s ease-in;
    }

    // Bottom
    .flip .bottom-slide {
        top: 50%;
        padding-bottom: 0.25em;
        align-items: flex-end;
        transform: rotateX(90deg);
        transform-origin: top;
        background-color: var(--clr-gray-2);
        border-top: 1px solid var(--clr-gray-3);
    }

    .flip:hover .bottom-slide {
        animation: flip-top 0.2s ease-in 0.2s;
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
        left: -4px;
    }
    .circle-right {
        right: -4px;
    }
    .text {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 0.75rem;
        color: var(--clr-gray-1);
    }

    @keyframes flip-bottom {
        100% {
            transform: rotateX(90deg);
        }
    }
    @keyframes flip-top {
        100% {
            transform: rotateX(0);
        }
    }

    @media only screen and (max-width: 704px) {
        .num {
            padding: 1rem;
            font-size: 2rem;
            width: 70px;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
        .text {
            font-size: 0.5rem;
            letter-spacing: 2px;
        }
        .rotater,
        .top-half {
            border-radius: 5px 5px 0 0;
        }
        .circle-left,
        .circle-right {
            width: 7px;
            height: 7px;
        }
        .circle-left {
            left: -3px;
        }
        .circle-right {
            right: -3px;
        }
    }
`;

export default Card;
