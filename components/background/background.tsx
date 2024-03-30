'use client';

import React from "react";
import styles from "./background.module.scss";
import Image from "next/image";
import Icon from "@/components/icon";

export default function Background(
    {
        children,
    }: {
        children: React.ReactNode;
    }
) {

    return (
        <div
            className={styles.background}
        >
            <Image
                src={'/elements/top-bubble.svg'}
                alt=''
                aria-hidden
                width={0}
                height={0}
                className={styles.bubbleTop}
                draggable={false}
            />
            <Image
                src={'/elements/bottom-bubble.svg'}
                alt=''
                aria-hidden
                width={0}
                height={0}
                className={styles.bubbleBottom}
                draggable={false}
            />
            <Icon name='leaf-1' size={0} className={styles.leafTopLeft}/>
            <Icon name='leaf-2' size={150} className={styles.leafTopRight}/>
            <Icon name='leaf-3' size={150} className={styles.leafBottomLeft}/>
            <Icon name='leaf-4' size={100} className={styles.leafBottomRight}/>

            {children}
        </div>
    );
}