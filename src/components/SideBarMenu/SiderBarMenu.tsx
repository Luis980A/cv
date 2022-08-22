import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../../types/types.d";
import { classNames } from "../../util/classes";
import { VscMenu } from "react-icons/vsc";

import "./SiderBarMenu.scss";
import React from 'react';
import { SideBarMenuCardView } from "../SideBarMenuCardView/SideBarMenuCardView";
import { SideBarMenuItemView } from "../SideBarMenuItemView/SideBarMenuItemView";

interface SiderBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export const SideBarMenu = ({ items, card }: SiderBarMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (<React.Fragment>
        <div className={classNames('SideBarMenu', isOpen ? "expanded" : "collapsed")}>
            <div className="menuButton">
                <button className="hamburgerIcon" onClick={() => setIsOpen(!isOpen)}>
                    <VscMenu />
                </button>
            </div>
            <SideBarMenuCardView card={card} isOpen={isOpen} />
            {
                items.map(item => (
                    <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
                ))
            }
        </div>
    </React.Fragment>
    )
}