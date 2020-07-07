import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

function Technology({ values }) {

  function createMarkup(html) {
    return {__html: html}
  }

  const renderPost = (post, index) => {
    const { title, description } = post
    return (
      <Col span={6} key={`post-${index}`}>
        <article>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          <p dangerouslySetInnerHTML={createMarkup(description)} />
        </article>
      </Col>
    )
  }

  return (
    <Row gutter={[16, 16]}>
      {values?.map(renderPost)}
    </Row>
  )
}

Technology.defaultProps = {
  values: []
}

Technology.propTypes = {
  values: PropTypes.array.isRequired
}

export default memo(Technology)
