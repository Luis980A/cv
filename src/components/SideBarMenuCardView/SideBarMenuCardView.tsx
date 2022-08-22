import { SideBarMenuCard } from "../../types/types.d";
import { classNames } from "../../util/classes";
import './SideBarMenuCardView.scss';

interface SideBarMenuItemViewProps {
    card: SideBarMenuCard;
    isOpen: boolean;
}

export const SideBarMenuCardView = ({
    card,
    isOpen,
}: SideBarMenuItemViewProps ) => {
    return (
        <div className="SideBarMenuCardView">
            <img className="profile" src={card.photoUrl} width="100%"/>
            <div className={classNames('profileInfo', isOpen ? '': 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
                <div className="url">
                    <a href={card.url}>Ir al perfil</a>
                </div>
            </div>
        </div>
    )
}