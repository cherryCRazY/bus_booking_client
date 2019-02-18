import { Modal } from "antd";

const error = message => {
    Modal.error({
        title: "Something went wrong",
        content: message
    });
};

export default error;
