import {UilFacebook,UilGithub,UilInstagram} from "@iconscout/react-unicons"
import css from "../styles/Footer.module.css"
import Image from "next/image"
import Logo from "../assets/logo.png"


export default function Footer(){
    return(
        <div className={css.container}>
            <span>ALL RIGHTS ARE RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={46}/>
                <UilGithub size={46}/>
                <UilInstagram size={46}/>
            </div>
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>Fudo</span>
            </div>
        </div>
    )
};