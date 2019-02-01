import React, { Component } from "react";
import Styles from "./styles.module.scss";

class Spinner extends Component {
    render() {
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
    }
}
export default Spinner;
