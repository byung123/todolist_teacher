/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import * as s from "./style";
import { TbRuler2Off } from "react-icons/tb";
import ReactModal from "react-modal";

function MainContainer({ children }) {
    const [ scroll, setScroll ] = useState({
        startY: 0,
        isDown: false
    });
    const containerRef = useRef();

    const handleDown =  useCallback((e) => setScroll({
        startY: e.clientY,
        isDown: true
    }), []); 

    const handleUp = useCallback((e) => setScroll({
        startY: 0,
        isDown: false
    }), []); 

    // 안하기로 함
    const handleMove = (e) => {
        if(scroll.isDown) {
            console.log({s: containerRef.current});

            // 드래그 했을 때 스크롤바 크기 만큼은 드래그가 안되기 때문에 설정해줘야함.
            // scrollbarHeight : 스크롤바 영역의 높이
            // offsetHeight : 요소의 높이 즉, container의 높이
            const MAX_TOP = containerRef.current.scrollHeight - containerRef.current.offsetHeight;
            const MIN_TOP = 0;
            let moveY = e.clientY - scroll.startY;

            //moveY를 0보다 안내려가게끔
            if(moveY < MIN_TOP) {
                moveY = MAX_TOP
            }

            const scrollTop = containerRef.current.scrollTop;

            containerRef.current.scrollTop = scrollTop + (moveY * -1); // -를 붙여줘야 scrollTop이 올라간다
        }
    }
    // clientY : 

    return (
        <div css={s.container} 
        onMouseMove={handleMove}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        ref={containerRef}>
            {children}
        </div>
    );
}

export default MainContainer;