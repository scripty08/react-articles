import React, {useState} from 'react';
import { Card } from '@scripty/react-card';
import { Form } from './Form';
import './Styles.scss';

export const Article = (props) => {
    const {title, html, width, edit = false, onOkBtnClick, onCancelBtnClick, onChange, showEditBtn } = props;
    const [editable, setEditable] = useState(edit);

    const onOk = () => {
        setEditable(false);
        onOkBtnClick();
    }

    const onCancel = () => {
        setEditable(false);
        onCancelBtnClick();
    }

    const EditableArticle = () => {

        let cardConfig = {
            width: width,
            title: title,
            headlineCls: 'headline article'
        }

        if (editable) {
            return <Form {...props} onChange={onChange} onOkBtnClick={onOk} onCancelBtnClick={onCancel} />
        }

        if(showEditBtn) {
            cardConfig.onEdit = () => {
                setEditable(true);
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
