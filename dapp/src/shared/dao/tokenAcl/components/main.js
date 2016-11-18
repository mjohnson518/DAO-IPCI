import React from 'react'
import { Link } from 'react-router'
import { translate } from 'react-i18next'
import { Layout } from '../../main/components'
import Form from '../containers/formFunc'

const Main = (props) => {
  const { address, name, totalSupply, balance, aclGroup, t } = props
  const menu = (<div className="btn-group" style={{ marginBottom: 10 }}>
    <Link to={'/dao/token-acl/transfer/' + address} className="btn btn-default">{t('menuSend')}</Link>
    <Link to={'/dao/token-acl/approve/' + address} className="btn btn-default">{t('menuApprove')}</Link>
    <Link to={'/dao/token-acl/emission/' + address} className="btn btn-default">{t('menuEmission')}</Link>
  </div>)
  return (<Layout title={t('titlePrefix') + ' ' + name} address={address} menu={menu}>
    <p><b>{t('allTokens')}</b>: {totalSupply}</p>
    <p><b>{t('myBalance')}</b>: {balance}</p>
    <p><b>{t('groupAuditors')}</b>: {aclGroup}</p>
    <div className="panel panel-default">
      <div className="panel-heading">{t('Balance')}</div>
      <div className="panel-body">
        <Form address={address} action="balanceOf" />
      </div>
    </div>
  </Layout>)
}

export default translate(['tokenAcl'])(Main)
