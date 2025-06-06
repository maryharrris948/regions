import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Timothy Bernando',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Robert Tellis',
      mobileNumber: '+1-***-***-****',
      email: 'r@gmail.com',
      createdOn: '2/12/2025', // m/d/y
      username: 'robertTell',
      password: 'RobertT123!'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      balance_usd: 262000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '235665',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Debit to Sue Thompson',
        status: 'Success',
        amount_usd: -90000.0
      },
      {
        dateTime: 'February 12, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer from State Board Programming Grant',
        status: 'Success',
        amount_usd: 2000.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'Sharon Fechter',
      mobileNumber: '***-***-****',
      email: 's@gmail.com',
      createdOn: '6/2/2025', // m/d/y
      username: 'Sharon4122',
      password: 'Pelican03!'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 4985.04
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '235665',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 2, 2025',
        description: 'Debit from Amex cc: Thomas Fusinski - XXXXXX28283',
        status: 'Success',
        amount_usd: -3000.0
      },
      {
        dateTime: 'June 2, 2025',
        description: 'Debit from Amex cc: Thomas Fusinski - XXXXXX19374',
        status: 'Success',
        amount_usd: -3822.65
      },
      {
        dateTime: 'June 2, 2025',
        description: 'Debit from Amex cc: Thomas Fusinski - XXXXXX37491',
        status: 'Success',
        amount_usd: -28198.31
      },
      {
        dateTime: 'June 1, 2025',
        description: 'Debit from Walmart Supercenter - XXXXXX84720',
        status: 'Success',
        amount_usd: -1725.4
      },
      {
        dateTime: 'May 31, 2025',
        description: 'Credit from Wells Fargo-sa - XXXXXX20467',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'May 30, 2025',
        description: 'Debit from Whole Foods Market - XXXXXX93615',
        status: 'Success',
        amount_usd: -3120.6
      },
      {
        dateTime: 'May 29, 2025',
        description: 'Debit from Target Grocery - XXXXXX75834',
        status: 'Success',
        amount_usd: -2588.9
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Debit from Costco Wholesale - XXXXXX64529',
        status: 'Success',
        amount_usd: -3412.75
      },
      {
        dateTime: 'May 27, 2025',
        description: 'Debit from Safeway Grocery - XXXXXX31076',
        status: 'Success',
        amount_usd: -1844.0
      },
      {
        dateTime: 'May 26, 2025',
        description: 'Debit from Kroger store - XXXXXX98142',
        status: 'Success',
        amount_usd: -2250.35
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      firstName: 'Williams Marie berrada',
      mobileNumber: '***-***-****',
      email: 'marieberrada37@gmail.com',
      createdOn: '6/4/2025', // m/d/y
      username: 'marieberrada37',
      password: 'Stefan1234'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 70040460.04
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '235665',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 2, 2025',
        description: 'Transfer from Amex cc: Thomas Fusinski - XXXXXX28283',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'June 2, 2025',
        description: 'Transfer from Amex cc: Thomas Fusinski - XXXXXX19374',
        status: 'Success',
        amount_usd: 13800.65
      },
      {
        dateTime: 'June 2, 2025',
        description: 'Transfer from Amex cc: Thomas Fusinski - XXXXXX37491',
        status: 'Success',
        amount_usd: 128100.31
      },
      {
        dateTime: 'June 1, 2025',
        description: 'Transfer to Walmart Supercenter - XXXXXX84720',
        status: 'Success',
        amount_usd: -1725.4
      },
      {
        dateTime: 'May 31, 2025',
        description: 'Transfer from Wells Fargo-sa - XXXXXX20467',
        status: 'Success',
        amount_usd: 250000.0
      },
      {
        dateTime: 'May 30, 2025',
        description: 'Transfer to Whole Foods Market - XXXXXX93615',
        status: 'Success',
        amount_usd: -3120.6
      },
      {
        dateTime: 'May 29, 2025',
        description: 'Transfer to Target Grocery - XXXXXX75834',
        status: 'Success',
        amount_usd: -2588.9
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer to Costco Wholesale - XXXXXX64529',
        status: 'Success',
        amount_usd: -3412.75
      },
      {
        dateTime: 'May 27, 2025',
        description: 'Transfer to Safeway Grocery - XXXXXX31076',
        status: 'Success',
        amount_usd: -1844.0
      },
      {
        dateTime: 'May 26, 2025',
        description: 'Transfer to Kroger store - XXXXXX98142',
        status: 'Success',
        amount_usd: -2250.35
      },
      {
        dateTime: 'April 28, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5834',
        status: 'Success',
        amount_usd: 180000.0
      },
      {
        dateTime: 'April 25, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7217',
        status: 'Success',
        amount_usd: 14500.0
      },
      {
        dateTime: 'April 21, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1823',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'April 17, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX9461',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'April 11, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3197',
        status: 'Success',
        amount_usd: 3500.0
      },
      {
        dateTime: 'April 8, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7286',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'April 1, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX4530',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'March 28, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX3604',
        status: 'Success',
        amount_usd: -8000.0
      },
      {
        dateTime: 'March 24, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1083',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'March 21, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX9472',
        status: 'Success',
        amount_usd: -2500.0
      },
      {
        dateTime: 'March 17, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5639',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'March 14, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7860',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX4078',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'March 3, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1289',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'February 28, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX2365',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'February 24, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX9021',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX7836',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'February 17, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6074',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'February 10, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX2154',
        status: 'Success',
        amount_usd: -6000.0
      },
      {
        dateTime: 'February 7, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX6742',
        status: 'Success',
        amount_usd: 4500.0
      },
      {
        dateTime: 'February 3, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX5290',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'January 30, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX6473',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'January 27, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX8419',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'January 24, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX1184',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'January 22, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2950',
        status: 'Success',
        amount_usd: 6000.0
      },
      {
        dateTime: 'January 20, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX9093',
        status: 'Success',
        amount_usd: 7000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer to Sharon Hawley - XXXXXX4562',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'January 13, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3670',
        status: 'Success',
        amount_usd: 4000.0
      },
      {
        dateTime: 'January 6, 2025',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX7734',
        status: 'Success',
        amount_usd: 3000.0
      },
      {
        dateTime: 'December 30, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX6201',
        status: 'Success',
        amount_usd: -6500.0
      },
      {
        dateTime: 'December 23, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX4872',
        status: 'Success',
        amount_usd: 5500.0
      },
      {
        dateTime: 'December 20, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX1349',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'December 16, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX3595',
        status: 'Success',
        amount_usd: 8500.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Sharon Hawley - XXXXXX7340',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'December 9, 2024',
        description: 'Transfer from Brian Thomas Moynihan - XXXXXX2427',
        status: 'Success',
        amount_usd: 7500.0
      },

    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      firstName: 'Tod Carlsson',
      mobileNumber: '539-250-8045',
      email: 'todcarlsson618@gmail.com',
      createdOn: '6/6/2025', // m/d/y
      username: 'todcarlsson618@gmail.com',
      password: 'Ruth0011'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 900000000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '235665',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 28, 2025',
        description: 'Deposit from Swedish bank ( international wire) - XXXXXX28283',
        status: 'Success',
        amount_usd: 250000000.0
      },
      {
        dateTime: 'May 25, 2025',
        description: 'Deposit from Swedish bank ( international wire) - XXXXXX19374',
        status: 'Success',
        amount_usd: 200000000.0
      },
      {
        dateTime: 'May 21, 2025',
        description: 'Deposit from Swedish bank ( international wire) - XXXXXX37491',
        status: 'Success',
        amount_usd: 180000000.0
      },
      {
        dateTime: 'May 17, 2025',
        description: 'Deposit from Swedish bank ( international wire) - XXXXXX84720',
        status: 'Success',
        amount_usd: 150000000.0
      },
      {
        dateTime: 'May 12, 2025',
        description: 'Deposit from Swedish bank ( international wire) - XXXXXX20467',
        status: 'Success',
        amount_usd: 120000000.0
      },
    ]
  }
];
