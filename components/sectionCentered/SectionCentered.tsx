'use client';

import styles from "./SectionCentered.module.scss";
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