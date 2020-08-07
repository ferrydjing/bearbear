import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import * as Styled from './style'

const UserAgreement = (props) => {
  const { visible, setVisible } = props
  return (
    <Modal
      visible={visible}
      footer={null}
      width={750}
      onCancel={() => {
        setVisible(false)
      }}
    >
      {visible ? (
        <Styled.AgreementWrap>
          <h3>用户协议</h3>
          <p>
            BearBear（除非特别说明，本服务协议所提及的BearBear包括
            网站）为您提供的一切服务受本服务协议项下条款和条件的约束。
          </p>
          <p>
            使用BearBear也就意味着您同意本服务协议及BearBear对其不时所做的修订。
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ad esse labore commodi dolorum illo nihil atque quam
            dignissimos architecto officiis voluptatibus est ab, ea laudantium.
            Tempora iusto consequatur natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ad esse labore commodi dolorum illo nihil atque quam
            dignissimos architecto officiis voluptatibus est ab, ea laudantium.
            Tempora iusto consequatur natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ad esse labore commodi dolorum illo nihil atque quam
            dignissimos architecto officiis voluptatibus est ab, ea laudantium.
            Tempora iusto consequatur natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ad esse labore commodi dolorum illo nihil atque quam
            dignissimos architecto officiis voluptatibus est ab, ea laudantium.
            Tempora iusto consequatur natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ad esse labore commodi dolorum illo nihil atque quam
            dignissimos architecto officiis voluptatibus est ab, ea laudantium.
            Tempora iusto consequatur natus!
          </p>
        </Styled.AgreementWrap>
      ) : null}
    </Modal>
  )
}

UserAgreement.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
}

export default UserAgreement
