import React, {
} from 'react';

import { Link as RouterLink } from 'react-router-dom';

export const Layout = (children) => {

  console.log(children.view)

  return (
    <div
      style={{display: 'flex'}}
    >
      <div
        style={{width: '30%'}}
      >
        <RouterLink
          to="/hot"
        >
          <div className="button">Hot</div>
        </RouterLink>        
        <RouterLink
          to="/regular"
        >
          <div className="button">Regular</div>
        </RouterLink>
      </div>
      <div
        style={{width: '70%'}}
      >
        {children.view}
      </div>
    </div>
  );
};

Layout.propTypes = {
  
};

export default Layout;
