import { css } from "@emotion/react";

// display는 안에 있는 요소의 특성을 바꿔는 것 -> ex) inline 하면 안의 요소 특성이 모두 inline으로 바뀜
export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

// 모바일 기준 크기
export const frame = css`
    border: 5px solid #000000;
    border-radius: 40px;
    width: 375px;
    height: 812px;
    background-color: white;
    overflow: hidden;
`;

export const topBar = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

export const topBarCenter = css`
    border-radius: 10px;
    width: 45%;
    height: 25px;
    background-color: black;
`;