import React, {
} from 'react';

import { connect } from "react-redux";

import Memo from '../components/Memo';
export const Page2 = (props) => {
  return( 
    props.memos.map((_memo_data, key)=>
      <Memo key={key} memo_data={_memo_data} flag={false} />
    )
  );
};

const mapStateToProps = state => {
  return {  
    memos: state.index.memos
  };
};

const mapDispatchToProps = (dispatch) => {
  return { }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2);
