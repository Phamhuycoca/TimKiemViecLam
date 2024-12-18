import React from 'react'
import { Button, Result } from 'antd';
export const Forbidden = () => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Xin lỗi, bạn không có quyền thực hiện cho trang web này."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}
