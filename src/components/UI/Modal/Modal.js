import React from "react";
import { Modal } from "antd";

const ModalOrder = props => {
    const { visible, handleOk, handleCancel, tickets } = props;
    return (
        <div>
            <Modal
                title="Confirm your order"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {tickets}
            </Modal>
        </div>
    );
};

export default ModalOrder;
