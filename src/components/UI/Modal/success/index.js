import { Modal } from "antd";

const success = message => {
    Modal.success({
        title: "Success",
        content: message
    });
};

export default success;
