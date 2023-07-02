import React from "react";
import { styled } from "styled-components";

const Card = ({ value, title }) => {
    return (
        <Wrapper>
            <h2 className="num">
                <div className="line"></div>
                <div className="circle-left"></div>
                <div className="circle-right"></div>
                <div className="rotater">
                    <div className="front"></div>
                    <div className="back"></div>
                </div>
                <div className="top-half"></div>
                {value}
            </h2>
            <h3 className="text">{title}</h3>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    text-align: center;
    perspective: 500px;

    .num {
        padding: 2rem;
        background-color: var(--clr-gray-2);
        color: var(--clr-red);
        margin-bottom: 2rem;
        box-shadow: 0 10px 0 var(--clr-gray-4);
        border-radius: 15px;
        font-size: 3rem;
        position: relative;
        overflow: hidden;
        user-select: none;
        width: 120px;
        text-align: center;
    }
    .rotater,
    .top-half {
        width: 100%;
        border-radius: 15px 15px 0 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    .rotater {
        background-color: var(--clr-gray-3);
        z-index: 20;
        height: 100%;
        transform: rotateX(90deg);
        transform-origin: top;
    }
    //  .num:hover .rotater {
    //      animation: animate 5s;
    //  }
    .top-half {
        background-color: var(--clr-gray-4);
        height: 50%;
        opacity: 0.5;
        z-index: 15;
    }
    .circle-left,
    .circle-right,
    .line {
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
    .line {
        width: 100%;
        height: 0.5px;
        background-color: var(--clr-gray-4);
        left: 0;
    }
    .text {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 0.75rem;
        color: var(--clr-gray-1);
    }

    @keyframes animate {
        0% {
            // transform: translateX(90%);
        }

        50% {
            transform: translateX(0);
        }

        0% {
            transform: translateX(90%);
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
