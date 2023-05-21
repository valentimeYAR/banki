import React from 'react';
import s from './Header.module.scss'
import {Link} from "react-router-dom";
import LogoSvg from "../../UI/LogoSvg.jsx";
import LoginSvg from "../../UI/LoginSvg.jsx";
import LocationSvg from "../../UI/LocationSvg.jsx";
import FindSvg from "../../UI/FindSvg.jsx";

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.logo}>
                    <Link to={'/'}>
                        <LogoSvg/>
                    </Link>
                </div>
                <div className={s.links}>
                    <Link to={'/'} className={s.link}>Вклады</Link>
                    <Link to={'/'} className={s.link}>Кредиты</Link>
                    <Link to={'/'} className={s.link}>Карты</Link>
                    <Link to={'/'} className={s.link}>Ипотека</Link>
                    <Link to={'/'} className={s.link}>Страхование</Link>
                    <Link to={'/'} className={s.link}>Инвестиции</Link>
                    <Link to={'/'} className={s.link}>Бизнес</Link>
                    <Link to={'/'} className={s.link}>Новости</Link>
                    <Link to={'/'} className={s.link}>Ещё</Link>
                </div>
                <div className={s.menu}>
                    <Link to={'/'} className={s.menuLink}>
                        <LoginSvg/>
                    </Link>
                    <Link to={'/'} className={s.menuLink}>
                        <LocationSvg/>
                    </Link>
                    <Link to={'/'} className={s.menuLink}>
                        <FindSvg/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;