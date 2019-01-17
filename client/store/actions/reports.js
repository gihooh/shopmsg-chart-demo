import axios from 'axios';

import { onLoadingStart, onLoadingEnd } from './ui';

export const FETCH_OPTINS_START = 'FETCH_OPTINS_START';
export const FETCH_OPTINS_SUCCESS = 'FETCH_OPTINS_SUCCESS';
export const FETCH_OPTINS_FAIL = 'FETCH_OPTINS_FAIL';

export const FETCH_RECIPIENTS_START = 'FETCH_RECIPIENTS_START';
export const FETCH_RECIPIENTS_SUCCESS = 'FETCH_RECEPIENTS_SUCCESS';
export const FETCH_RECIPIENTS_FAIL = 'FETCH_RECIPIENTS_FAIL';

export const fetchOptinsSuccess = (optins) => ({
  type: FETCH_OPTINS_SUCCESS,
  optins,
});

export const fetchOptinsFail = () => ({
  type: FETCH_OPTINS_FAIL,
});

export const fetchRecipientsSuccess = (recipients) => ({
  type: FETCH_RECIPIENTS_SUCCESS,
  recipients,
});

export const fetchRecipientsFail = () => ({
  type: FETCH_RECIPIENTS_FAIL,
});

export const fetchOptins = ({start, end}) => async (dispatch) => {
  dispatch(onLoadingStart());
  try {
    const optins = await axios.get(`/api/reports/optins.json?from=${start}&to=${end}`)

    const data = optins.data.map(o => ({
      optinsDate: o.date,
      optinsCount: o.count
    }))

    dispatch(fetchOptinsSuccess(data))
  } catch (e) {
    dispatch(fetchOptinsFail())
  }
  dispatch(onLoadingEnd());
};

export const fetchRecipients = ({start, end}) => async (dispatch) => {
  dispatch(onLoadingStart());
  try {
    const recipients = await axios.get(`/api/reports/recipients.json?from=${start}&to=${end}`)

    const data = recipients.data.map(o => ({
      recipientsDate: o.date,
      recipientsCount: o.count
    }))

    dispatch(fetchRecipientsSuccess(data))
  } catch (e) {
    dispatch(fetchRecipientsFail())
  }
  dispatch(onLoadingEnd());
};