import React, { useEffect, useState, useRef } from 'react';
import { NavLink, withRouter } from 'dva/router';
import Notification from '@/wrapComponent/Notification';
import classnames from 'classnames';
import { connect } from 'dva';
import routes from '@/config/router.config';
import { getNavStyle } from './util';
import styles from './header.less';
import { getCache } from '@/utils/functions';

const Header = props => {
  const {
    dispatch,
    config,
    history,
    user,
    search: { visible },
    dynamicDetail,
  } = props;
  const [style, setStyle] = useState({});
  const [headerStyle, setHeaderStyle] = useState(false);
  const inputRef = useRef({});
  const handleSearch = e => {
    const {
      nativeEvent: { target },
    } = e;
    const moments = getCache('moments') || [];
    const articles = getCache('articles') || [];
    if (e.keyCode === 13 && !!target.value && target.value.trim() !== '') {
      dispatch({
        type: 'search/asyncSearch',
        payload: {
          data: target.value,
          allData: [...moments, ...articles],
        },
      }).then(
        result =>
          result.length === 0 &&
          Notification.fail({
            msg: `找不到关于 ${target.value} 相关内容`,
          })
      );
    }
  };

  const handleLine = () => {
    visible && dispatch({ type: 'search/close' });
    dynamicDetail.visible && dispatch({ type: 'dynamic/closeDetail' });
  };
  const title = (config && config.blogTitle) || 'Ada - Blog';
  useEffect(() => {
    history.listen(() => {
      const {
        location: { pathname },
      } = history;
      setStyle(getNavStyle(pathname, styles));
      setHeaderStyle(pathname === '/friend-ship');
    });
  }, []);
  const onFocusSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };
  return (
    <header
      className={classnames({
        [styles.anotherHeader]: headerStyle,
      })}
    >
      <h1 className={styles.logo}>{title}</h1>
      <div className={styles.search}>
        <div className={styles.searchIcon} onClick={onFocusSearch}>
          <i className="icon-search iconfont" />
        </div>
        <input
          ref={inputRef}
          placeholder="SEARCH"
          onKeyDown={e => handleSearch(e)}
        />
      </div>
      <ul>
        {routes.map(item => {
          if (item.hidden || (item.permission && !user.admin)) return null;
          return (
            <li onClick={e => handleLine(e)} key={item.url}>
              <NavLink to={item.path} url={item.path}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
        <div className={styles.navLine} style={style} />
      </ul>
    </header>
  );
};

export default connect(
  ({ search, blogConfig: { config }, dynamic: { dynamicDetail }, user }) => ({
    search,
    config,
    dynamicDetail,
    user,
  })
)(withRouter(Header));
