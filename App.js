import React from 'react';
import { useMediaQuery } from 'react-responsive';

// import Mobile from './mobile/page/Mobile';
import Tablet from './tablet/Tablet';
import Desktop from './desktop/Desktop';

import Home from './mobile/home/Home';
import Login from './mobile/login/Login';
import MyPage from './mobile/mypage/MyPage';

const App = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1199px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    if (isMobile) return <MyPage />;
    else if (isTablet) return <Tablet />;
    else if (isDesktop) return <Desktop />;
    
};
export default App;