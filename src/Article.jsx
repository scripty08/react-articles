import React, {useState} from 'react';
import { Card } from '@scripty/react-card';
import { Form } from './Form';

export const Article = (props) => {
    const {
        title = '',
        html = '',
        width,
        edit = false,
        onOkBtnClick = () => {},
        onCancelBtnClick = () => {},
        onEditBtnClick = () => {},
        onDeleteBtnClick = () => {},
        onChange = () => {},
        showToolbar = false,
        _id
    } = props;

    const [editable, setEditable] = useState(edit);
    let [article] = useState({ title, html, _id });

    const onOk = () => {
        setEditable(false);
        onOkBtnClick(article)
    }

    const onCancel = () => {
        setEditable(false);
        onCancelBtnClick(article);
    }

    const onArticleChange = ({title, html, _id }) => {
        article.title = title;
        article.html = html;
        article._id = _id;
        onChange(article);
    }

    const EditableArticle = () => {

        let cardConfig = {
            width: width,
            title: title,
        }

        if (editable) {
            return <Form {...props} onChange={onArticleChange} onOkBtnClick={onOk} onCancelBtnClick={onCancel} />
        }

        if(showToolbar) {
            cardConfig.onEdit = () => {
                setEditable(true);
                onEditBtnClick();
            };
            cardConfig.onDelete = () => {
                onDeleteBtnClick();
            }
        }

        return (
            <Card {...cardConfig}>
                <div dangerouslySetInnerHTML={{ __html: html }}/>
            </Card>
        );
    }

    return (
        <EditableArticle />
    );
};
