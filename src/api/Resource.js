import axios from './axios';

// We apply to headers to each instance
// in order to prevent use of a stale header
// TODO: Figure out how to do his more efficiently
export default function Resource(uri, hasDashboard = false) {
  this.uri = uri;

  this.all = (params = {}) => {
     return axios.get(this.uri, {
      params: params,
      });
  };

  this.find = id => {
     return axios.get(`${this.uri}/${id}`, {
      });
  };

  this.post = (data, path) => {
     let _uri = '';
    if (path) {
      _uri = uri.concat(`${path}`);
    } else {
      _uri = this.uri;
    }
    return axios.post(_uri, data, {
      });
  };

  this.update = (id, data, endURI) => {
     let uri = `${this.uri}/${id}`;

    if (endURI) {
      uri = uri.concat(`${endURI}`);
    }
    return axios.put(uri, data, {
      });
  };

  this.patch = (id, data) => {
     return axios.patch(`${this.uri}/${id}`, data, {
      });
  };

  this.remove = (id, data) => {
     return axios.delete(`${this.uri}/${id}`, data, {
      });
  };

  if (hasDashboard) {
    this.dashboardData = (id = null) => {
         let updatedUri = '';
      if (id) {
        updatedUri = `${this.uri}/dashboard/${id}`;
      } else {
        updatedUri = `${this.uri}/dashboard`;
      }

      return axios.get(updatedUri, {
          });
    };
  }
}
