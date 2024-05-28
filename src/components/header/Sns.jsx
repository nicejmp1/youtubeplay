import React from 'react'
import { snsLink } from "../../data/menu";

const Sns = () => {
    return (
        <div className="header__sns">
            {snsLink.map((sns, key) => (
                <li key={key}>
                    <a href={sns.url} target='_black' rel='noopener noreferrer' aria-label={sns.title}>
                        {sns.icon}
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Sns
