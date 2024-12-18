import { Button } from 'antd'
import React from 'react'
import { ShowSuccess } from '../../utils/Helpers/Helper'

export const PageLogin = () => {
  const handleSuccess = () => {
    ShowSuccess("Thao tác thành công!");
};

  return (
    <div>PageLogin

      <Button onClick={handleSuccess}>
        Show
      </Button>
    </div>
  )
}
