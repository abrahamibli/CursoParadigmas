import React, { Fragment, useState } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <p>Has dado click {count} veces</p>
            <button onClick={ () => setCount( count + 1 ) }>
                Click me
            </button>
        </Fragment>
    );
}

export default Example;