import { AiFillGithub } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillCodepenCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import { FaRegPlayCircle } from "react-icons/fa";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { SiBytedance } from "react-icons/si";
import { SiFireship } from "react-icons/si";
import { SiMusicbrainz } from "react-icons/si";
import { GiMusicalNotes } from "react-icons/gi";
import { Gi3dMeeple } from "react-icons/gi";
import { GiAzulFlake } from "react-icons/gi";

export const headerMenus = [
    {
        title: "Top100",
        icon: <FaRegPlayCircle />,
        src: "/search/플레이리스트top100"
    },
    {
        title: "추천리스트",
        icon: <MdLibraryMusic />,
        src: "/search/추천playList"
    },
    {
        title: "신나는노래",
        icon: <SiBytedance />,
        src: "/search/신나는플레이리스트"
    },
    {
        title: "힙합",
        icon: <SiFireship />,
        src: "/search/힙합모음플레이리스트"
    },
    {
        title: "인디밴드",
        icon: <BsFillMusicPlayerFill />,
        src: "/search/인디밴드플레이리스트"
    },
    {
        title: "아이돌",
        icon: <SiMusicbrainz />,
        src: "/search/아이돌플레이리스트"
    },
    {
        title: "클래식",
        icon: <GiMusicalNotes />,
        src: "/search/클래식플레이리스트"
    },
    {
        title: "J-POP",
        icon: <Gi3dMeeple />,
        src: "/search/일본,J-pop 플레이리스트"
    },
    {
        title: "팝송",
        icon: <GiAzulFlake />,
        src: "/search/popsong 플레이리스트"
    }
]

export const searchKeyword = [
    {
        title: "잔잔한",
        src: "/search/잔잔한"
    },
    {
        title: "힙합",
        src: "/search/힙합"
    },
    {
        title: "아이돌",
        src: "/search/아이돌"
    },
    {
        title: "클래식",
        src: "/search/클래식"
    },
    {
        title: "애니OST",
        src: "/search/애니OST"
    },
    {
        title: "드라마",
        src: "/search/드라마"
    },
    {
        title: "발라드",
        src: "/search/발라드"
    },
    {
        title: "팝송",
        src: "/search/팝송"
    },
    {
        title: "인디밴드",
        src: "/search/인디밴드"
    },
    {
        title: "신나는",
        src: "/search/신나는"
    },
    {
        title: "Edm",
        src: "/search/Edm"
    },
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/nicejmp1",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/channel/UCdfUZ7mSAjSPYsP9ph3uQmg",
        icon: <TfiYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/yyifxeeq-the-bashful",
        icon: <AiFillCodepenCircle />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/",
        icon: <AiOutlineInstagram />
    },
]