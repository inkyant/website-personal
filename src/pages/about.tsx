
import React from "react";

import * as styles from "@styles/pages/about.module.scss";
import Layout from "@components/layout";
import IconsBackground from "@components/home/iconsBackground";

export { Head } from "@pages/index"

export default function About() {
    return (
        <Layout>
            <IconsBackground height="100"></IconsBackground>
            <div className={styles.aboutContainer}>
                <img className={styles.profilePic} src="https://cdn.discordapp.com/attachments/461005989609603082/1159375772054736947/PXL_20221206_2258444062.jpg?ex=6530cbd4&is=651e56d4&hm=98f6d6f5abb66de21fe03a86f66eb8b419de6727bf3e44616b8807818871c3a6" />
                <p className={styles.text}>I am a first year Robotics Engineering major and CS minor at UCSC. I spend my time working on various projects, like creating this website in React!</p>
            </div>
        </Layout>
    )
}