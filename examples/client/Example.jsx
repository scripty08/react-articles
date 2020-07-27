import React, { useState } from 'react';
import { Article } from '../../src';
import { Description } from './Description';

export const Example = () => {

    const [article] = useState({_id: '', title: 'test', html: 'baa'})

    const onOkBtnClick = (article) => {
        console.log(article, ' onOkBtnClick article <------------');
    }

    const onCancelBtnClick = () => {
        console.log('cancel', '  <------------');
    }

    const onChange = (article) => {
        console.log(article, ' onChange article <------------');
    }

    return (
        <Description title={'Editable Article'}>
            <Article
                title={article.title}
                html={article.html}
                width={'100%'}
                edit={false}
                showToolbar={true}
                onChange={onChange}
                onOkBtnClick={onOkBtnClick}
                onCancelBtnClick={onCancelBtnClick}
            />
        </Description>
    );
};
