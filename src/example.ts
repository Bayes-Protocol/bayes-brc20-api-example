import axios from "axios"

/**
 * get address balance of a certain ticker
 */
async function getBalance() {
  const ret = await axios.get(
    'https://bayes.digital/api/v1/brc20/balance',
    {
      params: {
        address: 'bc1p4vclmch8f58kl3rtdcc6pe64wmty4cn9qvwepnec88tzg46mxsvslcwy9d',
        ticker: 'ordi',
      }
    })
  console.log('get ordi balance res: ', ret.data)
  // example result
  // {
  //   "ticker": "ordi",
  //   "availableBalance": "3.5",
  //   "decimal": 18,
  //   "balance": "3.5"
  // }
}


/**
 * get address balance of a certain ticker by block height
 */
async function getBalanceByHeight() {
  const ret = await axios.get(
    'https://bayes.digital/api/v1/brc20/balance_by_height',
    {
      params: {
        address: 'bc1p4vclmch8f58kl3rtdcc6pe64wmty4cn9qvwepnec88tzg46mxsvslcwy9d',
        ticker: 'ordi',
        height: '824823',
      }
    })
  console.log('get ordi balance by height res: ', ret.data)
  // example result
  // {
  //   "ticker": "ordi",
  //   "availableBalance": "3.5",
  //   "decimal": 18,
  //   "balance": "3.5"
  // }
}


/**
 * get available payment list
 */
async function getPaymentList() {
  const ret = await axios.get('https://bayes.digital/api/v1/brc20/payment_list')
  console.log('supported payment list: ', ret.data)
  // example result
  // ["ordi","ainn","aibs","rats"]
}

getBalance().catch(console.error)
getBalanceByHeight().catch(console.error)
getPaymentList().catch(console.error)
