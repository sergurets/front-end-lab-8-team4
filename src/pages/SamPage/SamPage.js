import React from 'react';

import Header from './header/header';
import Info from './info/info';

class SamPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Info />
            </div>
        );
    }
}

export default SamPage;