import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createMarkup, openPost } from './utils'

function Economy({ values }) {

  const renderImg = ({ image, description }) => <img src={image.url} alt={description} width="100%" />

  const renderDescriptin = (description) => <p dangerouslySetInnerHTML={createMarkup(description)} />

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={24} md={12} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
         {image?.url ? renderImg({ image, description }) : renderDescriptin(description)}
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

Economy.defaultProps = {
  values: []
}

Economy.propTypes = {
  values: PropTypes.array.isRequired
}

export default memo(Economy)
