import React from 'react';
import { useSetState } from 'react-use';
import Notification from '@/wrapComponent/Notification';
import RepeatItem from './repeatItem';
import { deleteMsgById, repeatMsg } from '../service';
import { escapeData, renderDate } from '../util';
import styles from '../index.less';

export default (props) => {
  const {
    item,
    index,
    dispatch,
    deleteMsgCallback,
    updateRepeat,
    user,
  } = props;
  const [state, setState] = useSetState({
    showOperation: false, // 展开操作
    showRepeat: false, // 展开回复列表
  });
  const { showOperation, showRepeat } = state;
  function noLogin() {
    if (!user.isLogin) {
      Notification.fail({ msg: '请先登录~' });
      return true;
    }
  }
  const deleteMsg = async (_id) => {
    if (noLogin()) return;
    const res = await deleteMsgById({ _id });
    if (res.success) {
      deleteMsgCallback(_id);
    }
  };
  const leaveMsg = (_id, toRepeat) => {
    if (noLogin()) return;
    const cb = async (value) => {
      if (!value || value.trim() === '') {
        Notification.fail({
          msg: '输入不规范',
        });
      } else {
        const result = await repeatMsg({
          _id,
          info: escapeData(value),
          toRepeat,
        });
        if (result.success) {
          dispatch({ type: 'dialog/hide' });
          const {
            data: { repeat },
          } = result;
          updateRepeat(_id, repeat);
        } else {
          Notification.fail({ msg: result.errorMsg });
        }
      }
    };
    dispatch({
      type: 'dialog/open',
      payload: {
        placeholder: '回复' + toRepeat + ': ',
        cb,
        maxInput: 100,
      },
    });
  };
  return (
    <li className={styles.messageItem} key={item._id + index}>
      <div className={styles.msgAvatar}>
        <img src={item.avatar} alt="" />
      </div>
      <div className={styles.mssageName}>
        <div className={styles.leaveInfo}>
          <div>
            {item.name}{' '}
            <span className={styles.msgDate}>在{renderDate(item.date)}说</span>
          </div>
        </div>
      </div>
      <div className={styles.msgContent}>
        {item.content}
        <div className={styles.moreCon}>
          <div onClick={() => setState({ showRepeat: !showRepeat })}>
            <span className={styles.count}>{item.repeat.length}</span>
            <i
              className={`iconfont ${
                showRepeat ? 'icon-quxiao' : 'icon-zhankai'
              }`}
            />
          </div>
          <div onClick={() => setState({ showOperation: !showOperation })}>
            {showOperation ? 'Close' : 'More'}
          </div>
        </div>
        {showOperation && (
          <div className={styles.msgOperation}>
            <div onClick={() => leaveMsg(item._id, item.name)}>
              <i className="iconfont icon-liuyan-A" />
            </div>
            <div onClick={() => deleteMsg(item._id)}>
              <i className="iconfont icon-shanchu" />
            </div>
          </div>
        )}
      </div>
      {showRepeat && item.repeat && (
        <RepeatItem
          list={item.repeat}
          parentId={item._id}
          leaveMsg={leaveMsg}
          updateRepeat={updateRepeat}
        />
      )}
    </li>
  );
};
