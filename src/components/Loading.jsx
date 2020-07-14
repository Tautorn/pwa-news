
import React, { memo } from 'react'
import { Spin, Space } from 'antd'

function Loading() {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  )
}

export default memo(Loading)
