import React, { memo } from 'react'
import ShareIcon from '../../images/share.svg'
import CopyIcon from '../../images/copy.svg'

const navigatorHasShare = navigator.share

const URL = 'https://pwa-wnews.netlify.app/'

function Actions({ post, subject }) {
  const { id, title } = post

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - Breaking News - ${subject}`,
      text: title,
      url: URL,
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`)
  }

  const renderAction = () => {

    const action = navigatorHasShare ? shareInfo : copyInfo

    const icon = navigatorHasShare ? ShareIcon : CopyIcon

    return <img alt="icon" src={icon} className="share-icon" onClick={action} />
  }

  return (
    <div className="share">
      {renderAction()}
    </div>
  )
}

export default memo(Actions)
