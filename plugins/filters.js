import Vue from 'vue'

Vue.filter('toAddressTypeName', (val) => {
  const mapping = {
    100: 'Bitcoin P2PKH',
    101: 'Bitcoin P2SH',
    102: 'Bitcoin Bech32',
    103: 'Bitcoin Payment Code',
    200: 'Bitcoin Cash P2PKH',
    201: 'Bitcoin Cash P2SH',
    202: 'Bitcoin Cash CashAddr',
    300: 'Nano'
  }

  return mapping[val] || 'Unknown'
})
