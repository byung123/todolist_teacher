/** @jsxImportSource @emotion/react */
import DashboardListItem from "../DashboardListItem/DashboardListItem";
import Icon from "../Icon/Icon";
import * as s from "./style";
import { BsCalendar4Week, BsCalendarEvent } from "react-icons/bs";

//컴포넌트 하나 더 만듦 -> 따로 빼지않고 여기다 만들어도 될것 같아서 만든다고 하심
function Menu({ icon, title, count, color }) {
    return (
        <div css={s.menuContainer}>
            <div css={s.menuTop}>
                <Icon color={color}>{icon}</Icon>
                <p>{count}</p>
            </div>
            <h3 css={s.menuBottom}>
                {title}
            </h3>
        </div>
    )
}

function MenuList(props) {
    return (
        <DashboardListItem title={"Menu"}>
            <div css={s.layout}>
                <Menu 
                    icon={<BsCalendar4Week />}
                    color={"#444444"} 
                    title={"전체"} 
                    count={99} />
                <Menu 
                    icon={<BsCalendarEvent  />}
                    color={"#009e2e"} 
                    title={"오늘"} 
                    count={6} />
                <Menu 
                    icon={<BsCalendar4Week />}
                    color={"#ff2f2f"} 
                    title={"급한일"}
                    count={10} />
                <Menu 
                    icon={<BsCalendar4Week />}
                    color={"#64289c"} 
                    title={"중요한 일"} 
                    count={31} />
            </div>
        </DashboardListItem>
    );
}

export default MenuList;