import axios from 'axios';

export const dataRequest = {
  searchReq(rowValue) {
    let url = `http://www.filltext.com/?rows=${rowValue}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return axios.get(url);
  },
};
