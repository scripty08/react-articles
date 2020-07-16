import React, { useState } from 'react';
import { Article } from '../../src';

export const Example = () => {

    const [article, setArticle] = useState({_id: '', title: 'test', html: 'baa'})

    const onOkBtnClick = () => {
        setArticle({ _id: article._id, title: article.title, html: article.html });
    }

    const onCancelBtnClick = () => {
        console.log('cancel', '  <------------');
    }

    const onChange = ({_id, title, html}) => {
        article.title = title;
        article.html = html;
        article._id = _id;
        setArticle(article);
    }

    return (
        <Article
            title={article.title}
            html={article.html}
            width={600}
            edit={false}
            showEditBtn={true}
            onChange={onChange}
            onOkBtnClick={onOkBtnClick}
            onCancelBtnClick={onCancelBtnClick}
        />
    );
};
