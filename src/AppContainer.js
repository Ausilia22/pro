import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


export const App = ({children}) => {


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
        {children}
      </div>
    </div>
  );
};

export default withRouter(App);