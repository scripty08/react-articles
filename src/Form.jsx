import React, { useState } from 'react';
import { Input } from '@scripty/react-inputs';
import RichTextEditor from 'react-rte';
import { Card } from '@scripty/react-card';

export const Form = (props) => {
    const {
        _id = '',
        html = '',
        title = '' ,
        onChange = () => {},
        width,
        onOkBtnClick,
        onCancelBtnClick
    } = props;

    const [articleValue, setArticleValue] = useState(RichTextEditor.createValueFromString(html, 'html'));
    const [titleValue, setTitleValue] = useState(title);

    const onTextChange = (text) => {
        setArticleValue(text);
        onChange({_id, html: text.toString('html'), title: titleValue});
    }

    const onTitleChange = (name, value) => {
        setTitleValue(value);
        onChange({_id, html: articleValue.toString('html'), title: value});
    }

    return (
        <Card
            width={width}
            title={<Input placeholder={'Title'} onChange={onTitleChange} value={titleValue}/>}
            onOk={onOkBtnClick}
            onCancel={onCancelBtnClick}
        >
            <RichTextEditor
                onChange={onTextChange}
                value={articleValue}
            />
        </Card>
    );
};
