'use client';

import styles from "./sectionCentered.module.scss";
import React from "react";

export default function SectionCentered(
    {
        children,
    }: {
        children: React.ReactNode;
    }
) {

    return (
        <section className={styles.sectionCentered}>
            <div>{children}</div>
        </section>
    );
}