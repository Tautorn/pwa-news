import React, { memo } from 'react'
import ShareIcon from '../../images/share.svg'
import CopyIcon from '../../images/copy.svg'

const navigatorHasShare = navigator.share

function Share() {

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19`,
      text: 'textCovid19',
      url: 'https://covid19pwa.netlify.app/',
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText('textCovid19');
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

export default memo(Share)
