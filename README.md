# @scripty/react-articles

# Description

lightweight react card component.

![alt text](./card.png "@scripty/react-articles")

# Usage
```bash
npm install -s @scripty/react-articles
```

##### Client: Example.jsx

```javascript
import React, { Fragment } from 'react';
import { Card } from '@src';

export const Example = () => {

    const onClick = (e) => {
        console.log(e);
    }

    return (
        <Fragment>
            <h2>Card</h2>
            <Card
                title={'Simple Card'}
                width={300}
            >
                Simple Card Content
            </Card>

            <h2>Card with Actions</h2>
            <Card
                title={'Card with actions'}
                width={300}
                onEdit={onClick}
                onClose={onClick}
            >
                Simple Card Content
            </Card>

            <h2>Card with custom actions</h2>
            <Card
                title={'Card with actions'}
                width={300}
                extra={'custom field'}
            >
                Simple Card Content
            </Card>

            <h2>Card with ok and cancel buttons</h2>
            <Card
                title={'Card with actions'}
                width={300}
                onEdit={onClick}
                onClose={onClick}
                onOk={onClick}
                onCancel={onClick}
            >
                Simple Card Content
            </Card>
        </Fragment>
    );
};
```
