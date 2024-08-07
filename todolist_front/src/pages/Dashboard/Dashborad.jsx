/** @jsxImportSource @emotion/react */
import DateTitle from "../../components/DashBoard/DateTitle/DateTitle";
import MenuList from "../../components/DashBoard/MenuList/MenuList";
import Search from "../../components/DashBoard/Search/Search";
import RegisterTodoButton from "../../components/RegisterTodoButton/RegisterTodoButton";
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";

function Dashborad(props) {
    return (
        <div css={s.layout}>
            <header>
                <Search />
            </header>
            <main>
                <DateTitle />
                <MenuList />
            </main>
            <footer>
                <RegisterTodoButton />
            </footer>
        </div>
    );
}

export default Dashborad;