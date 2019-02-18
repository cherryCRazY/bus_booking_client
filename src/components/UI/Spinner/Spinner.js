import React from "react";
import Styles from "./styles.module.scss";

const Spinner = props => {
    return (
        <div className={Styles.loaderInner}>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
        </div>
    );
};
export default Spinner;
