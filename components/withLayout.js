import React from 'react';
import Navigator from './navigator';
import Header from './header';
import Footer from './footer';

const WithLayout = (Page) => {
    return () => (
        <div>
            <Header />
            <Navigator />
            <Page />
            <Footer />
        </div>
    );
};

export default WithLayout;