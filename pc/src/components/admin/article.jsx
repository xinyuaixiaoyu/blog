import React, { useRef, useState } from 'react';
import { connect } from 'dva';
import { Table, Button, Popconfirm, Select, Input } from 'antd';
import { setCache, getCache, hasChange } from '@/utils/functions';
import { useDidMount } from '@/utils/hooks';
import { getArticles } from '@/utils/service';
import Notification from '@/wrapComponent/Notification';
import Loading from '@/wrapComponent/Loading';
import types from '../../config/articleType';
import BraftEditor from 'braft-editor';
import { queryArticleById } from './service';
import 'braft-editor/dist/index.css';
import styles from './admin.less';

const { Option } = Select;

const AticleManage = props => {
  const { dispatch } = props;
  const [data, setData] = useState(getCache('articles') || []);
  useDidMount(async () => {
    if (!data.length) Loading.show();
    const result = await getArticles();
    if (result.success) {
      if (hasChange(data, result.data)) {
        setCache('articles', result.data);
        setData(result.data);
      }
    }
    Loading.hide();
  });
  const [state, setState] = useState({
    summary: BraftEditor.createEditorState(null),
    _type: 'HTML',
    quillHtml: '',
    _id: '',
    newArticle: {
      visible: false,
      target: '',
    },
    columns: [
      {
        title: 'type',
        dataIndex: 'type',
      },
      {
        title: 'title',
        dataIndex: 'title',
        render: data => <div className={styles.summary}>{data}</div>,
        width: '300',
      },
      {
        title: 'date',
        align: 'center',
        dataIndex: 'date',
      },
      {
        title: 'operation',
        render: record => (
          <div className={styles.operation}>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record._id)}
            >
              <a>delete</a>
            </Popconfirm>
            <a onClick={() => handleEdit(record)}>edit</a>
          </div>
        ),
      },
    ],
  });

  const {
    newArticle: { target, visible },
    _id,
    _type,
    summary,
    columns,
    title,
  } = state;
  const iRef = useRef(null);
  const handleEdit = async data => {
    const curArticle = await queryArticleById({ _id: data._id });
    if (curArticle.success) {
      setState({
        ...state,
        newArticle: { visible: true, target: 'edit' },
        summary: BraftEditor.createEditorState(curArticle.data.summary),
        _type: data.type,
        _id: data._id,
        title: data.title,
      });
    }
  };

  const handleDelete = _id => {
    dispatch({ type: 'article/deleteArticle', _id }).then(result => {
      Notification[result.success ? 'success' : 'fail']({
        msg: result.success ? 'delete done' : result,
      });
    });
  };

  const handleChange = value => setState({ ...state, summary: value });

  const changeType = value => setState({ ...state, _type: value });

  const submit = () => {
    const title = iRef.current.state.value;
    if (target === 'edit') {
      dispatch({
        type: 'article/updateArticle',
        _id,
        _type,
        summary: summary.toHTML(),
        title,
      }).then(result => {
        const { success } = result;
        success &&
          setState({
            ...state,
            newArticle: { visible: false },
            summary: '',
            _type: 'HTML',
          });
        Notification[success ? 'success' : 'fail']({
          msg: success ? 'success' : result,
        });
      });
    } else {
      const arg = {
        summary: summary.toHTML(),
        type: _type,
        title,
        date: Date.now(),
      };
      dispatch({
        type: 'article/publishArticle',
        arg,
      }).then(result => {
        const { success } = result;
        success &&
          setState({
            ...state,
            newArticle: { visible: false },
            summary: '',
            _type: 'HTML',
          });
        Notification[success ? 'success' : 'fail']({
          msg: success ? 'success' : result,
        });
      });
    }
  };
  const onCreate = () =>
    setState({
      ...state,
      text: '',
      type: 'HTML',
      summary: BraftEditor.createEditorState(null),
      newArticle: { visible: true, target: 'add' },
    });
  return (
    <div className={styles.articleManage}>
      {visible && (
        <div className={styles.quillContainer}>
          <Select
            style={{ width: 120 }}
            defaultValue={_type}
            onChange={value => changeType(value)}
          >
            {types.map(item => (
              <Option key={item}>{item}</Option>
            ))}
          </Select>
          <Input defaultValue={title} ref={iRef} />
          <BraftEditor value={summary} onChange={handleChange} />
          <div style={{ marginTop: '20px' }}>
            <Button
              style={{ marginRight: '20px' }}
              type="primary"
              onClick={submit}
            >
              submit
            </Button>
            <Button
              type="danger"
              onClick={() =>
                setState({
                  ...state,
                  newArticle: { visible: false },
                })
              }
            >
              close
            </Button>
          </div>
        </div>
      )}

      <div className={styles.tableContainer}>
        <Button type="primary" onClick={onCreate}>
          New
        </Button>
        <Table rowKey={a => a._id} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default connect(({ user }) => ({
  user,
}))(AticleManage);
